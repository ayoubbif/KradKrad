import type { FC, ReactNode } from "react";
import { useState, createContext } from "react";
import type { ProcessContextState } from "../types/contexts/process";
import processDirectory from "../utils/processDirectory";


interface Props {
  children: ReactNode;
}

const ProcessContext = createContext<ProcessContextState>({processes: {}});

export const ProcessProvider: FC<Props> = ({ children }) => {
  const [processes] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
        {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
