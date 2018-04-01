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
            <header id="home">
                <div className="wrapper">
                    <div className="logo">
                        <a href=""><img className="logoimg"  src="https://i.imgur.com/kdQ7hJb.jpg" alt="Sakana Logo" title=""/></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="">Reservas</a></li>
                            <li><a href="">Domicilios</a></li>
                        </ul>
                    </nav>
		        </div>
    	    </header>
        )
    }
}