import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { withRouter } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col, Jumbotron, Panel, FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap";

import PropTypes from "prop-types";

export default class RegistrationAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      passwordDos: "",
      error: "",
    };

    this.handleEmailChange.bind(this);
    this.handleNameChange.bind(this);
    this.handlePasswordChange.bind(this);
    this.handlePasswordDosChange.bind(this);
    this.handleUsernameChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {

    event.preventDefault();

    if (this.state.password === this.state.passwordDos) {
      let newUser = {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
        profile: {
          name: this.state.name
        }
      };
      Meteor.call("users.insert", newUser);
      this.props.history.push("/login");
    }
    else {
      console.log("[ERROR] No se realiza el signup: Passwords dont match!");
      this.setState({
        error: "Passwords dont match!"
      });
    }

  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handlePasswordDosChange = (event) => {
    this.setState({
      passwordDos: event.target.value
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={5}>
            <Jumbotron>
              <h2>SignUp para Administradores</h2>
              <p>
                A continuación, ingrese sus credenciales para generar su cuenta de administrador.
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
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="userInput">
                <ControlLabel>Usuario</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Ingrese su nombre de usuario"
                  onChange={this.handleUsernameChange}
                />
              </FormGroup>
              <FormGroup controlId="passwordInput">
                <ControlLabel>Contraseña</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="Ingrese su contraseña"
                  onChange={this.handlePasswordChange}
                />
              </FormGroup>

              <FormGroup controlId="passwordTwoInput">
                <ControlLabel>Verificación Contraseña</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="Ingrese nuevamente su contraseña"
                  onChange={this.handlePasswordDosChange}
                />
              </FormGroup>
              <FormGroup controlId="nameInput">
                <ControlLabel>Nombre</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Ingrese su nombre completo"
                  onChange={this.handleNameChange}
                />
              </FormGroup>
              <FormGroup controlId="emailInput">
                <ControlLabel>Correo Electrónico</ControlLabel>
                <FormControl
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  onChange={this.handleEmailChange}
                />
              </FormGroup>

              <FormGroup controlId="submit-Ingreso">
                <Button type="submit" bsSize="large" block>{this.props.isLogin ? "Ingresar" : "Registrarse"}</Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }

}
