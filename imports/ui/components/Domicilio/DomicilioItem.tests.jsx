import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import DomicilioItem from "./DomicilioItem.jsx";

describe("DomicilioItem", function () {
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
  const index = 1;

  let setInfoDomicilioDetail = () =>{

  };

  it("Should render", function () {
    const domicilioItem = shallow(
      <DomicilioItem key={index}
        pedido={pedido}
        pedidoIndex={index}
        setInfoDomicilioDetail={setInfoDomicilioDetail}
      />);

    assert.equal(domicilioItem.find("tr").length, 1);
    assert.equal(domicilioItem.find("td").length, 4);
  })
});