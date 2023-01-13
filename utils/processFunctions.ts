import { Processes } from '../types/contexts/process';
import processDirectory from '../utils/processDirectory';

export const closeProcess =
  (pid: string) =>
  ({ [pid]: _closeProcess, ...remainingProcesses }: Processes) =>
    remainingProcesses;

export const openProcess = (pid: string) => (currentProcesses: Processes) =>
  currentProcesses[pid] || !processDirectory[pid]
    ? currentProcesses
    : {
        ...currentProcesses,
        [pid]: processDirectory[pid]
      };
