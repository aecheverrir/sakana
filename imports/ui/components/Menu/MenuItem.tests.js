import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import MenuItem from "./MenuItem";

describe("MenuItem", function () {

    const itemEjemplo = {
        name: "Ojo e' tigre",
        price: 28000,
        description: "Salmon, palmito, atun tempura, aguacate, masago.",
        image: "https://i.imgur.com/Xp8CxRM.jpg",
        visibility: true
    };

    let menuId = 11;

    let onAddToPedidoActual = ( ) => {
    }
    let updateMenu = ( ) => {
    }

    it("Should render", function () {
        const menuItem = shallow(
            <MenuItem
                item= {itemEjemplo}
                categoryId={menuId}
                onAddToPedidoActual={onAddToPedidoActual}
                updateMenu={updateMenu}
            />
        );
        assert(menuItem.find("Grid"));
        assert(menuItem.find("Row"));
        assert(menuItem.find("Col"));
        assert(menuItem.find("form"));

        assert.equal(menuItem.find("Button").length, 0);
        assert.equal(menuItem.find("FormControl").length, 0);
        assert.equal(menuItem.find("ControlLabel").length, 0);

        assert(menuItem.find("h3"));
        assert(menuItem.find("p"));
        assert(menuItem.find("h4"));
        assert(menuItem.find("img"));

        
    })
});