import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col, Jumbotron, Panel, FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap";

import PropTypes from "prop-types";

export default class ChangeProfileDataForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordDos: "",
      error: "",
    };
    this.onChangePassword.bind(this);

  }

  onChangePassword = (p1, p2) => {
    if (Meteor.user() && this.state.password.length > 0 && this.state.passwordDos.length > 0) {
      Accounts.changePassword(this.state.password, this.state.passwordDos, (e) => {
        if (e) {
          console.log("ERROR: No se ha cambiado la contrasena");
          this.setState({
            error: e
          });
        }
        else {
          this.props.history.push("/");
        }
      });
    }
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handlePasswordDosChange = (event) => {
    this.setState({
      passwordDos: event.target.value
    });
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={5}>
            <Jumbotron>
              <h2>Cambiar Contraseña</h2>
              <p>
                A continuación, ingrese su contraseña y la nueva contraseña que desea utilizar.
              </p>
              {this.state.error.length > 0 ?
                <Panel bsStyle="danger">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">Error al enviar los datos</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>No ha sido posible realizar la acción: {this.state.error}</Panel.Body>
                </Panel>
                :
                null
              }
            </Jumbotron>
          </Col>
          <Col xs={12} sm={12} md={7}>
            <form onSubmit={this.onChangePassword}>
              <FormGroup controlId="passwordInput">
                <ControlLabel>Contraseña Antigua</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="Ingrese su contraseña actual"
                  onChange={this.handlePasswordChange}
                />
              </FormGroup>
              <FormGroup controlId="passwordTwoInput">
                <ControlLabel>Nueva Contraseña</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="Ingrese su nueva contraseña"
                  onChange={this.handlePasswordDosChange}
                />
              </FormGroup>

              <FormGroup controlId="submit-Cambio">
                <Button type="submit" bsSize="large" block>Cambiar Contraseña</Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }

}
