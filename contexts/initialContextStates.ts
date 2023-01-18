import type { ProcessContextState } from './process/useProcessContextState';
import type { FileSystemContextState } from './fileSystem/useFileSystemContextState';
import type { SessionContextState } from './session/useSessionContextState';

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialProcessContextState: ProcessContextState = {
  close: () => undefined,
  open: () => undefined,
  maximize: () => undefined,
  minimize: () => undefined,
  linkElement: () => undefined,
  mapProcesses: () => [],
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  windowStates: {},
  setThemeName: () => undefined,
  setWindowStates: () => undefined,
  foregroundId: '',
  setForegroundId: () => undefined,
  stackOrder: [],
  setStackOrder: () => undefined
};

