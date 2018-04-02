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
                <MenuItem
                    key={i}
                    data={p}>
                </MenuItem>
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
    platos: PropTypes.array.isRequired
}