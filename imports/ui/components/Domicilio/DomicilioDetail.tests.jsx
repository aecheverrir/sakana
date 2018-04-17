import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import DomicilioDetail from "./DomicilioDetail.jsx";

describe("DomicilioDetail", function () {
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
  const currentUser = {
    _id: "ASJSHAS"
  }
  const index = 1;

  let removePedido = () => {
  };
  let clearPedido = () => {
  };

  let onSetStatePedido = () => {
  };

  it("Should render", function () {
    const domicilioDetail = shallow(
      <DomicilioDetail
        pedido={pedido}
        removePedido={removePedido}
        clearPedido={clearPedido}
        currentUser={currentUser}
        onSetStatePedido={onSetStatePedido}
      />);

    assert(domicilioDetail.find("row"));
    assert(domicilioDetail.find("dropdown"));

    assert.equal(domicilioDetail.find("thead").length, 2);
    assert.equal(domicilioDetail.find("tr").length, 5);
    assert.equal(domicilioDetail.find("th").length, 4);
    assert.equal(domicilioDetail.find("tbody").length, 2);
  })
});