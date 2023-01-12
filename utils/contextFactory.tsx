import React, { createContext } from 'react';
import type { ContextProviderProps } from '../types/contexts/contextFactory';

export type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Provider: React.FC<ContextProviderProps>;
  Consumer: React.Consumer<T>;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const { Provider, Consumer } = createContext(initialContextState);

  const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Provider: ContextProvider, Consumer };
};

export default contextFactory;
