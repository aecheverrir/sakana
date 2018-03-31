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
                        <a href=""><img className="logoimg"  src="https://i.imgur.com/wk4YvmP.jpg" alt="Sakana Logo" title=""/></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Reservas</a></li>
                            <li><a href="">Domicilios</a></li>
                        </ul>
                    </nav>
		        </div>
    	    </header>
        )
    }
}