import type { Processes } from 'contexts/process/directory';
import processDirectory from 'contexts/process/directory';

export const closeProcess =
  (processId: string) =>
  ({
    [processId]: _closedProcess,
    ...remainingProcesses
  }: Processes): Processes =>
    remainingProcesses;

export const openProcess =
  (processId: string, url: string) =>
  (currentProcesses: Processes): Processes => {
    const id = url ? `${processId}_${url}` : processId;

    return currentProcesses[processId] || !processDirectory[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [id]: {
            ...processDirectory[processId],
            url
          }
        };
  };

export const toggleProcessSetting =
  (processId: string, setting: 'maximized' | 'minimized') =>
  ({ [processId]: process, ...otherProcesses }: Processes): Processes =>
    process
      ? {
          [processId]: {
            ...process,
            [setting]: !process[setting]
          },
          ...otherProcesses
        }
      : otherProcesses;

export const maximizeProcess =
  (processId: string) =>
  (Processes: Processes): Processes =>
    toggleProcessSetting(processId, 'maximized')(Processes);

export const minimizeProcess =
  (processId: string) =>
  (Processes: Processes): Processes =>
    toggleProcessSetting(processId, 'minimized')(Processes);

