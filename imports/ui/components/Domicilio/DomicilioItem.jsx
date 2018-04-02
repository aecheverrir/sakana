import React from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem, ControlLabel, FormControl } from "react-bootstrap";

export default class DomicilioItem extends React.Component {
    constructor() {
        super();

    }

    onHandleStateChange = (event) => {
        let estado = event.target.value;
        let _id = this.props.pedido._id;
        let owner = this.props.pedido.owner;
        this.props.onSetStatePedido(_id, owner, estado);
    };


    render() {
        return (
            <Panel eventKey={"eventKey" + this.props.indice}>
                <Panel.Heading>
                    <Panel.Title toggle><h3>{this.props.pedido.address}</h3></Panel.Title>
                </Panel.Heading>

                <Panel.Body collapsible>
                    <p>Valor Total: ${this.props.pedido.price}</p>
                    <p>Comentarios: '{this.props.pedido.comment}'</p>
                </Panel.Body>

                <ListGroup>
                    <ListGroupItem bsStyle="info">
                        {!Roles.userIsInRole(Meteor.userId(), "admin") ?
                            <div>
                                <h4>Estado: '{this.props.pedido.pedidoState}'</h4>
                            </div>
                            :
                            <form>
                                <ControlLabel>Seleccionar Estado del Pedido</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    value={this.props.pedido.pedidoState}
                                    onChange={this.onHandleStateChange.bind(this)}
                                    placeholder="select"
                                >
                                    <option value={"Pedido recibido"}>Pedido recibido</option>
                                    <option value={"Preparando Comida"}>Preparando Comida</option>
                                    <option value={"En Camino"}>En Camino</option>
                                    <option value={"Entregado"}>Entregado</option>
                                </FormControl>
                            </form>       
                        }

                    </ListGroupItem>
                    {this.props.pedido.items.map((p, i) =>
                        <ListGroupItem key={p._id + "-" + i}> <h4>{p.name}:${p.price}</h4> {p.description} </ListGroupItem>
                    )}
                </ListGroup>
            </Panel>
        )
    }
}


