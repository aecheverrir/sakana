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
import ChangeProfileDataForm from "../components/Registration/ChangeProfileDataForm";""
import DomicilioCheckout from "./Domicilio/DomicilioCheckout";

import Footer from "./Footer";
import { WSAEADDRINUSE } from 'constants';
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
              <Route exact path="/" name="Home" render={(props) => <HomePage {...props} />} />
              <Route path="/menus" name="Menu" 
                render={
                  (props) => <MenuPage {...props} updateMenu={this.props.updateMenu} onAddToPedidoActual={this.props.onAddToPedidoActual} currentUser={this.props.currentUser} menus={this.props.menus}/>
              } />
              <Route path="/domicilios" name="Domicilio"
                render={
                  (props) => <DomiciliosPage {...props} currentUser={this.props.currentUser} pedidos={this.props.pedidos} removePedido={this.props.removePedido} onSetStatePedido={this.props.onSetStatePedido} onSortPedidos={this.props.onSortPedidos} onFilterPedidosState={this.props.onFilterPedidosState} onChangePedidosPage={this.props.onChangePedidosPage} />
              } />
              <Route path="/checkoutDomicilio" name="checkoutDomicilio" 
                render={
                  (props) => <DomicilioCheckout {...props} pedidoActual={this.props.pedidoActual} onCreatePedido={this.props.onCreatePedido} pedidoActual={this.props.pedidoActual} />
              } />

              <Route path="/login" name="Login" render={(props) => <RegistrationForm {...props} isLogin={true} />} />
              <Route path="/signup" name="SignUp" render={(props) => <RegistrationForm {...props} isLogin={false} />} />
              <Route path="/adminSignUp" name="AdminSignUp" render={(props) => <RegistrationAdmin {...props} />} />
              <Route path="/changePassword" name="ChangePassword" render={(props) => <ChangeProfileDataForm {...props} />} />
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
  currentUser: PropTypes.object,
  onSortPedidos : PropTypes.func,
  onFilterPedidosState: PropTypes.func
}