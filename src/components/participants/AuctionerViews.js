import React, { useState } from "react";
import * as Reach from "@reach-sh/stdlib/ALGO";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


import { ObserveTimeout, SeeWinningBid } from "./CommonViews";

const AuctionerViews = ({ appState, args, getParamsReady, getParams }) => {
    switch (appState) {
        case "getParams":
            return (
                getParamsReady
                    ? <GetParams getParams={getParams} />
                    : <h1>Loading the contract</h1>);

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

const GetParams = ({ getParams }) => {
    const [deadline, setDeadline] = useState(20);
    const [minPrice, setMinPrice] = useState(0.1);

    const handleClick = () => {
        const minPriceParsed = Reach.parseCurrency(minPrice);
        console.log(minPriceParsed);

        getParams({
            deadline: deadline,
            minPrice: minPriceParsed,
        });
    }

    return (
        <Container className="mt-4">
            <h2>appState: getParams</h2>

            <Form.Group>
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    type="number"
                    placeholder="Set deadline" />

                <Form.Label>Minimum Price</Form.Label>
                <Form.Control
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    type="number"
                    step="0.01"
                    placeholder="Set minimum price" />
            </Form.Group>

            <Button onClick={handleClick}>
                Start Auction
            </Button>
        </Container>
    );
}

export default AuctionerViews;