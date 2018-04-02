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

import { Button } from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus:[ 
                {
                    category: "entradas", 
                    menuItems: 
                    [	 
                        {
                            "name":"California Roll",
                            "price":10,
                            "description":"el plato tiene : bla bla",
                            "image":"https://i.imgur.com/CEM270s.jpg" 
                        },
                        {
                            "name":"California Roll",
                            "price":10,
                            "description":"el plato tiene : bla bla",
                            "image":"https://i.imgur.com/CEM270s.jpg"
                        }
                    ]	
                },
                {
                    category: "arroces", 
                    menuItems: 
                    [	 
                        {
                            "name":"California Roll",
                            "price":10,
                            "description":"el plato tiene : bla bla",
                            "image":"https://i.imgur.com/CEM270s.jpg" 
                        },
                        {
                            "name":"California Roll",
                            "price":10,
                            "description":"el plato tiene : bla bla",
                            "image":"https://i.imgur.com/CEM270s.jpg"
                        }
                    ]
                } 
            ],
          
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
        if (itemsN.length > 0 ){
            pedido.owner = Meteor.userId();
            pedido.creationDate = new Date();
        }
        itemsN.push(newItem);
        
        this.setState({
            pedidoActual: {
                owner: pedido.owner,
                creationDate: pedido.creationDate,
                items: itemsN
            }
        });
    }

    onCreatePedido = (address, comments) => {
        let pedido = this.state.pedidoActual;
        pedido.address = address;
        pedido.comments = comments;

        let precio = 0;
        pedido.items.forEach(item => {
            precio += item.price;
        });
        pedido.price = precio;

        Meteor.call("pedidos.insert");
        this.props.history.push("/");
    }

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
                <form>
                    <Button onClick={this.addMenu}>agregar</Button>
                    <Button onClick={this.deleteMenu}>eliminar</Button>
                    <Button onClick={this.updateMenu}>cambiar</Button>
                </form>
                <NavigationBar currentUser={this.props.currentUser} onSignOut={this.onSignOut.bind(this)} />
                <MainView 
                    menus={this.props.menus} 
                    pedidos={this.props.pedidos} 
                    currentUser={this.props.currentUser}
                    onAddToPedidoActual={this.onAddToPedidoActual.bind(this)}
                    updateMenu={this.updateMenu.bind(this)}
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