import React from 'react';
import Menu from '../components/Menu';

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
                <Menu />
            </div>
        )
    }
}