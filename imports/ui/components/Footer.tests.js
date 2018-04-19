import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer", function () {

    it("Should render", function () {
        const footer = shallow(
            <Footer />
        );
        assert(footer.find("Grid"));
        assert(footer.find("Row"));
        assert(footer.find("Col"));
        assert(footer.find("img"));
        assert(footer.find("p"));

        assert.equal(footer.find("Col").length, 3);
        assert.equal(footer.find("section").length, 3);



    })
});