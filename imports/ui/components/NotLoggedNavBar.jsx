import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from 'react-router-dom';

import { Image, Nav, Navbar, NavItem, Button, ButtonGroup, NavDropdown, MenuItem, Glyphicon } from "react-bootstrap";

import PropTypes from "prop-types";

export default class NavigationBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink activeStyle={{ color: "#ff5c5c"}} to="/" >Sakana</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>

          {/*Nav para el usuario (si esta en sesion activa o no)*/}
          {!this.props.currentUser ?
            <Nav pullRight>
              {/*registrarse o ingresar*/}
              <LinkContainer to="/login">
                <NavItem >Ingresar</NavItem>
              </LinkContainer>
              <LinkContainer to="/signup">
                <NavItem >Registrarse</NavItem>
              </LinkContainer>
            </Nav>
            :
            <Nav pullRight>
              {/*Lista de los domicilios/pedidos del cliente*/}
              <LinkContainer to="/domicilios">
                <NavItem >Mis Domicilios</NavItem>
              </LinkContainer>

              {/*Carrito de compra del cliente*/}
              <LinkContainer to="/checkoutDomicilio">
                <NavItem ><Glyphicon glyph="shopping-cart" /> {this.props.pedidoActual.items.length > 0 ? "(1)" : null}</NavItem>
              </LinkContainer>

              {/*Lista con opciones del cliente*/}
              <NavDropdown title={this.props.currentUser.username} id="Dropdown-Opciones-Usuario">
                <LinkContainer to="/changePassword">
                <MenuItem>Cambiar Contraseña</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <MenuItem onClick={this.props.onSignOut}>Logout</MenuItem>
              </NavDropdown>
              
            </Nav>
          }

          <Nav pullRight>
            {/*Lista de los menus*/}
            <LinkContainer to="/menus">
              <NavItem >Menu</NavItem>
            </LinkContainer>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}
NavigationBar.propTypes = {
  currentUser: PropTypes.object
}