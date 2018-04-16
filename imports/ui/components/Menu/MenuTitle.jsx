import React from 'react';

export default class MenuTitle extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div className="menu_title">
				<h2>Menu</h2>
			</div>
        )
    }
}