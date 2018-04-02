import React from 'react';
import DomicilioItem from "./Domicilio/DomicilioItem"

import { Grid, Panel, PanelGroup, ListGroup, ListGroupItem, FormControl, FormGroup, ControlLabel, Button, Well } from "react-bootstrap";

export default class Hero extends React.Component{
    constructor(){
        super();
        this.state = {
            address: "",
            comment: "",
            error:"",
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
        if (this.props.pedidoActual.items.length === 0){
            this.setState({
                error: "Debe agregar elementos del menu para hacer el pedido!"
            });
        }
        else if(this.state.address.length === 0){
            this.setState({
                error: "Debe agregar una direccion para hacer el pedido!"
            });
        }
        else{
            let address = this.state.address;
            let comment = this.state.comment;
            this.setState({
                address: "",
                comment: "",
                error: "",
            });
            this.props.onCreatePedido(address,comment);
        }
    }

    render(){

        var styleProcessing = { 
            "color": "#5bc0de"
        }; 
        var styleFood = { 
            "color": "#ff5c5c"
        };
        var styleSending = { 
            "color": "#ffa500"
        };
        var styleFinished = { 
            "color": "#25d366"
        };
        var styleCanceled = { 
            "color": "#000000"
        };

        return(
            <Grid>
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
                                    <Button type="submit" bsSize="large" block>{this.props.isLogin ? "Ingresar" : "Registrarse"}</Button>
                                </FormGroup>

                            </form>
                        </Panel.Body>

                        <ListGroup>
                            
                            {this.props.pedidoActual.items.map((p, i) =>
                                <ListGroupItem key={p._id + "-" + i}> <h4>{p.name}:${p.price}</h4> {p.description} </ListGroupItem>
                            )}
                        </ListGroup>
                    </Panel>
                </PanelGroup>
                <PanelGroup defaultActiveKey="eventKey1" id="accordion-controlled-Domicilios">
                    {
                        this.props.pedidos.map((p, i) =>
                            <DomicilioItem 
                                key={p._id} 
                                indice={i} 
                                pedido={p}
                                onSetStatePedido={this.props.onSetStatePedido}
                            />
                        )
                    }
                </PanelGroup>
            </Grid>
            
        )
    }
}
