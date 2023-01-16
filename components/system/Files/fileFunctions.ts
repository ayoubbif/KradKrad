import type { FSModule } from 'browserfs/dist/node/core/FS';
import ini from 'ini';

type Shortcut = {
  BaseURL: string;
  URL: string;
  IconFile: string;
};

export const getShortcut = (path: string, fs: FSModule): Promise<Shortcut> =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (error, contents = Buffer.from('')) => {
      if (error) {
        reject(error);
      } else {
        const { InternetShortcut = { BaseURL: '', URL: '', IconFile: '' } } =
          ini.parse(contents.toString());
        resolve(InternetShortcut as Shortcut);
      }
    });
  });
export const getIconByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return '/icons/iso.ico';
    default:
      return '/icons/unknown.ico';
  }
};
export const getProcessByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return 'V86';
    default:
      return '';
  }
};
