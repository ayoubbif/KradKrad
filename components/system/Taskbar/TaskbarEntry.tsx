import React from 'react';
import Image from 'next/image';
import StyledTaskbarEntry from '../../../styles/components/system/Taskbar/StyledTaskbarEntry';

type TaskbarEntryProps = {
  icon: string;
  title: string;
};
const TaskbarEntry = ({ icon, title }: TaskbarEntryProps): JSX.Element => (
  <StyledTaskbarEntry>
    <figure>
      <Image src={icon} alt={title} width={19} height={19} />
      <figcaption>{title}</figcaption>
    </figure>
  </StyledTaskbarEntry>
);

export default TaskbarEntry;
