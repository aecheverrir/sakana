import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import MenuCategory from "./MenuCategory";

describe("MenuCategory", function () {

    const categoryMenu = "Testing Category";

    const index = 1;

    it("Should render", function () {
        const menuCategory = shallow(
            <MenuCategory key={index}
                category={categoryMenu}
            />
        );
        assert.equal(menuCategory.find("h3").length, 1);
        assert.equal(menuCategory.find("div").length, 1);
        assert.equal(menuCategory.find("section").length, 1);
    })
});