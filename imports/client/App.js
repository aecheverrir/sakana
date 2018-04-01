import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Menus } from "../api/menus";

import NotLoggedNavBar from "../ui/components/NotLoggedNavBar";
import MainView from "../ui/components/MainView";

class App extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    
    render(){
        {console.log(this.props.menus)}
        return(
            <div>
                <NotLoggedNavBar />
                <MainView />
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        menus: Menus.find({}).fetch(),
    };
})(App);