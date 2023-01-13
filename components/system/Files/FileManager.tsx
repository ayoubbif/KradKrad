import { basename, extname, resolve } from 'path';
import useFiles from '../../../hooks/useFiles';
import StyledFileManager from '../../../styles/components/system/Files/StyledFileManager';
import FileEntry from './FileEntry';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => (
  <StyledFileManager>
    {useFiles(directory, (file) => (
      <FileEntry
        key={file}
        name={basename(file, extname(file))}
        path={resolve(directory, file)}
      />
    ))}
  </StyledFileManager>
);

export default FileManager;
