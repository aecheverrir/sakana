import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Image, Navbar, Nav, NavItem } from "react-bootstrap";

export default class Banner extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand"><Image className="logoimg" src="https://i.imgur.com/wk4YvmP.jpg" alt="Sakana Logo" responsive /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <NavLink eventKey={1} activeClassName="active" to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={2} activeClassName="active" to="/menus">Menus</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={3} activeClassName="active" to="/domicilios">Domicilios</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}