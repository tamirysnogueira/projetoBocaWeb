import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const headerIndex = ReactDOM.createRoot(document.getElementById('header'));
const footerIndex = ReactDOM.createRoot(document.getElementById('Footer'));

headerIndex.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

footerIndex.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
