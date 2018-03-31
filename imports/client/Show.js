import React, { Component } from 'react'
import { Route, Switch, Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import Hero from './Hero';
import Menu from "./Menu";
import Footer from "./Footer";

export default class Show extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Switch>
              <Route exact path="/home" component={Hero} />
              <Route exact path="/menus" component={Menu} />
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Footer />
          </Col>
        </Row>
      </Grid>
    )
  }
}