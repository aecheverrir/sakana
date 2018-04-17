import React from 'react';
import { Grid, Row, Col, Table, PanelGroup, Nav, Navbar, NavItem, NavDropdown, MenuItem, ButtonGroup, Button } from "react-bootstrap";
import DomicilioItem from "./DomicilioItem";
import PropTypes from "prop-types";

const PEDIDOS_PER_PAGE = 5;

export default class DomicilioList extends React.Component {
  constructor() {
    super();
    this.state = {
      sortingName: "Fecha (Mas reciente)",
      filterName: "Todos los Pedidos",
      page: 1
    }
    this.handleSortingChange = this.handleSortingChange.bind(this);
    this.handleListVisualization = this.handleListVisualization.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  }

  handleSortingChange(e){
    console.log("Ordenamiento Pedidos: " + e);
    let sortingElement = { creationDate: e };
    this.props.onSortPedidos(sortingElement);
    this.setState({
      sortingName: (e < 0) ? "Fecha (Mas reciente)" : "Fecha (Mas antiguo)"
    });
  }

  handleListVisualization(e){
    console.log("Visualizacion Pedidos: " + e);
    let filterElement = (e === -1) ? {} : { pedidoState: e};
    this.props.onFilterPedidosState(filterElement);
    
    let displayName = "";
    if (e === -1){
      displayName = "Todos los Pedidos";
    }
    else if (e === "Pedido recibido"){
      displayName = "Pedidos Recibidos";
    }
    else if (e === "Entregado") {
      displayName = "Pedidos Entregados";
    }
    else{
      displayName = e;
    }
    
    this.setState({
      filterName:  displayName
    })
  }

  handleSortingName(){
    return this.state.sortingName;
  }

  handleFilterName() {
    return this.state.filterName;
  }

  verifyPrevious(){
    return this.state.page === 1;
  }

  verifyNext() {
    let tamanio = Math.ceil(this.props.pedidos.length / PEDIDOS_PER_PAGE);
    return this.state.page === tamanio;
  }

  handleNextPage() {
    
    let cambio = this.state.page + 1;
    let tamanio = Math.ceil(this.props.pedidos.length / PEDIDOS_PER_PAGE);
    if(cambio <= tamanio){
      this.setState({
        page: cambio
      });
    }
  }

  handlePreviousPage(){
    
    let cambio = this.state.page -1;
    let tamanio = Math.ceil(this.props.pedidos.length / PEDIDOS_PER_PAGE);
    if (cambio > 0 && cambio < tamanio) {
      console.log("cambio en pagina: -1")
      this.props.onChangePedidosPage(cambio);
      this.setState({
        page: cambio
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          <Nav>
            <NavItem disabled>Ordenar por</NavItem>
            <NavDropdown eventKey={1} onSelect={this.handleSortingChange}
              title={this.handleSortingName()}
              id="basic-nav-dropdown">
              <MenuItem eventKey={-1}>Fecha (más reciente)</MenuItem>
              <MenuItem eventKey={1}>Fecha (más antiguo)</MenuItem>
            </NavDropdown>

            <NavItem disabled>Mostrar</NavItem>
            <NavDropdown eventKey={2} onSelect={this.handleListVisualization}
              title={this.handleFilterName()}
              id="basic-nav-dropdown">
              <MenuItem eventKey={"Pedido recibido"}>Pedidos Recibidos</MenuItem>
              <MenuItem eventKey={"Preparando Comida"}>Preparando Comida</MenuItem>
              <MenuItem eventKey={"En Camino"}>En Camino</MenuItem>
              <MenuItem eventKey={"Entregado"}>Pedidos Entregados</MenuItem>
              <MenuItem eventKey={-1}>Todos los Pedido</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Table className="pointer" responsive hover>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Dirección</th>
              <th>Fecha Pedido</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.pedidos.map((pedidoA, index) => {
                let skip = (this.state.page * PEDIDOS_PER_PAGE) - PEDIDOS_PER_PAGE -1;
                let limit = this.state.page * PEDIDOS_PER_PAGE - 1;

                if(index > skip &&index <= limit ){
                  return (
                    <DomicilioItem key={index}
                      pedido={pedidoA}
                      pedidoIndex={index}
                      setInfoDomicilioDetail={this.props.setInfoDomicilioDetail}
                    />
                  );
                }
                else{
                  return null;
                }
              })
            }
          </tbody>
        </Table>
        <ButtonGroup bsSize="large">
          <Button onClick={this.handlePreviousPage} 
            disabled={this.verifyPrevious()}
            className="paginadorItem">Anterior</Button>
          <Button onClick={this.handleNextPage} 
            disabled={this.verifyNext()}
            className="paginadorItem">Siguiente</Button>
        </ButtonGroup>
      </div>
    )
  }
}

DomicilioList.propTypes = {
  pedidos: PropTypes.array,
  setInfoDomicilioDetail: PropTypes.func,
  onSortPedidos: PropTypes.func,
  onChangePedidosPage: PropTypes.func
}
