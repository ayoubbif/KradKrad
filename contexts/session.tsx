import useSessionContextState from '../hooks/useSessionContextState';
import { SessionContextState } from '../types/contexts/session';
import contextFactory from '../utils/contextFactory';
import { initialSessionContextState } from '../utils/initialContextState';

const { Provider, Consumer, useContext } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export {
  Provider as SessionProvider,
  Consumer as SessionConsumer,
  useContext as useSession
};
