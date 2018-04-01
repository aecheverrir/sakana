import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Image, Nav, Navbar, NavItem } from "react-bootstrap";

import AccountsUIWrapper from '../components/AccountsUIWrapper';

export default class NotLoggedNavBar extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Sakana</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/menus">
              <NavItem>Menus</NavItem>
            </LinkContainer>
            <LinkContainer to="/domicilios">
              <NavItem>Domicilios</NavItem>
            </LinkContainer>
            <NavItem><AccountsUIWrapper /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}