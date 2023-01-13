import React, { createContext, useContext } from 'react';

interface ContextProviderProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

export type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Provider: React.FC<ContextProviderProps>;
  Consumer: React.Consumer<T>;
  useContext: () => T;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const Context = createContext(initialContextState);

  const ProcessProvider: React.FC<ContextProviderProps> = ({ children }) => (
    <Context.Provider value={useContextState()}>{children}</Context.Provider>
  );

  return {
    Provider: ProcessProvider,
    Consumer: Context.Consumer,
    useContext: () => useContext(Context)
  };
};

export default contextFactory;
