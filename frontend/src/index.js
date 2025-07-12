import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Remove the import for BrowserRouter, as it's now handled inside App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);