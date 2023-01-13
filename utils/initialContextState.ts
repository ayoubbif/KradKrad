import { FileSystemContextState } from '../types/contexts/fileSystem';
import type { ProcessContextState } from '../types/contexts/process';
import type { SessionContextState } from '../types/contexts/session';

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialProcessContextState: ProcessContextState = {
  close: (id: string) => undefined,
  open: (id: string) => undefined,
  mapProcesses: () => []
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => {}
};
