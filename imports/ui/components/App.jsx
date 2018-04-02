import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import { Menus } from "../../api/menus";
import NavigationBar from "./NotLoggedNavBar";
import MainView from "./MainView";

import { Button } from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);

    }

    onSignOut = () => {
        if (Meteor.user()) {
            Meteor.logout((e) => {
                if (e !== undefined) {
                    console.log("ERROR: no fue posible realizar un logout: " + e);
                }else{
                    this.props.history.push("/");
                }
            });
        }
    };
    addMenu = () =>{
        let algoo = {
            category: "Arroz",
            menuItems: [
                {
                    name: "arrocito",
                    description: "es arroz",
                    image: "arroz con algo",
                    price: 25000,

                }
            ]
        };
        Meteor.call("menus.insert", algoo)
    };

    deleteMenu = () => {
        
        let idMenu = this.props.menus[0]._id;
        Meteor.call("menus.remove", idMenu)
    };
    updateMenu = () => {

        let idMenu = this.props.menus[0]._id;
        let itemName = this.props.menus[0].menuItems[0].name;
        Meteor.call("menus.setVisibility", idMenu, itemName, false) 
    };
    

    render() {

        return (
            <div>
                <form>
                    <Button onClick={this.addMenu}>agregar</Button>
                    <Button onClick={this.deleteMenu}>eliminar</Button>
                    <Button onClick={this.updateMenu}>cambiar</Button>
                </form>
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