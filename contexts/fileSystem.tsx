import useFileSystemContextState from '../hooks/useFileSystemContextState';
import type { FileSystemContextState } from '../types/contexts/fileSystem';
import contextFactory from '../utils/contextFactory';
import { initialFileSystemContextState } from '../utils/initialContextState';

const { Provider, Consumer, useContext } =
  contextFactory<FileSystemContextState>(
    initialFileSystemContextState,
    useFileSystemContextState
  );

export {
  Provider as FileSystemProvider,
  Consumer as FileSystemConsumer,
  useContext as useFileSystem
};
