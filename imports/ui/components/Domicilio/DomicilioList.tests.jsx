import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { shallow } from "enzyme";
import DomicilioList from "./DomicilioList.jsx";

describe("DomicilioList", function () {
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
  const index = 1;

  let setInfoDomicilioDetail = () => {
  };
  let onSortPedidos = () => {
  };
  let onFilterPedidosState = () => {
  };
  let onChangePedidosPage = () => {
  };

  it("Should render", function () {
    const domicilioList = shallow(
      <DomicilioList
        pedidos={pedidos}
        setInfoDomicilioDetail={setInfoDomicilioDetail}
        onSortPedidos={onSortPedidos}
        onFilterPedidosState={onFilterPedidosState}
        onChangePedidosPage={onChangePedidosPage}
      />);

    assert(domicilioList.find("navbar"));
    assert(domicilioList.find("dropdown"));

    assert.equal(domicilioList.find("thead").length, 1);
    assert.equal(domicilioList.find("tr").length, 1);
    assert.equal(domicilioList.find("th").length, 4);
    assert.equal(domicilioList.find("tbody").length, 1);
  })
});