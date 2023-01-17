import Image from 'next/image';
import { useCallback } from 'react';
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
  const { minimize } = useProcesses();
  const nextFocusableId = useNextFocusable(id);
  const { setForegroundId } = useSession();
  const onClick = useCallback(() => {
    minimize(id);
    setForegroundId(nextFocusableId);
  }, [id, minimize, nextFocusableId, setForegroundId]);

  return (
    <StyledTaskbarEntry>
      <Button onClick={onClick}>
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
