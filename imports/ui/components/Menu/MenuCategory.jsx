import React from 'react';
import PropTypes from "prop-types";

export default class MenuCategory extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="info">
                <div className="title">
                    <h3>{this.props.category}</h3>
                </div>
            </section>
        )
    }
}

MenuCategory.propTypes = {
    category: PropTypes.string
}