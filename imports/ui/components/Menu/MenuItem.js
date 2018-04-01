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
                <img src="https://i.imgur.com/CEM270s.jpg" alt="foto del plato"/> 
                    <div className="item_info">
                        <h3 className="item_name">California Roll.</h3>
                        <p className="item_desc">Cheese, tomato, mushrooms, onions.</p>
                    </div>
                    <h4 className="price">$25.000</h4>
                    <span className="separator"></span>              
			</li>
        )
    }
}

