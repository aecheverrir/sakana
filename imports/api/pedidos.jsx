import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Match } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';

export const Pedidos = new Mongo.Collection("pedidos");

let posibleStates = ["Pedido recibido", "Preparando Comida", "En Camino", "Entregado"];
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
  Meteor.publish("pedidos", function pedidosPublication( currentPage, numberElements ) {
    let limitable = (currentPage * numberElements);

    if (Roles.userIsInRole(this.userId, "admin")){
      console.log("Administrator userId: " + this.userId)
      return Pedidos.find({});
    }
    else{
      console.log("Common userId: " + this.userId) 
      return Pedidos.find({owner:this.userId});   
    }
    
  });

}

Meteor.methods({
  "pedidos.insert"(pedidoCollect) {
    check(pedidoCollect, {
      owner: Match.Any,
      address: String,
      creationDate: Date,
      comments: Match.Any,
      price: Number,
      items: Match.Any
    });

    if (!this.userId || (pedidoCollect.owner !== this.userId)) {
      throw new Meteor.Error('not-authorized');
    }
    
    pedidoCollect.pedidoState = posibleStates[0];

    Pedidos.insert(pedidoCollect);
  },

  "pedidos.remove"(_id, pedidoState) {
    check(_id, Match.Any);
    check(pedidoState, String);
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    if (pedidoState !== posibleStates[0]){
      throw new Meteor.Error('El pedido ya esta en proceso');
    }

    Pedidos.remove(_id);
  },

  "pedidos.setState"(_id, owner, setPedidoState) {
    check(_id, Match.Any);
    check(owner, Match.Any);
    check(setPedidoState, String);

    if (!this.userId || !Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error('not-authorized');
    }
    else if (posibleStates.indexOf(setPedidoState) < 0){
      throw new Meteor.Error('Invalid state modification request');
    }

    Pedidos.update({ _id: _id }, { $set: { pedidoState: setPedidoState } });
  },
});