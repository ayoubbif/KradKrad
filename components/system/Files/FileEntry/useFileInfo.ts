import { useFileSystem } from 'contexts/fileSystem';
import { extname } from 'path';
import { useEffect, useState } from 'react';
import { IMAGE_FILE_EXTENSIONS } from 'utils/constants';
import {
  getIconByFileExtension,
  getProcessByFileExtension
} from './fileFunctions';
import ini from 'ini';

import { bufferToUrl } from 'utils/functions';

export type FileInfo = {
  icon: string;
  pid: string;
  url: string;
};

const useFileInfo = (path: string): FileInfo => {
  const [info, setInfo] = useState<FileInfo>({ icon: '', pid: '', url: '' });
  const { fs } = useFileSystem();

  useEffect(() => {
    if (fs) {
      const extension = extname(path).toLowerCase();
      const getInfoByFileExtension = (icon?: string) =>
        setInfo({
          icon: icon || getIconByFileExtension(extension),
          pid: getProcessByFileExtension(extension),
          url: path
        });

      if (extension === '.url') {
        fs.readFile(path, (error, contents = Buffer.from('')) => {
          if (error) {
            getInfoByFileExtension();
          } else {
            const {
              InternetShortcut: {
                BaseURL: pid = '',
                URL: url = '',
                IconFile: icon = ''
              }
            } = ini.parse(contents.toString());

            setInfo({ icon, pid, url });
          }
        });
      } else if (IMAGE_FILE_EXTENSIONS.includes(extension)) {
        fs.readFile(path, (error, contents = Buffer.from('')) =>
          getInfoByFileExtension(
            error ? '/icons/image.png' : bufferToUrl(contents)
          )
        );
      } else {
        getInfoByFileExtension();
      }
    }
  }, [fs, path]);

  return info;
};

export default useFileInfo;
