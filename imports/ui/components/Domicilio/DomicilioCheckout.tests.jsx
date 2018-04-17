import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import DomicilioCheckout from "./DomicilioCheckout.jsx";

describe("DomicilioCheckout", function () {
  const pedido = {
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
  };

  let onCreatePedido = () => {
  };


  it("Should render", function () {
    const domicilioCheckout = shallow(
      <DomicilioCheckout
        onCreatePedido={onCreatePedido}
        pedidoActual={pedido} />);

    assert(domicilioCheckout.find("panel"));
    assert(domicilioCheckout.find("container"));
    assert(domicilioCheckout.find("row"));
    assert(domicilioCheckout.find("col"));

    assert.equal(domicilioCheckout.find("thead").length, 2);
    assert.equal(domicilioCheckout.find("tr").length, 4);
    assert.equal(domicilioCheckout.find("th").length, 4);
    assert.equal(domicilioCheckout.find("tbody").length, 1);
  })
});