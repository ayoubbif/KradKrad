import useSessionContextState from '../hooks/useSessionContextState';
import { SessionContextState } from '../types/contexts/session';
import { initialSessionContextState } from '../utils/initialContextState';
import contextFactory from './contextFactory';

const { Provider, Consumer } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export { Provider as SessionProvider, Consumer as SessionConsumer };
