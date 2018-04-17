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

    beforeEach(function ( ) {
      resetDatabase();
      //Crea Usuario Administrador en la Base de Datos
      userIdentification = Accounts.createUser(newUser);
      Roles.addUsersToRoles(userIdentification, "admin");

      sinon.stub(Meteor, "userId");
      Meteor.userId.returns(userIdentification);

    });

    afterEach(function ( ) {
      resetDatabase();
      sinon.restore(Meteor, "userId");
    });

    describe("pedidos.crud",function ( ) {
      
      it("should insert a new Element", function ( ) {

        let pedido = {
          owner: userIdentification,
          address: "calle prueba 123",
          creationDate: new Date(),
          comments: "Comentario de prueba",
          price: 100,
          items:[
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
        console.log("testUserID: " + userIdentification);
        assert.equal(Pedidos.find({}).count(),0);
        Meteor.call("pedidos.insert",pedido);
        let pedidoPersistido = Pedidos.findOne(pedido);
        console.log(pedidoPersistido);
        assert(pedidoPersistido);
      });

      it("should not insert a new Element", function () {

        let pedido = {
          owner: (userIdentification + "AA"),
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
        try {
          Meteor.call("pedidos.insert", pedido);
          fail(1,1,"Deberia generar error");
        } catch (error) {
          assert(true);
        }
        
        
      });

    })

  });
}
