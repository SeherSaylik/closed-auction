import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const SeeWinningBid = ({ winningAddress, winningBid }) => {
    return (
        <Container className="mt-4">
            <h2>appState: seeWinningBid</h2>
            <small>{winningAddress}</small>
            <h2>Bid: {winningBid}</h2>
        </Container>
    );
}

export const ObserveTimeout = () => {
    return (
        <Container className="mt-4">
            <h2>appState: observeTimeout</h2>
            <h2>Observed timeout</h2>
        </Container>
    );
}