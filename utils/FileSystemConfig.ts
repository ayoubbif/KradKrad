import { FileSystemConfiguration } from 'browserfs';
import publicFileSytemIndex from '../public.json';

const FileSystemConfig: FileSystemConfiguration = {
  fs: 'OverlayFS',
  options: {
    readable: {
      fs: 'XmlHTTPRequest',
      options: {
        index: publicFileSytemIndex
      }
    },
    writable: {
      fs: 'IndexedDB',
      options: {
        storeName: 'browser-fs-cache'
      }
    }
  }
};

export default FileSystemConfig;
