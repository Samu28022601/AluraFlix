import React from 'react';
import Routes from './routes';
import { CounterProvider } from './contexts/CounterContext';

const App = () => (
  <CounterProvider>
    <Routes />
  </CounterProvider>
);

export default App;
