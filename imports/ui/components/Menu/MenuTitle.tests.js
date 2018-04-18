import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import MenuTitle from "./MenuTitle";

describe("MenuTitle", function () {

    it("Should render", function () {
        const menuTitle = shallow(
            <MenuTitle />
        );
        assert.equal(menuTitle.find("h2").length, 1);
    })
});