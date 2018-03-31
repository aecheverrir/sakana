import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Banner extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <header >
                <div className="wrapper">
                    <div className="logo">
                        <a href=""><img className="logoimg"  src="https://i.imgur.com/wk4YvmP.jpg" alt="Sakana Logo" title=""/></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                        </ul>
                    </nav>
		        </div>
    	    </header>
        )
    }
}