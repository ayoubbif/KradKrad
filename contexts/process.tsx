import React, { createContext } from "react";
import type { ProcessContextState } from "../types/contexts/process";
import useProcessContextState from "../hooks/useProcessContextState";
import { initialProcessContextState } from "../utils/initialContextState";

const { Provider, Consumer } = createContext<ProcessContextState>(
  initialProcessContextState
);
interface ProcessProviderProps {
  children: React.ReactNode;
}

export const ProcessProvider: React.FC<ProcessProviderProps> = ({
  children,
}) => <Provider value={useProcessContextState()}>{children}</Provider>;

export const ProcessConsumer = Consumer;
