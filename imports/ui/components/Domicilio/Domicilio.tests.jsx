import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import Domicilio from "./Domicilio.jsx";

describe("Domicilio", function () {
  const pedido = {
    owner: "CCCCCCC",
    address: "calle prueba 789",
    creationDate: new Date(),
    comments: "Comentario ALGO",
    price: 100,
    items: [
      {
        name: "Item Pruba Uno",
        description: "Descipcion item prueba Uno",
        price: 50
      },
      {
        name: "Item Pruba Dos",
        description: "Descipcion item prueba Dos",
        price: 50
      }
    ]
  };

  const pedidos = [
    {
      owner: "AAAAAAAA",
      address: "calle prueba 123",
      creationDate: new Date(),
      comments: "Comentario de prueba",
      price: 100,
      items: [
        {
          name: "Item Pruba Uno",
          description: "Descipcion item prueba Uno",
          price: 50
        },
        {
          name: "Item Pruba Dos",
          description: "Descipcion item prueba Dos",
          price: 50
        }
      ]
    },
    {
      owner: "BBBBBB",
      address: "calle prueba 456",
      creationDate: new Date(),
      comments: "Comentario",
      price: 50,
      items: [
        {
          name: "Item Pruba Uno",
          description: "Descipcion item prueba Uno",
          price: 25
        },
        {
          name: "Item Pruba Dos",
          description: "Descipcion item prueba Dos",
          price: 25
        }
      ]
    }
  ];

  const currentUser = {
    _id: "ASJSHAS"
  }


  it("Should render", function () {
    const domicilio = shallow(
      <Domicilio
        pedidos={pedidos}
        pedidoActual={pedido}
        currentUser={currentUser}
      />);

    assert(domicilio.find("container"));
    assert(domicilio.find("row"));
    assert(domicilio.find("col"));
  })
});