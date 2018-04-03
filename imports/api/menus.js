import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Match } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';

export const Menus = new Mongo.Collection("menus");

/*
const MenusSchema = new SimpleSchema({
  category: {
    type: String
  },
  menuItems:{
    type: Array,
    minCount: 1
  },
  "menuItems.$": Object,
  "menuItems.$.name": String,
  "menuItems.$.description": String,
  "menuItem.$.image": String,
  "menuItems.$.price": SimpleSchema.Integer,
  "menuItems.$visibility": Boolean
});


Menus.attachSchema(MenusSchema);
*/

if (Meteor.isServer) {
  Meteor.publish("menus", function menuPublication( ) {
    return Menus.find( );
  });
}

Meteor.methods({
  "menus.insert"(MenuCollect) {
    check(MenuCollect, {
      category: String,
      menuItems: Match.Any
    });

    console.log("ID por alla: " + this.userId)

    if (!this.userId || !Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error('not-authorized');
    }
    else if (MenuCollect.menuItems.length == 0) {
      throw new Meteor.Error('Debe tener items!');
    }

    let items = [];
    MenuCollect.menuItems.forEach(item => {
      item.visibility = true;
      items.push(item);
    });
    MenuCollect.menuItems = items;

    Menus.insert(MenuCollect);
  },

  "menus.remove"(_id) {
    console.log(_id);
    check(_id, Match.Any);
    if (!this.userId || !Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error('not-authorized: Only Administrators');
    }
    Menus.remove(_id);
    console.log("removed!")
  },
  
  "menus.setVisibility"(_id, itemName, setVisibility) {
    check(_id, Match.Any);
    check(itemName, String);
    check(setVisibility, Boolean);
    
    if (!this.userId || !Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error('not-authorized: Only Administrators');
    }

    Menus.update({
      $and: [
        { _id: _id },
        { "menuItems.name": itemName }
      ]
      }, 
      { 
        $set: { "menuItems.$.visibility": setVisibility }
      }
    );
    console.log("changed!")
  },
});
