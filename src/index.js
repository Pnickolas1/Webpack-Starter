import React from 'react';
import ReactDOM from 'react-dom';
const title = 'mobilenurse';
import App from './App';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);


module.hot.accept();
