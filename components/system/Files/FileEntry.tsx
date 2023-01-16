import { useProcesses } from 'contexts/process';
import { useCallback } from 'react';
import Image from 'next/image';
import Button from 'styles/generic/Button';
import CustomImage from 'styles/generic/CustomImage';
import StyledFileEntry from './StyledFileEntry';
import useFileInfo from './useFileInfo';
import useDoubleClick from './useDoubleClick';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid, url } = useFileInfo(path);
  const { open } = useProcesses();
  const onClick = useCallback(() => open(pid, url), [open, pid, url]);

  return (
    <StyledFileEntry>
      <Button onClick={useDoubleClick(onClick)}>
        <CustomImage>
          {icon && (
            <Image
              src={icon}
              alt={name}
              width={33}
              height={33}
              draggable={false}
            />
          )}
          <figcaption>{name}</figcaption>
        </CustomImage>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;
