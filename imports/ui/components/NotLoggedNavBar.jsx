import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { LinkContainer } from "react-router-bootstrap";
import { Image, Nav, Navbar, NavItem, Button, ButtonGroup, NavDropdown, MenuItem } from "react-bootstrap";

import PropTypes from "prop-types";
import AccountsUIWrapper from './AccountsUIWrapper';

export default class NotLoggedNavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Sakana</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          {/*Nav para los elementos generales de la pagina*/}
          <Nav>
            <NavItem componentClass={Link}
              href="/" to="/"
              active={location.pathname === '/'}>Home
            </NavItem>
          </Nav>

          {/*Nav para el usuario (si esta en sesion activa o no)*/}
          {!this.props.currentUser ?
            <Navbar.Form pullRight>
              {/*Botones para registrarse o ingresar*/}
              <ButtonGroup>
                <Button bsStyle="info">Login</Button>
                <Button bsStyle="info">SignUp</Button>
              </ButtonGroup>
            </Navbar.Form>
            :
            <Nav pullRight>
              {/*Lista de los domicilios/pedidos del cliente*/}
              <NavItem componentClass={Link}
                href="/domicilios" to="/domicilios"
                active={location.pathname === '/domicilios'}>Domicilios
              </NavItem>

              {/*Lista con opciones del cliente*/}
              <NavDropdown title={this.props.currentUser.username} id="Dropdown-Opciones-Usuario">
                <MenuItem>Modificar Perfil</MenuItem>
                <MenuItem divider />
                <MenuItem>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          }

          <Nav pullRight>
            {/*Lista de los menus*/}
            <NavItem componentClass={Link}
              href="/menus" to="/menus"
              active={location.pathname === '/menus'}>Menus
            </NavItem>

            {/*Template de Blaze*/}
            <NavItem><AccountsUIWrapper /></NavItem>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}
NotLoggedNavBar.propTypes = {
  currentUser: PropTypes.object
}