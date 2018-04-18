import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import MenuCategoryList from "./MenuCategoryList";

describe("MenuCategoryList", function () {

    const categoryMenu = "Testing Category";

    it("Should render", function () {
        const menuCategory = shallow(
            <MenuCategoryList 
                updateMenu={this.props.updateMenu}
                onAddToPedidoActual={this.props.onAddToPedidoActual} 
                menuItems={p.menuItems}
                categoryId={p._id}
            />
        );
        assert.equal(menuCategory.find("ul").length, 1);
    })
});