import React from 'react';
import Routes from './routes';
import ErrorBoundary from './errorBoundary';
import './App.css';

function App() {
  return (
      <ErrorBoundary>
          <Routes />
      </ErrorBoundary>
  )
}

export default App;
