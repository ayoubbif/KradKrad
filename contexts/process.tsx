import useProcessContextState from "../hooks/useProcessContextState";
import { ProcessContextState } from "../types/contexts/process";
import { initialProcessContextState } from "../utils/initialContextState";
import contextFactory from "./contextFactory";

const { Provider, Consumer } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export { Provider as ProcessProvider, Consumer as ProcessConsumer };
