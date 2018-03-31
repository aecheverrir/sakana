import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Banner from "./Header";
import Show from "./Show";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="AppContainer">
                <Banner />
                <Show />
            </div>
        )
    }
}