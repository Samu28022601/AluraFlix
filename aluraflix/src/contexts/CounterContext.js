import React, { createContext, useContext } from 'react';
import useCounter from '../hooks/useCounter';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const counter = useCounter();
  return (
    <CounterContext.Provider value={counter}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
