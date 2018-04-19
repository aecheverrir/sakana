import React from 'react';
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import { Roles } from 'meteor/alanning:roles';

export default class MenuCategoryList extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    renderMenuItems() {
        return this.props.menuItems.map((p,i) =>
            <div key={p.name + i}>
                {p.visibility || Roles.userIsInRole(Meteor.userId(), "admin")  ?
                    <MenuItem
                        item={p}
                        categoryId={this.props.categoryId}
                        onAddToPedidoActual={this.props.onAddToPedidoActual}
                        updateMenu={this.props.updateMenu}
                    />
                    :
                    null
                }
                
            </div>
        );
    }

    render(){
        return(
            <ul>    
                {this.renderMenuItems()}
            </ul>
        )
    }
}

MenuCategoryList.propTypes = {
    platos: PropTypes.array
}