import React, { useContext, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import ConnectWallet from "../reach/ConnectWallet";
import { Context } from "../../Context";
import { AttachButton, DeployButton } from "../reach/DeployAttach";

const Home = () => {

    const [account, , , , ,] = useContext(Context);
    const [wager, setWager] = useState(0);

    return account !== "" ? (
        <Container className="h-100">
            <div className="mt-5">
                <Row>
                    <Col>
                        <Card className="p-3">
                            <Card.Title>Create an Auction</Card.Title>
                            <hr className="mt-1" />
                            <Card.Text>
                                Create your own auction
                            </Card.Text>
                            <DeployButton ctcArgs={[]} />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3">
                            <Card.Title>Join Auction</Card.Title>
                            <hr className="mt-1" />
                            <Card.Text>
                                Join a auction
                            </Card.Text>
                            <AttachButton />
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    ) : (
        <Container className="mt-5">
            <h1>Please connect your wallet</h1>
            <ConnectWallet />
        </Container>
    );
}

export default Home;