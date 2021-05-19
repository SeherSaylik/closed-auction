import React, { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import BuyerViews from "./BuyerViews";

export class Buyer extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            salt: 0,
            amt: 0,
            resBid: null,
        };

        this.bidExt = this.bidExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ctcArgs,] = this.context;
        this.interval = setInterval(async () => this.updateBalance(), 20000);

        Backend.Buyer(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async bid(minPrice) {
        const minPriceFormatted = Reach.formatCurrency(minPrice, 4);
        const bid = await new Promise(res => {
            this.setState({
                appState: "bid",
                args: [minPriceFormatted],
                resBid: res,
            });
        });

        this.updateBalance();

        console.log(`Bid is set to ${bid} ALGO`);
        this.setState(prevState => ({
            ...prevState,
            amt: bid,
        }));

        const bidParsed = Reach.parseCurrency(bid);
        return bidParsed;
    }
    bidExt(b) {
        this.state.resBid(b);
    }

    async mayBid(minPrice) {
        const [account,] = this.context;
        const balance = await Reach.balanceOf(account)

        const fmt = (amt) => Reach.formatCurrency(amt, 4);
        console.log(`Balance: ${fmt(balance)}, Minimum Bid: ${fmt(minPrice)}`);

        return balance >= minPrice;
    }

    async storeSalt(salt) {
        const saltFormatted = Reach.bigNumberToNumber(salt);
        this.setState(prevState => ({
            ...prevState,
            salt: saltFormatted,
        }));
    }

    async restoreSalt() {
        return this.state.salt;
    }

    async restoreBid() {
        return Reach.parseCurrency(this.state.amt);
    }

    async madeBid() {
        this.setState({
            appState: "madeBid",
        });
    }

    async observeTimeout() {
        this.setState({
            appState: "observeTimeout",
        });
    }

    async seeWinningBid(address, bid) {
        const bidFormatted = Reach.formatCurrency(bid, 4);
        this.setState({
            appState: "seeWinningBid",
            args: [address, bidFormatted],
        });
    }

    render() {
        return (<BuyerViews
            appState={this.state.appState}
            args={this.state.args}
            bidReady={this.state.resBid !== null}
            bid={this.bidExt} />);
    }
}