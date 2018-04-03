import React from "react";
import MenuTitle from "./Menu/MenuTitle";
import MenuCategory from "./Menu/MenuCategory";
import MenuCategoryList from "./Menu/MenuCategoryList";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

export default class Menu extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <Grid fluid>
                <Row>
                    <Col sm={12}>
                        <section id="menu" className="menu">
                            <div className="wrapper">        
                                <MenuTitle />
                                {
                                    this.props.menus.map((p,i) => {
                                        return(
                                            <div key={i}>
                                                <MenuCategory category={p.category} />
                                                <MenuCategoryList 
                                                    updateMenu={this.props.updateMenu}
                                                    onAddToPedidoActual={this.props.onAddToPedidoActual} 
                                                    menuItems={p.menuItems}
                                                    categoryId={p._id}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
Menu.propTypes = {
    menus: PropTypes.array.isRequired
}