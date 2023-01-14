import { useProcesses } from 'contexts/process';
import Image from 'next/image';
import { useCallback } from 'react';
import StyledTaskbarEntry from 'styles/components/system/Taskbar/StyledTaskbarEntry';
import Button from 'styles/generic/Button';
import CustomImage from 'styles/generic/CustomImage';

type TaskbarEntryProps = {
  icon: string;
  id: string;
  title: string;
};

const TaskbarEntry = ({ icon, id, title }: TaskbarEntryProps): JSX.Element => {
  const { minimize } = useProcesses();
  const onClick = useCallback(() => minimize(id), [id, minimize]);

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
