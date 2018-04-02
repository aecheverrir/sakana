import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Match } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import SimpleSchema from "simpl-schema";

export const Pedidos = new Mongo.Collection("pedidos");

/*
const PedidosSchema = new SimpleSchema({
  owner: {
    type: SimpleSchema.Integer
  },
  address:{
    type: String
  }
  pedidoState:{
    type: String
  },
  creationDate: {
    type: Date
  },
  comments: {
    type: String
  },
  price:{
    type: SimpleSchema.Integer
  },
  items: {
    type: Array,
    minCount: 1
  },
  "items.$": Object,
  "items.$.name": String,
  "items.$.description": String,
  "items.$.price": SimpleSchema.Integer,
});
Pedidos.attachSchema(PedidosSchema);
*/

if (Meteor.isServer) {
  Meteor.publish("pedidos", function pedidosPublication(  ) {
    
    if (Roles.userIsInRole(this.userId, "admin")){
      console.log("Administrator userId: " + this.userId)
      return Pedidos.find();
    }
    else{
      console.log("Common userId: " + this.userId)   
      return Pedidos.find({owner:this.userId});   
    }
    
  })
}

Meteor.methods({
  "pedidos.insert"(pedidoCollect) {
    check(pedidoCollect, {
      owner: Match.Any,
      address: String,
      pedidoState: Match.Optional,
      creationDate: Date,
      comments: Match.Optional,
      price: Match.Integer,
      items: Match.Any
    });

    if (!this.userId || (pedidoCollect.owner !== this.userId)) {
      throw new Meteor.Error('not-authorized');
    }
    
    pedidoCollect.pedidoState = "recibido";

    Pedidos.insert(pedidoCollect);
  },
  "pedidos.remove"(_id, pedidoState) {
    check(_id, Match.Any);
    check(pedidoState, String);
    if (!this.userId || (pedidoCollect.owner !== this.userId)) {
      throw new Meteor.Error('not-authorized');
    }
    if(pedidoState !== "recibido"){
      throw new Meteor.Error('El pedido ya esta en proceso');
    }

    Pedidos.remove(_id);
  },
  "pedidos.setState"(_id, setPedidoState) {
    check(menuId, Match.Any);
    check(setPedidoState, String);

    Pedidos.update({ _id: _id }, { $set: { pedidoState: setPedidoState } });
  },
});