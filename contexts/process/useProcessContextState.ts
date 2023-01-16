import { useCallback, useState } from 'react';
import type { Process, Processes } from 'utils/processDirectory';
import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess
} from 'utils/processFunctions';

type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (id: string) => void;
  open: (id: string, url: string) => void;
  maximize: (id: string) => void;
  minimize: (id: string) => void;
  mapProcesses: ProcessesMap;
  processes: Processes;
};

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const mapProcesses = useCallback<ProcessesMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  const close = useCallback((id: string) => setProcesses(closeProcess(id)), []);
  const open = useCallback(
    (id: string, url: string) => setProcesses(openProcess(id, url)),
    []
  );
  const maximize = useCallback(
    (id: string) => setProcesses(maximizeProcess(id)),
    []
  );
  const minimize = useCallback(
    (id: string) => setProcesses(minimizeProcess(id)),
    []
  );

  return { close, open, maximize, minimize, mapProcesses, processes };
};

export default useProcessContextState;
