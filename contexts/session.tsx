import type { FC, ReactNode } from "react";
import { createContext } from "react";
// import themes from "../styles/themes.json";
import type { SessionContextState } from "../types/contexts/session";
import useSessionContextState from "../hooks/useSessionContextState";

interface Props {
  children: ReactNode;
}

const SessionContext = createContext<SessionContextState>({});

export const SessionProvider: FC<Props> = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
