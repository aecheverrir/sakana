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
            <section className="hero">
                <div className="caption">
                    <h3>This Template Is Awesome</h3>
                    <h4>
                        <span className="rsep"></span>
                        resto restaurant home page website template
                        <span className="lsep"></span>
                    </h4>
                </div>
            </section> 
        )
    }
}

