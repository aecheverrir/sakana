import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';


if (Meteor.isServer) {
    describe('usuarios', function() {
        describe('usuarios.insert', function() {
            
            let usuarioEjemplo = 
                    {
                        name: "Nombre" 
                    };


            it("Should insert new user with it's role", function() {

                Meteor.call("usuarios.insert", usuarioEjemplo);
                
                // trys to obtain the new users data
                let newUser = Accounts.findUser({name:"Nombre"});
                let newUserRol = Roles.findUser(newUser);
                
                // checks the users attributes
                assert.equal("Nombre", newUser.name);

                // checks the users rol
                assert.equal("admin", newUserUserRol);

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
