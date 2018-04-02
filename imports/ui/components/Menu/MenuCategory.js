import React from 'react';
import PropTypes from "prop-types";

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

MenuCategory.propTypes = {
    cat: PropTypes.string.isRequired
}