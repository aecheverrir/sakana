import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import Hero from "./Hero";

describe("Hero", function () {

    it("Should render", function () {
        const hero = shallow(
            <Hero />
        );
        assert(hero.find("img"));
        assert(hero.find("section"));

    })
});