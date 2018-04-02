import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import { Menus } from "../../api/menus";
import { Pedidos } from "../../api/pedidos";
import NavigationBar from "./NotLoggedNavBar";
import MainView from "./MainView";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {       
            pedidoActual: {
                items: []
            }
        }

        this.onAddToPedidoActual.bind(this);
    }

    onAddToPedidoActual = (newItem) => {
        console.log(newItem);

        let pedido = this.state.pedidoActual;
        let itemsN = this.state.pedidoActual.items;
        if (itemsN.length === 0 ){
            pedido.owner = Meteor.user()._id;
            pedido.creationDate = new Date();
        }
        itemsN.push(newItem);
        console.log(pedido);
        this.setState({
            pedidoActual: {
                owner: pedido.owner,
                creationDate: pedido.creationDate,
                items: itemsN
            }
        });
    };

    onCreatePedido = (address, comments) => {
        let pedido = this.state.pedidoActual;
        pedido.address = address;
        pedido.comments = comments;

        let precio = 0;
        pedido.items.forEach(item => {
            precio += item.price;
        });
        pedido.price = precio;
        console.log(pedido);

        Meteor.call("pedidos.insert", pedido);

        this.setState({
            pedidoActual: {
                items: []
            }
        });
        this.props.history.push("/domicilios");
    };

    onSignOut = () => {
        if (Meteor.user()) {
            Meteor.logout((e) => {
                if (e !== undefined) {
                    console.log("ERROR: no fue posible realizar un logout: " + e);
                } else {
                    this.props.history.push("/");
                }
            });
        }
    };
    addMenu = () => {
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

    updateMenu = (_id, itemName, visible) => {
        Meteor.call("menus.setVisibility", _id, itemName, visible);
    };


    render() {

        return (
            <div>
                <NavigationBar 
                    currentUser={this.props.currentUser} 
                    pedidoActual={this.state.pedidoActual} 
                    onSignOut={this.onSignOut.bind(this)} 
                />
                <MainView 
                    menus={this.props.menus} 
                    pedidos={this.props.pedidos} 
                    currentUser={this.props.currentUser}
                    onAddToPedidoActual={this.onAddToPedidoActual.bind(this)}
                    updateMenu={this.updateMenu.bind(this)}
                    onCreatePedido={this.onCreatePedido.bind(this)}
                    pedidoActual={this.state.pedidoActual}
                />
            </div>
        )
    }
}

App.propTypes = {
    menus: PropTypes.array.isRequired,
    pedidos: PropTypes.array.isRequired,
    currentUser: PropTypes.object
}

export default withRouter(withTracker(() => {
    Meteor.subscribe("menus");
    Meteor.subscribe("pedidos", Meteor.userId);

    return {
        menus: Menus.find({}).fetch(),
        pedidos: Pedidos.find({}).fetch(),
        currentUser: Meteor.user()
    };
})(App));