import { extname } from 'path';
import { useEffect, useState } from 'react';
import { useFileSystem } from '../contexts/fileSystem';
import { IMAGE_FILE_EXTENSIONS } from '../utils/constants';
import {
  getProccessByFileExtension,
  getShortcut
} from '../utils/fileFunctions';

type FileInfo = {
  icon: string;
  pid: string;
};

const useFileInfo = (path: string): FileInfo => {
  const [icon, setIcon] = useState('');
  const [pid, setPid] = useState('');
  const { fs } = useFileSystem();

  useEffect(() => {
    if (fs) {
      const extension = extname(path);

      if (extension === '.url') {
        getShortcut(path, fs).then(({ URL, IconFile }) => {
          setIcon(IconFile);
          setPid(URL);
        });
      } else if (IMAGE_FILE_EXTENSIONS.includes(extension)) {
        setIcon(path);
        setPid('ImageViewer');
      } else {
        setPid(getProccessByFileExtension(extension));
      }
    }
  }, [fs, path]);

  return { icon, pid };
};

export default useFileInfo;
