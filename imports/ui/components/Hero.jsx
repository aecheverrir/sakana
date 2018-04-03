import React from 'react';

export default class Hero extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                <section className="hero">
                </section> 
            </div>
        )
    }
}

