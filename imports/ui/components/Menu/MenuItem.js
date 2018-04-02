import React from 'react';
import PropTypes from "prop-types";

export default class MenuItem extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <li>
                <img src={this.props.data.img} alt="foto del plato"/> 
                    <div className="item_info">
                        <h3 className="item_name"> {this.props.data.nombre} </h3> 
                        <p className="item_desc"> {this.props.data.descripcion} </p>
                    </div>
                    <h4 className="price"> $ {this.props.data.precio} </h4>
                    <span className="separator"></span>              
			</li>
        )
    }
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
}

