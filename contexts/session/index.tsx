import contextFactory from 'contexts/contextFactory';
import { initialSessionContextState } from 'contexts/initialContextStates';
import useSessionContextState, {
  SessionContextState
} from './useSessionContextState';

const { Consumer, Provider, useContext } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export {
  Consumer as SessionConsumer,
  Provider as SessionProvider,
  useContext as useSession
};
