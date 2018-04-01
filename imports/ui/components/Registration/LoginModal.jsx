import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Image, Nav, Navbar, NavItem } from "react-bootstrap";

import AccountsUIWrapper from './AccountsUIWrapper';

export default class LoginModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

}