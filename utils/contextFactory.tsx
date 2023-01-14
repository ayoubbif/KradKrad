import React, { createContext, useContext } from 'react';

type ProcessProviderProps = {
  children: React.ReactNode;
};

export type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Provider: (props: ProcessProviderProps) => JSX.Element;
  Consumer: React.Consumer<T>;
  useContext: () => T;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const Context = createContext(initialContextState);
  const ProcessProvider = ({ children }: ProcessProviderProps): JSX.Element => (
    <Context.Provider value={useContextState()}>{children}</Context.Provider>
  );

  return {
    Provider: ProcessProvider,
    Consumer: Context.Consumer,
    useContext: () => useContext(Context)
  };
};

export default contextFactory;
