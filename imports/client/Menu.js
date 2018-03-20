import React from 'react';

export default class Menu extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <h1>Menu here</h1> 
        )
    }
}