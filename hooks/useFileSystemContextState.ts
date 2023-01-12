import { useEffect, useState } from 'react';
import * as BrowserFS from 'browserfs';
import { FileSystemContextState } from '../types/contexts/fileSystem';
import FSModule from 'browserfs/dist/node/core/FS';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    BrowserFS.install(window);

    BrowserFS.configure(
      {
        fs: 'IndexedDB'
      },
      () => {
        setFs(BrowserFS.BFSRequire('fs'));
      }
    );
  }, [setFs]);

  return { fs };
};

export default useFileSystemContextState;
