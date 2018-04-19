import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Pedidos } from './pedidos.jsx';
import { assert } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { resetDatabase } from "meteor/xolvio:cleaner";
import { fail } from 'assert';

if (Meteor.isServer) {
    describe('usuarios', function() {
        describe('usuarios.insert', function() {
            
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

                Meteor.call("users.insert", newUser);
            });
          
            afterEach(function ( ) {
                resetDatabase();
                sinon.restore(Meteor, "userId");
            });


            it("Should insert new user with it's role", function() {
                
                /*
                // trys to obtain the new users data
                let newUser = Accounts.findUser({name:"Nombre"});
                let newUserRol = Roles.findUser(newUser);
                
                // checks the users attributes
                assert.equal("Nombre", newUser.name);

                // checks the users rol
                assert.equal("admin", newUserUserRol);
                */

            }); 

        });
    });
}

/*

Meteor.methods({
    "users.insert"(newUser) {

        let id =  Accounts.createUser(newUser);
        Roles.addUsersToRoles(id, "admin");
    }
});

*/
