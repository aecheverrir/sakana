import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import SimpleSchema from "simpl-schema";

export const Pedidos = new Mongo.Collection("pedidos");

/*
const PedidosSchema = new SimpleSchema({
  owner: {
    type: String
  },
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
  "items.$.price": SimpleSchema.Integer
});

Pedidos.attachSchema(PedidosSchema);

if (Meteor.isServer) {

}


Meteor.methods({
  "pedidos.insert"(categoria, nombre, descripcion) {
    check(categoria, String);
    check(nombre, String);
    check(descripcion, String);

    //TODO: verificar autorizacion

    Pedidos.insert({
      visibility: true
    });
  },
  "pedidos.remove"(menuId) {
    check(menuId, String);

    Pedidos.remove(menuId);
  },
  "pedidos.setState"(idPedido, setPedidoState) {
    check(menuId, String);
    check(setPedidoState, String);

    Pedidos.update(idPedido, { $set: { pedidoState: setPedidoState } });
  },
});

*/