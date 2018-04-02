import React from 'react';
import { Grid, Row, Col, Panel, ListGroup, ListGroupItem } from "react-bootstrap";

export default class DomicilioItem extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title toggle>{this.props.pedido.address + ":  " + this.props.pedido.pedidoState}</Panel.Title>
                </Panel.Heading>

                <Panel.Body collapsible>
                    <p>Valor Total: ${this.props.pedido.price}</p>
                    <p>Comentarios: ${this.props.pedido.comment}</p>
                </Panel.Body>

                <ListGroup>
                    <ListGroupItem bsStyle="info"><h4>Estado:</h4> '{this.props.pedido.pedidoState}'</ListGroupItem>
                    {this.props.pedido.items.map((p, i) =>
                        <ListGroupItem key={p._id + "-" + i}> <h4>{p.name}:${p.price}</h4> {p.description} </ListGroupItem>
                    )}
                </ListGroup>
            </Panel>
        )
    }
}


