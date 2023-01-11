import type { FC, ReactNode } from "react";
import { createContext } from "react";
import type { ProcessContextState } from "../types/contexts/process";
import processDirectory from "../utils/processDirectory";
import useProcessContextState from "../hooks/useProcessContextState";
import { initialProcessContextState } from "../utils/initialContextState";

interface Props {
  children: ReactNode;
}

const ProcessContext = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: FC<Props> = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
