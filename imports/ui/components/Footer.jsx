import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

export default class Hero extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <footer>
                <Grid fluid>
                    <div className="wrapper">
                        <Row>
                            <Col sm={3}>
                                <section className="adress">
                                    <p>Colombia, Ibague</p> 
                                    <p className="location">
                                        Calle 62 #6a-50 <br/> Rincon de Prados del Norte 
                                    </p>
                                    <p className="phone">322-274-8494</p>
                                </section>
                            </Col>

                            <Col sm={6}>
                                <section className="adress">
                                    <p>Horario</p>
                                    <p className="location">Lunes-Domingo<br/>
                                    10:00 - 22:00 </p>
                                </section>
                            </Col>

                            <Col sm={3}>
                                <section className="copyrights">
                                    <img src="https://i.imgur.com/kdQ7hJb.jpg" className="footer_logo" alt="footer logo" title=""/>
                                    <p>© All Rights Reserved 2018.</p>
                                </section>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </footer>
        )
    }
}


