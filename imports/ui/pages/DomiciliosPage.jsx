import React from 'react';
import Domicilio from '../components/Domicilio/Domicilio';

export default class DomiciliosPage extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                <Domicilio 
                    pedidos={this.props.pedidos} 
                    onCreatePedido={this.props.onCreatePedido}
                    pedidoActual={this.props.pedidoActual}
                    onSetStatePedido={this.props.onSetStatePedido}
                    removePedido={this.props.removePedido}
                    onSortPedidos={this.props.onSortPedidos}
                    onFilterPedidosState={this.props.onFilterPedidosState}
                    currentUser={this.props.currentUser}
                    onChangePedidosPage={this.props.onChangePedidosPage}
                />
            </div>
        )
    }
}