import React from 'react';

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
                <img src={this.props.img} alt="foto del plato"/> 
                    <div className="item_info">
                        <h3 className="item_name"> {this.props.name} </h3> 
                        <p className="item_desc"> {this.props.description} </p>
                    </div>
                    <h4 className="price"> $ {this.props.price} </h4>
                    <span className="separator"></span>              
			</li>
        )
    }
}

