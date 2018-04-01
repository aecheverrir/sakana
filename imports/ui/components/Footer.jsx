import React from 'react';

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
                <div className="wrapper">
                    <section className="adress">
                        <p>Colombia, Ibague</p> 
                        <p className="location">Calle 62 #6a-50 <br/>Rincon de Prados del Norte 
                        </p>
                        <p className="phone">322-274-8494</p>
                    </section>
                    <section className="adress">
                        <p>Horario</p>
                        <p className="location">Lunes-Domingo<br/>
                        10:00 - 22:00 </p>
                    </section>

                    <section className="footer_nav">
                        <nav>
                            <ul>
                                <li></li>
                            </ul>
                        </nav>
                    </section>

                    <section className="copyrights">
                        <img src="https://i.imgur.com/kdQ7hJb.jpg" className="footer_logo" alt="footer logo" title=""/>
                        <p>© All Rights Reserved 2018.</p>
                    </section>
                </div>
            </footer>
        )
    }
}


