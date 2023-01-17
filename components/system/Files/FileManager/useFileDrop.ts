import { useFileSystem } from 'contexts/fileSystem';
import React, { useCallback } from 'react';

const haltDragEvent = (event: React.DragEvent): void => {
  event.preventDefault();
  event.stopPropagation();
};

type FileDrop = {
  onDrop: (event: React.DragEvent<HTMLElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
};

const useFileDrop = (
  directory: string,
  updateFiles: (appendFile?: string) => void
): FileDrop => {
  const { fs } = useFileSystem();
  const onDrop = useCallback(
    (event: React.DragEvent<HTMLElement>) => {
      haltDragEvent(event);

      const { files: [file] = [] } = event.dataTransfer || {};
      if (file) {
        const reader = new FileReader();

        reader.onload = ({ target }) => {
          fs?.writeFile(
            `${directory}/${file.name}`,
            Buffer.from(new Uint8Array(target?.result as ArrayBuffer)),
            (error) => !error && updateFiles(file.name)
          );
        };

        reader.readAsArrayBuffer(file);
      }
    },
    [directory, fs, updateFiles]
  );

  return {
    onDragOver: haltDragEvent,
    onDrop
  };
};

export default useFileDrop;

