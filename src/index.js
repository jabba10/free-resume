import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Add this for react-snap
const snap = process.env.REACT_APP_SNAP;
if (snap) {
  const rootElement = document.getElementById('root');
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrateRoot(rootElement, <App />);
  } else {
    root.render(<App />);
  }
}