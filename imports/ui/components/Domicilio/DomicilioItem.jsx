import React from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Grid, Row, Col, Panel,  Label , Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Moment from "react-moment"

export default class DomicilioItem extends React.Component {
    constructor() {
        super();
        this.setDomicilioDetail = this.setDomicilioDetail.bind(this);
    }

    onHandleStateChange = (event) => {
        let estado = event.target.value;
        let _id = this.props.pedido._id;
        let owner = this.props.pedido.owner;
        this.props.onSetStatePedido(_id, owner, estado);
        this.setLabelClass = this.setLabelClass.bind(this);
    };

    setLabelClass( ){
        let pedidoStates = ["Pedido recibido", "Preparando Comida", "En Camino", "Entregado"];
        let opciones = ["info", "primary", "primary", "success", "default"];
        
        return (pedidoStates.indexOf(this.props.pedido.pedidoState) < 0) ? 
            opciones[4] : opciones[pedidoStates.indexOf(this.props.pedido.pedidoState)];
    }

    setDomicilioDetail(){
        this.props.setInfoDomicilioDetail(this.props.pedidoIndex);
    }

    render() {
        return (
            <tr onClick={this.setDomicilioDetail}>
                <td>{this.props.pedido._id}</td>
                <td>{this.props.pedido.address}</td>
                <td>
                    <Moment format="YY/MM/DD HH:mm a">
                        {this.props.pedido.creationDate}
                    </Moment>
                </td>
                <td>
                    <Label  bsStyle={this.setLabelClass()}>
                        {this.props.pedido.pedidoState}
                    </Label>
                </td>
            </tr>
        )
    }
}
DomicilioItem.propTypes = {
    pedido: PropTypes.object.isRequired,
    pedidoIndex: PropTypes.number,
    setInfoDomicilioDetail:  PropTypes.func
}

