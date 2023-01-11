import React from 'react';

export interface ContextProviderProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

export type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Provider: React.FC<ContextProviderProps>;
  Consumer: React.Consumer<T>;
};
