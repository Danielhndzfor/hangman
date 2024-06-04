import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import { StatsProvider } from './components/StatsContext.tsx';

ReactDOM.render(
  <React.StrictMode>
    <StatsProvider>
      <Router>
        <App />
      </Router>
    </StatsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
