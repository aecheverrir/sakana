import { Meteor } from 'meteor/meteor';
import "../imports/api/menus.jsx"
import "../imports/api/pedidos.jsx"
import "../imports/api/usuarios.jsx"
import { WebApp } from 'meteor/webapp';

WebApp.addHtmlAttributeHook(() => ({ lang: 'es' }));

Meteor.startup(() => {
  // code to run on server at startup
});
