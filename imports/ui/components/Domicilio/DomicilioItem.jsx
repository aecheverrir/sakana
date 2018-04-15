import React from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem, ControlLabel, FormControl, FormGroup, Button } from "react-bootstrap";

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
    
    onCancelPedido = (event) =>{
        event.preventDefault();

        this.props.removePedido(this.props.pedido._id, this.props.pedido.pedidoState);
    }


    render() {
        var total = 0;
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
                            <Row>
                                <Col xs={12} md={4} >
                                    <form onSubmit={this.onCancelPedido.bind(this)} >
                                        <FormGroup controlId="submit-Cancelacion">
                                            <Button type="submit" block>Cancelar Pedido</Button>
                                        </FormGroup>
                                    </form>
                                </Col>
                                <Col xs={12} md={8} >
                                    <h4>Estado: '{this.props.pedido.pedidoState}'</h4>
                                </Col>
                            </Row>
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
                    {this.props.pedido.items.map(function pedidos(p, i){
                        total = total + p.price;
                        return <ListGroupItem key={p._id + "-" + i}> <h4>{p.name}: ${p.price}</h4> {p.description} </ListGroupItem>
                        }  
                    )}
                    <ListGroupItem> <h4> Total: ${total}</h4> </ListGroupItem>
                </ListGroup>
            </Panel>
        )
    }
}


