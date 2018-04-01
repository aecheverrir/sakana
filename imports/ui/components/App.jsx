import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import { Menus } from "../../api/menus";
import NotLoggedNavBar from "./NotLoggedNavBar";
import MainView from "./MainView";


class App extends Component{
    constructor(props) {
        super(props);
    }
    
    onLogin(){

    }
    onLogout(){

    }
    onSignUp(){
        
    }
    
    render(){
        
        return(
            <div>
                <NotLoggedNavBar currentUser={this.props.currentUser} />
                <MainView menus={this.props.menus} currentUser={this.props.currentUser} />
            </div>
        )
    }
}

App.propTypes = {
    menus: PropTypes.array.isRequired
}

export default withTracker(() => {
    return {
        menus: Menus.find({}).fetch(),
        currentUser: Meteor.user()
    };
})(App);