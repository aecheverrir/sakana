import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import Menu from './Menu';
import Footer from './Footer' 

export default class App extends React.Component{
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