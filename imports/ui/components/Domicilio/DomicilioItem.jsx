import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

export default class DomicilioItem extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                <Grid fluid>
                    <Row>
                        <Col sm={9}>
                            <div className="data">
                                <h3> {this.props.date} </h3>
                                <h3> {this.props.price} </h3>
                                <h3> {this.props.address} </h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="state">
                                <h2 style={this.props.style} > {this.props.state} </h2>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <hr></hr>
            </div>
        )
    }
}

