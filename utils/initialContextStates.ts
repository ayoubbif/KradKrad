import type { ProcessContextState } from 'hooks/useProcessContextState';
import type { FileSystemContextState } from 'hooks/useFileSystemContextState';
import type { SessionContextState } from 'hooks/useSessionContextState';

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialProcessContextState: ProcessContextState = {
  close: () => undefined,
  open: () => undefined,
  maximize: () => undefined,
  minimize: () => undefined,
  mapProcesses: () => [],
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};
