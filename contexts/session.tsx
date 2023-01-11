import type { FC, ReactNode } from "react";
import { createContext } from "react";
import type { SessionContextState } from "../types/contexts/session";
import useSessionContextState from "../hooks/useSessionContextState";
import { initialSessionContextState } from "../utils/initialContextState";

interface Props {
  children: ReactNode;
}

const SessionContext = createContext<SessionContextState>(
  initialSessionContextState
);

export const SessionProvider: FC<Props> = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
