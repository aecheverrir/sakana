import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import MenuItem from "./MenuItem";

describe("MenuItem", function () {

    const menuItem = {
        name: "Ojo e' tigre",
        price: 28000,
        description: "Salmon, palmito, atun tempura, aguacate, masago.",
        image: "https://i.imgur.com/Xp8CxRM.jpg",
        visibility: true
    };

    it("Should render", function () {
        const menuItem = shallow(
            <MenuItem
                item= {menuItem}
                categoryId={this.props.categoryId}
                onAddToPedidoActual={this.props.onAddToPedidoActual}
                updateMenu={this.props.updateMenu}
            />
        );
        assert.equal(menuItem.find("h3").length, 1);
    })
});