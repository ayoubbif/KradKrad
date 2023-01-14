import { useProcesses } from 'contexts/process';
import useFileInfo from 'hooks/useFileInfo';
import { useCallback } from 'react';
import Image from 'next/image';
import StyledFileEntry from 'styles/components/system/Files/StyledFileEntry';
import Button from 'styles/generic/Button';
import useDoubleClick from 'hooks/useDoubleClick';
import CustomImage from 'styles/generic/CustomImage';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid } = useFileInfo(path);
  const { open } = useProcesses();
  const onClick = useCallback(() => open(pid), [open, pid]);

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
              loading="lazy"
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
