import contextFactory from 'contexts/contextFactory';
import { initialProcessContextState } from 'contexts/initialContextStates';
import type { ProcessContextState } from './useProcessContextState';
import useProcessContextState from './useProcessContextState';

const { Consumer, Provider, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses
};
