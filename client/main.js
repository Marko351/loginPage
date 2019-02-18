import React from 'react';
import ReactDOM from 'react-dom';
import './main.html';
import App from './components/app';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('container'));
})
