'reach 0.1';

const ICommon = {
  /**
   * @param winningAddress: Address
   * @param winningBid: UInt
   * 
   * Kazanan adres ve teklif, kullanıcıya gösterilir
   */
  seeWinningBid: Fun([Address, UInt], Null),
  /**
   * Zaman aşımı olunca kullanıcıya haber vermek için
   */
  observeTimeout: Fun([], Null),
};

export const main = Reach.App(
  {}, [
  Participant('Auctioner', {
    ...ICommon,
    /**
     * @returns params: Object
     * -> deadline: UInt
     * -> minPrice: UInt
     * 
     * Açık arttırmanın koşulları alınır
     */
    getParams: Fun([], Object({
      deadline: UInt,
      minPrice: UInt,
    })),
  }),
  ParticipantClass('Buyer', {
    ...ICommon,
    ...hasRandom,
    /**
     * @param minimumBid: UInt
     * @returns bid: UInt
     */
    bid: Fun([UInt], UInt),

    /**
     * @param minimumBid: UInt
     * @returns mayBid: Bool
     * Kullanıcının teklifi vermek için yeterli parası var mı?
     */
    mayBid: Fun([UInt], Bool),

    /**
     * @param salt: Digest
     * Salt'u kullanıcıya gösterir, frontend'de saklanır
     */
    storeSalt: Fun([UInt], Null),

    /**
     * @return salt: Digest
     * Salt kullanıcından geri alınır
     */
    restoreSalt: Fun([], UInt),

    /**
     * @return bid: UInt
     * Bid kullanıcıdan geri alınır
     */
    restoreBid: Fun([], UInt),

    /**
     * Teklif verildiğinde haber vermek için
     */
    madeBid: Fun([], Null),
  })
], (Auctioner, Buyer) => {
  Auctioner.only(() => {
    const _params = interact.getParams();
    const [deadline, minPrice] = declassify([_params.deadline, _params.minPrice]);
  });
  Auctioner.publish(deadline, minPrice);

  // [adres, şifreli teklif]
  const bid = Maybe(Tuple(Address, Digest));

  // 32 boş tekliften oluşan array
  const emptyBids = Array.replicate(32, bid.None());

  // Deadline oluşturmak için
  const [timeRemaining, keepGoing] = makeDeadline(deadline);
  const [bids, i] = parallelReduce([emptyBids, 0])
    .invariant(balance() == 0 && i <= 32)
    .while(keepGoing() && i < 32)
    .case(
      Buyer,
      (() => {
        // Teklifi al ama paylaşma
        const _bid = interact.bid(minPrice);
        // Teklifi şifrele - Commit & Salt anahtar-kilit çifti gibi düşünülebilir
        const [_commitBid, _saltBid] = makeCommitment(interact, _bid);
        //const bid = declassify(interact.bid());

        interact.storeSalt(_saltBid);

        const mayBid = declassify(interact.mayBid(minPrice));
        const firstBid = bids.any((val) =>
          maybe(val, false, (valSome) => valSome[0] == this));
        const commitBid = declassify(_commitBid);

        return {
          msg: commitBid,
          when: mayBid && firstBid
        }
      }),
      ((msg) => 0),
      ((msg) => {
        commit();
        Buyer.only(() => {
          interact.madeBid();
        });
        Buyer.publish();

        require(this == this);
        const newBid = bid.Some([this, msg]);
        const newArray = bids.set(i, newBid);
        return [newArray, i + 1];
      })
    )
    .timeRemaining(timeRemaining());

  // Decrypt bids in another while loop

  const openBid = Maybe(Tuple(Address, UInt));
  const emptyOpenBids = Array.replicate(32, openBid.None());

  const [openBids, j] = parallelReduce([emptyOpenBids, 0])
    .invariant(balance() == 0 && j <= 32)
    .while(j < 32)
    .case(Buyer,
      (() => {
        const _saltBid = interact.restoreSalt();
        const _bid = interact.restoreBid();

        const mOwnBid = bids.findIndex((mVal) =>
          maybe(mVal, false, (sVal) => sVal[0] == this));

        const _pBidTuple = fromSome(bids[fromSome(mOwnBid, 0)], [this, digest(_saltBid + 1, _bid)]);
        const pBid = declassify(_pBidTuple[1]);

        const _bidExists = isSome(mOwnBid) && pBid == digest(_saltBid, _bid);
        const bidExists = declassify(_bidExists);

        const [saltBid, bidOpen] = declassify([_saltBid, _bid]);
        return {
          when: bidExists,
          msg: [pBid, saltBid, bidOpen],
        };
      }),
      ((msg) => 0),
      ((msg) => {
        const msgCommit = msg[0];
        const msgSalt = msg[1];
        const msgBid = msg[2];

        checkCommitment(msgCommit, msgSalt, msgBid);

        const newOpenBid = openBid.Some([this, msgBid]);
        const newArr = openBids.set(j, newOpenBid);

        return [newArr, j + 1];
      })
    )
    .timeout(10240, () => {
      Anybody.publish();
      return [openBids, j];
    });

  // Burada elimizde tüm teklifler [addres, teklif] şeklinde var
  const bidsOnly = openBids.map((val) => maybe(val, 0, (sVal) => sVal[1]));
  const highestBidIndex = bidsOnly.indexOf(bidsOnly.max()); // Maybe(UInt) -> index

  const announceWinner = (winnerIdx) => {
    const winnerBid = openBids[winnerIdx];
    const sWinnerBid = fromSome(winnerBid, [this, 0]);
    const winnerAddress = sWinnerBid[0];
    const winnerAmount = sWinnerBid[1];

    commit();
    Buyer.only(() => {
      interact.seeWinningBid(winnerAddress, winnerAmount);
    });
    Buyer.publish().pay(winnerAmount).when(this == winnerAddress).timeout(10240, () => {
      each([Buyer, Auctioner], () => {
        interact.observeTimeout();
      });
      Anybody.publish();
      return false;
    });

    transfer(balance()).to(Auctioner);

    commit();
    Auctioner.only(() => {
      interact.seeWinningBid(winnerAddress, winnerAmount);
    });
    Auctioner.publish();

    return true;
  };

  const success = maybe(highestBidIndex, false, announceWinner);
  commit();
  exit();
}
);
