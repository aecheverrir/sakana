import React from "react";
import MenuTitle from "./Menu/MenuTitle";
import MenuCategory from "./Menu/MenuCategory";
import MenuCategoryList from "./Menu/MenuCategoryList";
import PropTypes from "prop-types";

export default class Menu extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <section id="menu" className="menu">
		        <div className="wrapper">        
                    <MenuTitle />
                    {
                        this.props.menus.map((p,i) => {
                            return(
                                <div key={i}>
                                    <MenuCategory cat={p.categoria} />
                                    {console.log(p.platos)}
                                    <MenuCategoryList platos={p.platos} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
Menu.propTypes = {
    menus: PropTypes.array.isRequired
}