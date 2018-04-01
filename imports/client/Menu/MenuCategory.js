import React from 'react';

export default class MenuCategory extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <section className="info">
                <div className="title">
                    <h3>{this.props.cat}</h3>
                </div>
            </section>
        )
    }
}