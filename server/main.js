import { Meteor } from 'meteor/meteor';
import "../imports/api/menus.js"
import "../imports/api/pedidos.js"
import "../imports/api/usuarios.js"
import { WebApp } from 'meteor/webapp';

WebApp.addHtmlAttributeHook(() => ({ lang: 'es' }));

Meteor.startup(() => {
  // code to run on server at startup
});
