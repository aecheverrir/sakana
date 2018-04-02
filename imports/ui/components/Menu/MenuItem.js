import React from 'react';

import { Meteor } from 'meteor/meteor'
import PropTypes from "prop-types";
import { Roles } from 'meteor/alanning:roles';
import { FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap";


export default class MenuItem extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    onHandleSubmit = () => {
        this.onAddToPedidoActual(this.props.item);
    };

    onHandleVisibilityChange = (event) => {
        let visible = event.target.value;
        let itemName = this.props.item.name;
        let _id = this.props.category._id;
        this.props.updateMenu(_id, itemName, visible);
    };

    render() {
        return (
            <li>
                <img src={this.props.item.img} alt="foto del plato" />
                <div className="item_info">
                    <h3 className="item_name"> {this.props.item.name} </h3>
                    <p className="item_desc"> {this.props.description} </p>
                    {this.props.currentUser ?
                        <form onSubmit={this.onHandleSubmit.item.bind(this)}>
                            <FormGroup >
                                <Button type="submit" bsSize="large" block>Agregar a Pedido</Button>
                            </FormGroup>
                        </form>
                        :
                        null
                    }
                    {!Roles.userIsInRole(Meteor.userId(), "admin") ?
                        <form onChange={this.onHandleVisibilityChange.bind(this)}>
                            <ControlLabel>Select</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value={true}>Visible</option>
                                <option value={false}>Oculto</option>
                            </FormControl>
                        </form>
                        :
                        null
                    }
                </div>
                <h4 className="price"> $ {this.props.item.price} </h4>
                <span className="separator"></span>
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

