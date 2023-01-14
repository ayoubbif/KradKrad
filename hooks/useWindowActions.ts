import { useProcesses } from 'contexts/process';
import { useCallback } from 'react';

type WindowActions = {
  onMaximize: React.MouseEventHandler;
  onMinimize: React.MouseEventHandler;
  onClose: React.MouseEventHandler;
};

const useWindowActions = (id: string): WindowActions => {
  const { close, maximize, minimize } = useProcesses();
  const onMaximize = useCallback(() => maximize(id), [id, maximize]);
  const onMinimize = useCallback(() => minimize(id), [id, minimize]);
  const onClose = useCallback(() => close(id), [id, close]);

  return { onMaximize, onMinimize, onClose };
};

export default useWindowActions;
