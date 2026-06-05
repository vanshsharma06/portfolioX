import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Global error handler
window.onerror = function(msg, url, lineNo, columnNo) {
  console.error('Global error:', msg, 'at line:', lineNo, columnNo);
  return false;
};

window.onunhandledrejection = function(event) {
  console.error('Unhandled promise rejection:', event.reason);
};

console.log('Portfolio app starting...');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
