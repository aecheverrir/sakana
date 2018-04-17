import React from 'react';
import DomicilioDetail from "./DomicilioDetail";
import DomicilioList from "./DomicilioList";
import PropTypes from "prop-types";

import { Grid, Row, Col } from "react-bootstrap";

export default class Domicilio extends React.Component{
    constructor(){
        super();
        this.state = {
            infoDomicilio: {}
        }

        this.setInfoDomicilioDetail = this.setInfoDomicilioDetail.bind(this);
        this.clearPedido = this.clearPedido.bind(this);
    }

    setInfoDomicilioDetail(index){
        console.log("Index del Pedido: " + index);
        let domicilioSelected = this.props.pedidos[index];   
        this.setState({
            infoDomicilio: domicilioSelected
        })
    }

    clearPedido(){
        this.setState({
            infoDomicilio: {}
        });
    }

    render(){

        var styleProcessing = { 
            "color": "#5bc0de"
        }; 
        var styleFood = { 
            "color": "#ff5c5c"
        };
        var styleSending = { 
            "color": "#ffa500"
        };
        var styleFinished = { 
            "color": "#25d366"
        };
        var styleCanceled = { 
            "color": "#000000"
        };

        var total = 0;

        return(
            <Grid fluid>
                <Row>
                    <Col md={7}>
                        <DomicilioList 
                            pedidos= {this.props.pedidos}
                            setInfoDomicilioDetail={this.setInfoDomicilioDetail}
                            onSortPedidos={this.props.onSortPedidos}
                            onFilterPedidosState={this.props.onFilterPedidosState}
                            onChangePedidosPage={this.props.onChangePedidosPage}
                        />
                    </Col>
                    <Col md={5}>
                        <DomicilioDetail
                            pedido={this.state.infoDomicilio} 
                            removePedido={this.props.removePedido}
                            clearPedido={this.clearPedido}
                            currentUser={this.props.currentUser}
                            onSetStatePedido={this.props.onSetStatePedido}
                        />
                    </Col>
                </Row>
            </Grid>
            
        )
    }
}
Domicilio.propTypes = {
    pedidos: PropTypes.array,
    removePedido: PropTypes.func,
    onSetStatePedido: PropTypes.func,
    currentUser: PropTypes.object
}
