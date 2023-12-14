import { useProcesses } from 'contexts/process';
import { useCallback } from 'react';
import Image from 'next/image';
import Button from 'styles/generic/Button';
import CustomImage from 'styles/generic/CustomImage';
import StyledFileEntry from './StyledFileEntry';
import useFileInfo from './useFileInfo';
import useDoubleClick from '../../useDoubleClick';
import { useSession } from 'contexts/session';
import { createPid } from 'contexts/process/functions';

export type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid, url } = useFileInfo(path);
  const { setForegroundId } = useSession();
  const { open, processes } = useProcesses();
  const onClick = useCallback(() => {
    const id = createPid(pid, url);

    if (processes[id]) {
      setForegroundId(id);
    } else {
      open(pid, url);
    }
  }, [open, pid, processes, setForegroundId, url]);

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
