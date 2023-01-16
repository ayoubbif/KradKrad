import useFileSystemContextState from 'contexts/fileSystem/useFileSystemContextState';
import type { FileSystemContextState } from 'contexts/fileSystem/useFileSystemContextState';
import contextFactory from 'contexts/contextFactory';
import { initialFileSystemContextState } from 'contexts/initialContextStates';

const { Consumer, Provider, useContext } =
  contextFactory<FileSystemContextState>(
    initialFileSystemContextState,
    useFileSystemContextState
  );

export {
  Consumer as FileSystemConsumer,
  Provider as FileSystemProvider,
  useContext as useFileSystem
};

