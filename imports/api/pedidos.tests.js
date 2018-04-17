import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Pedidos } from './pedidos.jsx';
import { assert } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { resetDatabase } from "meteor/xolvio:cleaner";
import { fail } from 'assert';

if (Meteor.isServer) {
  describe("pedidos", function ( ) {

    let userIdentification;
    const newUser = {
      email: "email@fake.com",
      password: "PasswordOne",
      username: "UsernameOne",
      profile: {
        name: "Name One",
        phoneNumber: "phoneNumber"
      }
    };
    let pedido = {
      owner: "",
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

    beforeEach(function ( ) {
      resetDatabase();
      //Crea Usuario Administrador en la Base de Datos
      userIdentification = Accounts.createUser(newUser);
      Roles.addUsersToRoles(userIdentification, "admin");

      sinon.stub(Meteor, "userId");
      Meteor.userId.returns(userIdentification);
      pedido.owner = userIdentification;
    });

    afterEach(function ( ) {
      resetDatabase();
      sinon.restore(Meteor, "userId");
    });

    describe("pedidos.insert",function ( ) {
      
      it("Should insert a new Element", function ( ) {
        assert.equal(Pedidos.find({}).count(),0);
        
        Meteor.call("pedidos.insert",pedido);
        let pedidoPersistido = Pedidos.findOne(pedido);
        assert(pedidoPersistido);
      });

      it("Should NOT insert a new Element [Different user and Owner]", function () {

        pedido.owner = (userIdentification + "AA");
        try {
          Meteor.call("pedidos.insert", pedido);
          assert.fail(1,1,"Deberia generar error");
        } 
        catch (error) {
          assert(true);
        }
      });

    });

    describe("pedidos.remove", function () {

      beforeEach(function ( ) {
        Meteor.call("pedidos.insert", pedido);
      });

      it("Should remove Element", function () {
        assert.equal(Pedidos.find({}).count(),1);

        let pedidoActual = Pedidos.findOne(pedido);
        Meteor.call("pedidos.remove", pedidoActual._id, pedidoActual.pedidoState);
        assert.equal(Pedidos.find({}).count(), 0);
      });

      it("Should NOT remove Element [The state does not allow it]", function () {
        assert.equal(Pedidos.find({}).count(), 1);

        let pedidoActual = Pedidos.findOne(pedido);
        pedidoActual.pedidoState = "Entregado";
        try {
          Meteor.call("pedidos.remove", pedidoActual._id, pedidoActual.pedidoState);
          assert.fail(1,1, "No debe eliminar el pedido");
        } 
        catch (error) {
          assert(error);
          assert.equal(Pedidos.find({}).count(), 1);
        }

      });

    });

    describe("pedidos.seState", function ( ) {
      beforeEach(function () {
        Meteor.call("pedidos.insert", pedido);
      });

      it("Should update the state", function ( ) {
        assert.equal(Pedidos.find({}).count(), 1);

        let newState = "Entregado";
        let pedidoActual = Pedidos.findOne(pedido);
        Meteor.call("pedidos.setState", pedidoActual._id, userIdentification, newState);
        assert.equal(Pedidos.find({}).count(), 1);

        pedidoActual = Pedidos.findOne(pedido);
        assert.equal(pedidoActual.pedidoState, newState);
      });

      it("Should NOT update the state [Invalid State]", function () {
        assert.equal(Pedidos.find({}).count(), 1);

        try {
          let newState = "AAAAAAA";
          let pedidoActual = Pedidos.findOne(pedido);
          Meteor.call("pedidos.setState", pedidoActual._id, userIdentification, newState);
          assert.fail(1,1,"No deberia modificar el estado");
        } 
        catch (error) {
          assert(error);
        }
      });

    });

  });
}
