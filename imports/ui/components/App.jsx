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

    }

    onSignOut= () =>{
        if(Meteor.user()){
            Meteor.logout((e) =>{
                if(e !== undefined){
                    console.log("ERROR: no fue posible realizar un logout: " + e);
                }
            });
        }
    };
    
    render(){
        
        return(
            <div>
                <NavigationBar currentUser={this.props.currentUser} onSignOut={this.onSignOut.bind(this)} />
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