import React from 'react';

export default class Banner extends React.Component{
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
                        <a href=""><img src="" alt="Sakana Logo" title=""/></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">Our Story</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Reservations</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Reviews</a></li>
                        </ul>
                    </nav>
		        </div>
    	    </header>
        )
    }
}