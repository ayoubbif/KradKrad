import type { FC } from "react";
import { createContext } from "react";
import type {
  ProcessContextState,
  ProcessProviderProps,
} from "../types/contexts/process";
import useProcessContextState from "../hooks/useProcessContextState";
import { initialProcessContextState } from "../utils/initialContextState";

const { Provider, Consumer } = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: FC<ProcessProviderProps> = ({
  children,
  startupProcesses,
}) => (
  <Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
