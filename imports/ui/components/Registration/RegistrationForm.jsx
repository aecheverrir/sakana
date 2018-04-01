import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col, Jumbotron, FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap";

import PropTypes from "prop-types";

export default class LoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      passwordDos: "",
      phoneNumber: "",
      error: "",
    };

    this.handleEmailChange.bind(this);
    this.handleNameChange.bind(this);
    this.handlePasswordChange.bind(this);
    this.handlePasswordDosChange.bind(this);
    this.handlePhoneNumberChange.bind(this);
    this.handleUsernameChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();

    //Login
    if (this.state.login) {
      Meteor.loginWithPassword(this.state.username, this.state.password, (e) => {
        if (e) {
          console.log("[ERROR] No se realiza el login: " + e.reason);
          this.setState({
            error: e.reason
          });
        }
        else {
          //TODO redireccionar a la pagina principal
        }
      });
    }
    //SignUp
    else {
      if (verifyPasswords()) {
        let newUser = {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
          profile: {
            name: this.state.name,
            phoneNumber: this.state.phoneNumber
          }
        };
        Accounts.createUser(newUser, (e) => {
          if (!Meteor.user() || e) {
            console.log("[ERROR] No se realiza el signup: " + e.reason);
            this.setState({
              error: e.reason
            });
          }
          else {
            //TODO redireccionar a la pagina principal
          }
        });
      }
      else {
        console.log("[ERROR] No se realiza el signup: Passwords dont match!");
        this.setState({
          error: "Passwords dont match!"
        });
      }

    }

  }

  verifyPasswords() {
    return (this.state.password === this.state.passwordDos);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handlePasswordDosChange(event) {
    this.setState({
      passwordDos: event.target.value
    });
  }

  handlePhoneNumberChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={5}>
            <Jumbotron>
              <h1>Bienvenido</h1>
              {this.props.isLogin ?
                <p>
                  A continuación, ingrese su usuario y contraseña para poder realizar pedidos.
                </p>
                :
                <p>
                  A continuación, ingrese los datos pedidos para crear su cuenta.
                </p>
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

              {!this.props.isLogin ?
                <div>
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
                      placeholder="Ingrese su nombre complerp"
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
                </div>
                :
                null
              }
              <FormGroup controlId="">
                <Button type="submit">{this.props.isLogin ? "Ingresar" : "Registrarse"}</Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }

}

LoginModal.propTypes = {
  isLogin: PropTypes.bool.isRequired
}