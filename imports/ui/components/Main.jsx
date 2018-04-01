import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";

import Hero from "../../client/Hero";
import Menu from "../../client/Menu";

export default class NotLoggedNavBar extends Component {

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={12}>
            <Switch>
              <Route path="/" component={Hero} />
              <Route path="/menus" component={Menu} />
            </Switch>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            
          </Col>
        </Row>
      </Grid>
    )
  }
}