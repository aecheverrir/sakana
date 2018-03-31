import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Banner from './Header';
import Hero from './Hero';
import Menu from './Menu';
import Footer from './Footer' 

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div className="AppContainer">
                <Banner />
                <Hero />
                <Footer />
                
            </div>    
        )
    }
}