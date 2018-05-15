import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ReactiveVar } from 'meteor/reactive-var';
import PropTypes from "prop-types";

import { Menus } from "../../api/menus";
import { Pedidos } from "../../api/pedidos";
import NavigationBar from "./NotLoggedNavBar";
import MainView from "./MainView";

const pedidosDateSort = new ReactiveVar({ creationDate: -1 });
const pedidosStateFilter = new ReactiveVar({ }); 
const pedidosPage = new ReactiveVar({currentPage: 1});
const PEDIDOS_PER_PAGE = 5;

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

    onSetStatePedido = (_id, owner, estado) => {
        Meteor.call("pedidos.setState", _id, owner, estado);
    };

    removePedido = (_id,estado) => {
        Meteor.call("pedidos.remove", _id, estado);
    }

    onSortPedidos = (sortingElement) => {
        pedidosDateSort.set(sortingElement);
    }

    onFilterPedidosState = (FilterElement) => {
        pedidosStateFilter.set(FilterElement);
    }

    onChangePedidosPage = (pageNumber) =>{
        let newPage = { currentPage: pageNumber }
        pedidosPage.set(newPage);
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
                    onSetStatePedido={this.onSetStatePedido.bind(this)}
                    pedidoActual={this.state.pedidoActual}
                    removePedido={this.removePedido.bind(this)}
                    onSortPedidos={this.onSortPedidos.bind(this)}
                    onFilterPedidosState={this.onFilterPedidosState.bind(this)}
                    onChangePedidosPage={this.onChangePedidosPage.bind(this)}
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
    Meteor.subscribe("pedidos", pedidosPage.get().currentPage, PEDIDOS_PER_PAGE);
    return {
        menus: Menus.find({}).fetch(),
        pedidos: Pedidos.find(pedidosStateFilter.get(), {sort: pedidosDateSort.get()}).fetch(),
        currentUser: Meteor.user()
    };
})(App));

/* CODE REVIEW BY: df.cubillos10

TODOS:
1. En las paginas change password y de mis domicilios,el footer no se despliega al final
de la pagina, sino más arriba. Es muy importante que arreglen esto.
2.En /domicilios los enunciados: #ID,Dirección,Fecha,Pedido y Estado aparecen como si
se les pudiera hacer click al pasar el cursor por encima. Revisar por favor.

Pros:
1.Buen diseño de la página.
2.Buen manejo de paginación.
3.Se ve como una aplicación muy usable,util y funcional.
4.Login funcional.
5.Implementaron hotjar
6.Buen README

Felicitaciones! sigan con el buen trabajo
*/
