import type FS from 'browserfs/dist/node/core/FS';

export type FileSystemContextState = {
  fs: FS | null;
};
