import React from 'react';

import { Meteor } from 'meteor/meteor'
import PropTypes from "prop-types";
import { Roles } from 'meteor/alanning:roles';
import { FormControl, FormGroup, ControlLabel, Button, Grid, Row, Col } from "react-bootstrap";


export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    onHandleSubmit = (event) => {
        event.preventDefault();

        let item = {};
        item.name = this.props.item.name;
        item.description = this.props.item.description;
        item.price = this.props.item.price;
        
        console.log(item);
        this.props.onAddToPedidoActual(item);
    };

    onHandleVisibilityChange = (event) => {
        let visible = (event.target.value === "true");
        console.log("visible: " + visible + " " + typeof(visible))
        let itemName = this.props.item.name;
        let _id = this.props.categoryId;
        this.props.updateMenu(_id, itemName, visible);
    };

    render() {

        var styleDescrip = { 
            "paddingBottom" : "10px"
        };

        return (
            <li>
                <Grid fluid>
                    <Row>
                        <Col sm={2}>
                            <img src={this.props.item.image} alt="foto del plato" />
                        </Col>
                        <Col sm={8}>
                            <div className="item_info">
                                <h3 className="item_name"> {this.props.item.name} </h3>
                                <p className="item_desc" style={styleDescrip}> {this.props.item.description} </p>
                            </div>
                            {Meteor.user() ?
                                <form onSubmit={this.onHandleSubmit.bind(this)}>
                                    <FormGroup >
                                        <Button type="submit" bsSize="large" >Agregar a Pedido</Button>
                                    </FormGroup>
                                </form>
                                :
                                null
                            }
                            {Roles.userIsInRole(Meteor.userId(), "admin") ?
                                <form>
                                    <ControlLabel>Seleccionar Visibilidad</ControlLabel>
                                    <FormControl 
                                        componentClass="select" 
                                        value={this.props.item.visibility}
                                        onChange={this.onHandleVisibilityChange.bind(this)} 
                                        placeholder="select"
                                    >
                                        <option value={true}>Visible</option>
                                        <option value={false}>Oculto</option>
                                    </FormControl>
                                </form>
                                :
                                null
                            }
                        </Col>
                        <Col sm={2}>
                            <h4 className="price"> $ {this.props.item.price} </h4>
                        </Col>
                    </Row>
                </Grid>
            </li>
        )
    }
}
MenuItem.propTypes = {
    currentUser: PropTypes.object
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
}

