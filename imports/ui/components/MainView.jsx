import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import DomiciliosPage from "../pages/DomiciliosPage";
import PageNotFound from "../pages/PageNotFound";

import Footer from "./Footer";
/*
  Componente que realiza el manejo de Paginas del proyecto
*/
export default class MainView extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <Grid fluid>
        {console.log(this.props.menus)}
        <Row>
          <Col sm={12}>
            <Route exact path="/" component={HomePage} />
            <Route path="/menus" component={MenuPage} />
            <Route path="/domicilios" component={DomiciliosPage} />

          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={12}>
            <Footer />
          </Col>
        </Row>
      </Grid>
    )
  }
}

MainView.propTypes = {
  menus: PropTypes.array.isRequired,
  currentUser: PropTypes.object
}