import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class ResultItem extends React.Component {
  render () {
    return (
    	<div>
            <Container>
                <Row>
                    <Col sm="6">
                        <Container>
                            <img src={this.props.data.imagen} height="250" width="400" alt="asf"/>
                        </Container>    
                    </Col> 
                    <Col sm="6">
                        <Container>
                            <h3>{this.props.data.marca} {this.props.data.modelo} {this.props.data.linea}</h3>
                            <h5>Precio: ${this.props.data.precio}</h5>
                            <h5>Pais de origen: {this.props.data.pais}</h5>
                            <h5>Motor: {this.props.data.motor}L</h5>
                            <h5>HP: {this.props.data.hp}</h5>
                            <h5>Torque: {this.props.data.torquelbft} Pound Feet</h5>

                        </Container>
                    </Col>
                </Row>
            </Container>
            <br/>
            <hr/>
    	</div>

    );
  }
}