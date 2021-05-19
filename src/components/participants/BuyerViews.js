import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import { ObserveTimeout, SeeWinningBid } from "./CommonViews";

const BuyerViews = ({
    appState, args,
    bidReady, bid
}) => {

    switch (appState) {
        case "bid":
            return (
                bidReady
                    ? <MakeBid bid={bid} minPrice={args[0]} />
                    : <h1>Loading the contract</h1>);

        case "madeBid":
            return (<MadeBid />);

        case "observeTimeout":
            return (<ObserveTimeout />);

        case "seeWinningBid":
            return (<SeeWinningBid
                winningAddress={args[0]}
                winningBid={args[1]} />);
        default:
            break;
    }

    return (
        <Container className="mt-4">
            <h2>Waiting for contract</h2>
            <Spinner animation="border" />
        </Container>
    );
}

export const MakeBid = ({ bid, minPrice }) => {
    const [amt, setAmt] = useState(0.1);

    const handleClick = () => {
        bid(amt);
    }

    return (
        <Container className="mt-4">
            <h2>appState: bid</h2>
            <h3>Set your bid: (minimum bid amount is: {minPrice})</h3>

            <Form.Group>
                <Form.Label>Bid Amount:</Form.Label>
                <Form.Control
                    value={amt}
                    onChange={(e) => setAmt(e.target.value)}
                    type="number"
                    step="0.01"
                    placeholder="Set bid amount" />
            </Form.Group>

            <Button onClick={handleClick}>
                Set Bid
            </Button>
        </Container>
    );
}

const MadeBid = () => {
    return (
        <Container className="mt-4">
            <h2>Bid successful ✅</h2>
            <h3>Waiting for result</h3>
            <Spinner animation="border" />
        </Container>
    );
}

export default BuyerViews;