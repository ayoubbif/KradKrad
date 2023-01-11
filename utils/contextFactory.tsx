import React, { createContext } from 'react';
import type {
  ContextFactory,
  ContextProviderProps
} from '../types/contexts/contextFactory';

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
