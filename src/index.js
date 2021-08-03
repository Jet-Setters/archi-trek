import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Header from './Header.js'
import Footer from './Footer.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);