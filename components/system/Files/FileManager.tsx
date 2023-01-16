import { basename, extname, resolve } from 'path';
import FileEntry from './FileEntry';
import StyledFileManager from './StyledFileManager';
import useFileDrop from './useFileDrop';
import useFiles from './useFiles';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => {
  const { files, getFiles } = useFiles(directory);

  return (
    <StyledFileManager {...useFileDrop(directory, getFiles)}>
      {files.map((file) => (
        <FileEntry
          key={file}
          name={basename(file, extname(file))}
          path={resolve(directory, file)}
        />
      ))}
    </StyledFileManager>
  );
};

export default FileManager;
