import React, { Component } from 'react';
import { Image, Navbar, Nav, NavItem } from "react-bootstrap";

export default class Banner extends Component {

  render() {
    return(
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand"><Image className="logoimg" src="https://i.imgur.com/wk4YvmP.jpg" alt="Sakana Logo" responsive  /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Home
          </NavItem>
            <NavItem eventKey={2} href="#">
              Menus
          </NavItem>
            <NavItem eventKey={3} href="#">
              Domicilios
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}