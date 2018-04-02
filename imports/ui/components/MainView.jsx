import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import DomiciliosPage from "../pages/DomiciliosPage";
import PageNotFound from "../pages/PageNotFound";
import RegistrationForm from "../components/Registration/RegistrationForm";
import RegistrationAdmin from "../components/Registration/RegistrationAdmin";
import ChangeProfileDataForm from "../components/Registration/ChangeProfileDataForm";

import Footer from "./Footer";
/*
  Componente que realiza el manejo de Paginas del proyecto
*/
export default class MainView extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={12}>
            <Switch>
              <Route exact path="/" render={(props) => <HomePage {...props} />} />
              <Route path="/menus" 
                render={
                  (props) => <MenuPage {...props} updateMenu={this.props.updateMenu} onAddToPedidoActual={this.props.onAddToPedidoActual} currentUser={this.props.currentUser} menus={this.props.menus}/>
              } />
              <Route path="/domicilios" 
                render={
                  (props) => <DomiciliosPage {...props} pedidos={this.props.pedidos} onCreatePedido={this.props.onCreatePedido} pedidoActual={this.props.pedidoActual} onSetStatePedido={this.props.onSetStatePedido} />
              } />
              <Route path="/login" render={(props) => <RegistrationForm {...props} isLogin={true} />} />
              <Route path="/signup" render={(props) => <RegistrationForm {...props} isLogin={false} />} />
              <Route path="/adminSignUp" render={(props) => <RegistrationAdmin {...props} />} />
              <Route path="/changePassword" render={(props) => <ChangeProfileDataForm {...props} />} />
            </Switch>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={12}>
            <Footer />
          </Col>
        </Row>
      </Grid>
    )
  }
}

MainView.propTypes = {
  menus: PropTypes.array.isRequired,
  currentUser: PropTypes.object
}