import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

import { Image, Nav, Navbar, NavItem, Button, ButtonGroup, NavDropdown, MenuItem } from "react-bootstrap";

import PropTypes from "prop-types";
import AccountsUIWrapper from './AccountsUIWrapper';

export default class NavigationBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" >Sakana</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          {/*Nav para los elementos generales de la pagina*/}
          <Nav>
            <LinkContainer to="/">
              <NavItem >Home</NavItem>
            </LinkContainer>
          </Nav>

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
                <NavItem >Domicilios</NavItem>
              </LinkContainer>

              {/*Lista con opciones del cliente*/}
              <NavDropdown title={this.props.currentUser.username} id="Dropdown-Opciones-Usuario">
                <MenuItem>Modificar Perfil</MenuItem>
                <MenuItem divider />
                <MenuItem onClick={this.props.onSignOut}>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          }

          <Nav pullRight>
            {/*Lista de los menus*/}
            <LinkContainer to="/menus">
              <NavItem >Menus</NavItem>
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