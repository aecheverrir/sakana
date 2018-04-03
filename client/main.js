import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../imports/ui/components/App'
import "../imports/startup/accounts-config";
//Sería bueno que importaran esta libreria que les ayuda a injectar el lang a su codigo HTML. Con esto solucionan un problema de accesibilidad.
//Si les interesa en este link encuentran una solución bien chévere: https://forums.meteor.com/t/can-i-edit-html-tag-in-meteor/5867/5
Meteor.startup(() => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('render-target'))
});

