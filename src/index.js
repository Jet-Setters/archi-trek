import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Header from './Header.js'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="anvayb.us.auth0.com"
    clientId="ZNdx0Y6ul2D2cwTcPPatvY7ihSqOJtIK"
    redirectUri={window.location.origin}
  >
    
    <React.StrictMode>
      <App />
      <Header />
  
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);