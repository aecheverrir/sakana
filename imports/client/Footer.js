import React from 'react';

export default class Footer extends React.Component{
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
                        <p>New York Restaurant</p> 
                        <p className="location">3926 Anmoore Road<br/>
                        New York, NY 10014</p>
                        <p className="phone">718-749-1714</p>
                    </section>
                    <section className="adress">
                        <p>France Restaurant</p>
                        <p className="location">68, rue  de la Couronne<br/>
                        75002 PARIS </p>
                        <p className="phone">02.94.23.69.56</p>
                    </section>

                    <section className="footer_nav">
                        <nav>
                            <ul>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </nav>
                    </section>

                    <section className="copyrights">
                        <img src="" className="footer_logo" alt="" title=""/>
                        <p>© All Rights Reserved 2014.</p>
                        <p>Find  More at <a href="" target="_blank">Pixelhint.com</a></p>	
                    </section>
                </div>
            </footer>
        )
    }
}


