import React from 'react';
import Hero from '../components/Hero';

export default class HomePage extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                <Hero />
            </div>
        )
    }
}
