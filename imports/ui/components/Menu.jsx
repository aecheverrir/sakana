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
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                    </ul>

                    <MenuCategory cat="Arroces"/>
                    <ul>
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                    </ul>

                    <MenuCategory cat="Yakisoba"/>
                    <ul>
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                    </ul>

                    <MenuCategory cat="Ramen"/>
                    <ul>
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                    </ul>

                    <MenuCategory cat="Sushi"/>
                    <ul>
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                    </ul>

                    <MenuCategory cat="Sushi Tempura"/>
                    <ul>
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                    </ul>

                    <MenuCategory cat="Bebidas"/>
                    <ul>
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                        <MenuItem name="California Roll" description="Cheese, tomato, mushrooms, onions." price="25.000" img="https://i.imgur.com/CEM270s.jpg" />
                    </ul>

                </div>
            </section>
        )
    }
}