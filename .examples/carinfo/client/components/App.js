import React from 'react';

import Banner from './Banner';
import DataBar from './DataBar';
import Results from './Results';
import SideBar from './SideBar';

import { Container, Row, Col } from 'reactstrap';
import { getCarros } from "../actions/actions";
import { getCarrosFilter } from "../actions/actions";


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "testName",
            carros: [],
            search: ""
        };
        this.getCarros = getCarros.bind(this);
        this.searchInputCallback = this.searchInputCallback.bind(this);
        this.getCarrosFilter = getCarrosFilter.bind(this);
    }

    componentDidMount() {
      this.getCarros(this);
    }

    searchInputCallback(dataFromBanner){
      this.setState({search: dataFromBanner.target.value});
      if(dataFromBanner.target.value == 0){
        this.getCarros(this);
      }
      else{
      this.getCarrosFilter(this, dataFromBanner.target.value);
      }

    }

    render () {

        /*style*/
        var styles = { 
            "margin": "0",
            "padding": "0",
            "border": "0",
            "outline": "0",
            "font-family": "sans-serif",
            "font-weight": "normal",
            "font-size": "15px",
            "vertical-align": "baseline",
            "background": "transparent",
            "box-sizing": "border-box",
            "line-height": "30px",
            "color": "#838C95"
        };

        return (
          <div style={styles}>
            <Container>
              <Banner callbackApp={this.searchInputCallback}/>
              <Row>
                <Col sm="5" lg="3">
                  <Container>
                    
                  </Container>
                </Col> 
                <Col sm="7" lg="9">
                    <Container>
                      <Results carros={this.state.carros} />
                    </Container>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}
