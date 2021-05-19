import React, { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import AuctionerViews from "./AuctionerViews";

export class Auctioner extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            resGetParams: null,
        };

        this.getParamsExt = this.getParamsExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , ctcArgs,] = this.context;
        this.interval = setInterval(async () => this.updateBalance(), 20000);

        Backend.Auctioner(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async getParams() {
        const params = await new Promise(res => {
            this.setState({
                appState: "getParams",
                resGetParams: res,
            });
        });

        console.log(`Params are set to ${JSON.stringify(params)}`);
        return params;
    }
    getParamsExt(p) {
        this.state.resGetParams(p);
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
        this.updateBalance();
    }

    render() {
        return (<AuctionerViews
            appState={this.state.appState}
            args={this.state.args}
            getParamsReady={this.state.resGetParams !== null}
            getParams={this.getParamsExt} />);
    }
}