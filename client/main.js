import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../imports/client/App'


Meteor.startup(() => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('render-target'))
});

