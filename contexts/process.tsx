import useProcessContextState from '../hooks/useProcessContextState';
import { ProcessContextState } from '../types/contexts/process';
import contextFactory from '../utils/contextFactory';
import { initialProcessContextState } from '../utils/initialContextState';

const { Provider, Consumer, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Provider as ProcessProvider,
  Consumer as ProcessConsumer,
  useContext as useProcesses
};
