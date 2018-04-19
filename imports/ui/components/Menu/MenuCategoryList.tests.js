import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import MenuCategoryList from "./MenuCategoryList";

describe("MenuCategoryList", function () {

    const categoryMenuList = 
        [	 
            {
                "name":"Ika furai",
                "price":9000,
                "description":"calamar apanado con salsa de maracuyá.",
                "image":"https://i.imgur.com/bDduPf6.jpg",
                "visibility": true
        
            },
            {
                "name":"Ebi kokonattsu",
                "price":12000,
                "description":"camarones encocados.",
                "image":"https://i.imgur.com/bDduPf6.jpg",
                "visibility": true
            },
            {
                "name":"Spring rolls",
                "price":8000,
                "description":"rollos primavera rellenos de vegetales *3.",
                "image":"https://i.imgur.com/bDduPf6.jpg",
                "visibility": true
            }
        ];

    let menuId = 11;

    let onAddToPedidoActual = ( ) => {
    }
    let updateMenu = ( ) => {
    }

    it("Should render", function () {
        const menuCategory = shallow(
            <MenuCategoryList 
                onAddToPedidoActual={onAddToPedidoActual}
                updateMenu={updateMenu} 
                menuItems={categoryMenuList}
                categoryId={menuId}
            />
        );

        assert.equal(menuCategory.find("ul").length, 1);
    })
});