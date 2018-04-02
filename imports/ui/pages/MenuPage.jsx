import React from 'react';
import Menu from '../components/Menu';
import PropTypes from "prop-types";

export default class MenuPage extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                <Menu 
                    onAddToPedidoActual={this.props.onAddToPedidoActual} 
                    updateMenu={this.props.updateMenu}
                    menus={this.props.menus}/>
            </div>
        )
    }
}

MenuPage.propTypes = {
    menus: PropTypes.array.isRequired
}