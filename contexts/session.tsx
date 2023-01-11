import useSessionContextState from '../hooks/useSessionContextState';
import { SessionContextState } from '../types/contexts/session';
import contextFactory from '../utils/contextFactory';
import { initialSessionContextState } from '../utils/initialContextState';


const { Provider, Consumer } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export { Provider as SessionProvider, Consumer as SessionConsumer };
