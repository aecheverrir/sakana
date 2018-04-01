import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import { Menus } from "../../api/menus";
import NavigationBar from "./NotLoggedNavBar";
import MainView from "./MainView";


class App extends Component{
    constructor(props) {
        super(props);

        this.onSignOut.bind(this);
    }
    
    nextPath = () =>{

    };

    onSignOut= () =>{
        if(Meteor.user()){
            Meteor.logoutOtherClients((e) =>{
                console.log("ERROR: no fue posible realizar un logout!")
            });
        }
    };
    
    render(){
        
        return(
            <div>
                <NavigationBar currentUser={this.props.currentUser} />
                <MainView menus={this.props.menus} currentUser={this.props.currentUser} />
            </div>
        )
    }
}

App.propTypes = {
    menus: PropTypes.array.isRequired
}

export default withRouter(withTracker(() => {
    return {
        menus: Menus.find({}).fetch(),
        currentUser: Meteor.user()
    };
})(App));