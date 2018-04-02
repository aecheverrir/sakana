import React from 'react';
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

export default class MenuCategoryList extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    renderMenuItems() {
        return this.props.menuItems.map((p,i) =>
            <MenuItem 
                key={p.name + i} 
                item={p} 
                categoryId={this.props.categoryId}
                onAddToPedidoActual={this.props.onAddToPedidoActual}
                updateMenu={this.props.updateMenu}
            />
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