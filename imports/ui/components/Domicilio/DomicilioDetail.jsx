import React from 'react';
import PropTypes from "prop-types";
import { Roles } from 'meteor/alanning:roles';
import { Grid, Row, Col, PageHeader, Table, DropdownButton, MenuItem, Button, Label  } from "react-bootstrap";
import { DESTRUCTION } from 'dns';

export default class DomicilioDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            error: ""
        }
    }

    onHandleStatePedidoChange = (e) => {
        console.log("Cambioo: " + e);
        this.props.onSetStatePedido(this.props.pedido._id, this.props.pedido.owner, e);
    }

    onCancelPedido = ( ) => {
        event.preventDefault();
        if (this.props.pedido.pedidoState !== "Entregado"){
            this.props.removePedido(this.props.pedido._id, this.props.pedido.pedidoState);
            this.props.clearPedido();
        }
        else{
            this.setState({
                error: "El pedido ya está en proceso, por lo que no se puede cancelar"
            });
        }
    }

    generateStateOptions(){
        let posibleStates = ["Pedido recibido", "Preparando Comida", "En Camino", "Entregado"];
        let indice = posibleStates.indexOf(this.props.pedido.pedidoState);

        return(
            <DropdownButton
                onSelect={this.onHandleStatePedidoChange.bind(this)}
                bsStyle={"info"}
                title={"Cambiar Estado"}
                id="Dropdown-Estados-Pedido">
                {posibleStates.map((estado, index) => {
                    return (
                        <MenuItem key={"estado" + index} eventKey={estado}>
                            {estado}
                        </MenuItem>
                    )
                })}
            </DropdownButton>
        );
    }

    render() {
        return (
            <div >
                <h2 className="text-right" >
                    Tu Pedido
                </h2>
                {
                    this.props.pedido.items ?
                        <Row>
                            <Table responsive>
                                <thead className="text-center">
                                    <tr>
                                        <th>Item</th>
                                        <th>Valor (COP)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-right">
                                    {
                                        this.props.pedido.items.map((item, index) => {
                                            return (
                                                <tr key={item.name + index}>
                                                    <td>{item.name}</td>
                                                    <td>$ {item.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                            <Table>
                                <thead className="text-center">
                                    <tr>
                                        <th>Costo Total</th>
                                        <th>$ {this.props.pedido.price}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {console.log(this.props.currentUser)}
                                        {Roles.userIsInRole(this.props.currentUser._id, "admin") ?
                                            < td >
                                                {this.generateStateOptions()}
                                            </td>
                                            :
                                            <td>
                                                {this.props.pedido.pedidoState !== "Entregado" ?
                                                    <Button onClick={this.onCancelPedido.bind(this)}
                                                        bsStyle="danger"
                                                        bsSize="large" block>Cancelar
                                                    </Button>
                                                    :
                                                    <h2>
                                                        <Label bsStyle="info">
                                                            El Pedido No puede ser Eliminado
                                                        </Label>
                                                    </h2>
                                                 }
                                                
                                            </td>                                         
                                        }
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        :
                        null
                }
            </div>
        )
    }
}

DomicilioDetail.propTypes = {
    removePedido: PropTypes.func,
    clearPedido: PropTypes.func,
    pedido: PropTypes.object.isRequired,
    currentUser: PropTypes.object
}