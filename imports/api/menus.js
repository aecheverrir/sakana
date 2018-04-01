import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import SimpleSchema from "simpl-schema";

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

if(Meteor.isServer){

}


Meteor.methods({
  "menus.insert"(){
    check(categoria, String);
    check(nombre, String);
    check(descripcion, String);

    //TODO: verificar autorizacion

    Menus.insert({
      visibility: true
    });
  },
  "menus.remove"(menuId) {
    check(menuId, String);

    Menus.remove(menuId);
  },
  "menus.setVisibility"(menuId, setVisibility) {
    check(menuId, String);
    check(setVisibility, Boolean);

    Menus.update(menuId, { $set: { visibility: setVisibility}});
  },
});
*/