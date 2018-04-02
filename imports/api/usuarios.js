import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

import { check } from "meteor/check";
import { Match } from 'meteor/check';


Meteor.methods({
    "users.insert"(newUser) {

        let id =  Accounts.createUser(newUser);
        Roles.addUsersToRoles(id, "admin");
    }
});
