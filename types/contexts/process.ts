import type { ComponentType, ReactNode } from "react";

export type Process = {
  Component: ComponentType;
  hasWindow: boolean;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};

export type ProcessProviderProps = {
  children: ReactNode;
  startupProcesses: Processes;
};
