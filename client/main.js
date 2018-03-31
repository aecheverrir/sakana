import React from  'react'
import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from '../imports/client/App'


Meteor.startup(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , document.getElementById('render-target'))
});
