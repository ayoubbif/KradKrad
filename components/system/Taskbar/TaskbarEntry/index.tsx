import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import Button from 'styles/generic/Button';
import CustomImage from 'styles/generic/CustomImage';
import StyledTaskbarEntry from './StyledTaskbarEntry';
import useNextFocusable from 'components/system/Window/useNextFocusable';

type TaskbarEntryProps = {
  icon: string;
  id: string;
  title: string;
};

const TaskbarEntry = ({ icon, id, title }: TaskbarEntryProps): JSX.Element => {
  const nextFocusableId = useNextFocusable(id);
  const { foregroundId, setForegroundId } = useSession();
  const isForeground = useMemo(() => id === foregroundId, [foregroundId, id]);
  const {
    linkElement,
    minimize,
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();
  const linkTaskbarEntry = useCallback(
    (taskbarEntry: HTMLButtonElement) =>
      linkElement(id, 'taskbarEntry', taskbarEntry),
    [id, linkElement]
  );
  const onClick = useCallback(() => {
    if (minimized || isForeground) {
      minimize(id);
    }

    setForegroundId(isForeground ? nextFocusableId : id);
  }, [id, isForeground, minimize, minimized, nextFocusableId, setForegroundId]);

  return (
    <StyledTaskbarEntry foreground={isForeground}>
      <Button onClick={onClick} ref={linkTaskbarEntry}>
        <CustomImage>
          <Image
            src={icon}
            alt={title}
            width={19}
            height={19}
            draggable={false}
          />
          <figcaption>{title}</figcaption>
        </CustomImage>
      </Button>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
