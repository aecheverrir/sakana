import React from 'react';
import MenuItem from './Menu/MenuItem'
import MenuTitle from './Menu/MenuTitle'
import MenuCategory from './Menu/MenuCategory'

export default class Menu extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <section id="menu" className="menu">
		        <div className="wrapper">
                    
                    <MenuTitle />

                    <MenuCategory cat="Entradas"/>
                    <ul>
                        <MenuItem />
                        <MenuItem />
                    </ul>

                    <MenuCategory cat="Arroces"/>
                    <ul>
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </ul>

                    <MenuCategory cat="Yakisoba"/>
                    <ul>
                        <MenuItem />
                    </ul>

                    <MenuCategory cat="Ramen"/>
                    <ul>
                        <MenuItem />
                        <MenuItem />
                    </ul>

                    <MenuCategory cat="Sushi"/>
                    <ul>
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </ul>

                    <MenuCategory cat="Sushi Tempura"/>
                    <ul>
                        <MenuItem />
                        <MenuItem />
                        <MenuItem />
                    </ul>

                    <MenuCategory cat="Bebidas"/>
                    <ul>
                        <MenuItem />
                        <MenuItem />
                    </ul>

                </div>
            </section>
        )
    }
}