import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import Hero from "../../client/Hero";
import Menu from "../../client/Menu";
import Footer from "../../client/Footer";
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
            <Switch>
              <Route exact path="/" component={Hero} />
              <Route path="/menus" component={Menu} />
            </Switch>
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
  menus: PropTypes.array.isRequired
}