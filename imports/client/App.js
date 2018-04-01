import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from './Banner';
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
            <div>
                <Banner />
                <Hero />
                <Menu />
                <Footer />
            </div>
        )
    }
}