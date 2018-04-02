import React from 'react';
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

export default class MenuCategoryList extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    renderMenuItems() {
        return this.props.platos.map((p,i) =>
                <MenuItem key={p.nombre + i} item={p} />
        );
    }

    render(){
        return(
            <ul>    
                {this.renderMenuItems()}
            </ul>
        )
    }
}

MenuCategoryList.propTypes = {
    platos: PropTypes.array
}