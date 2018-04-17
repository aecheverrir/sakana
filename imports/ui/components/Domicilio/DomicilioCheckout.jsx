import React from 'react';
import PropTypes from "prop-types";

import { Grid, Row, Col, Panel, PanelGroup, FormControl, FormGroup, ControlLabel, Button, Well, Table } from "react-bootstrap";

export default class DomicilioCheckout extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      comment: "",
      error: "",
    }
  }

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value
    });
  }

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.props.pedidoActual.items.length === 0) {
      this.setState({
        error: "Debe agregar elementos del menu para hacer el pedido!"
      });
    }
    else if (this.state.address.length === 0) {
      this.setState({
        error: "Debe agregar una direccion para hacer el pedido!"
      });
    }
    else {
      let address = this.state.address;
      let comment = this.state.comment;
      this.setState({
        address: "",
        comment: "",
        error: "",
      });
      this.props.onCreatePedido(address, comment);
    }
  }

  render() {
    var total = 0;

    return (
      <Grid>
        <Row>
          <Col md={6}>
            <Table responsive>
              <thead className="text-center">
                <tr>
                  <th>Item</th>
                  <th>Valor (COP)</th>
                </tr>
              </thead>
              <tbody className="text-right">
                {
                  this.props.pedidoActual.items.map((item, index) => {
                    total += item.price;
                    return (
                      <tr key={item.name + index}>
                        <td className="CheckoutItem">{item.name}</td>
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
                  <th>$ {total}</th>
                </tr>
              </thead>
            </Table>
          </Col>
          <Col md={6}>
            <PanelGroup accordion id="accordion-controlled-Domicilios">
              <Panel>
                <Panel.Heading>
                  <Panel.Title toggle>Nuevo Pedido:</Panel.Title>
                </Panel.Heading>

                <Panel.Body collapsible>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="AddressInput">
                      <ControlLabel>Dirección</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Ingrese su dirección"
                        onChange={this.handleAddressChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="CommentInput">
                      <ControlLabel>Comentarios</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Ingrese los comentarios que desee"
                        onChange={this.handleCommentChange}
                      />
                    </FormGroup>
                    {this.state.error ?
                      <Well>{this.state.error}</Well>
                      :
                      null
                    }
                    <FormGroup controlId="domicilioCrear">
                      <Button type="submit" bsSize="large" block>{this.props.isLogin ? "Ingresar" : "Hacer Pedido"}</Button>
                    </FormGroup>

                  </form>
                </Panel.Body>
              </Panel>
            </PanelGroup>
          </Col>
        </Row>
        
      </Grid>

    )
  }
}
