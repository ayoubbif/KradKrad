import { useProcesses } from 'contexts/process';
import Image from 'next/image';
import { useCallback } from 'react';
import StyledTitleBar from 'styles/components/system/Window/StyledTitleBar';
import Button from 'styles/generic/Button';
import { CloseIcon, MaximizeIcon, MinimizeIcon } from '../Icons';

type TitleBarProps = {
  id: string;
};

const TitleBar = ({ id }: TitleBarProps): JSX.Element => {
  const {
    close,
    maximize,
    minimize,
    processes: {
      [id]: { icon, title }
    }
  } = useProcesses();

  const onMaximize = useCallback(() => maximize(id), [id, maximize]);
  const onMinimize = useCallback(() => minimize(id), [id, minimize]);
  const onClose = useCallback(() => close(id), [id, close]);

  return (
    <StyledTitleBar>
      <h1>
        <figure>
          <Image src={icon} alt={title} height={19} width={19} />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav>
        <Button onClick={onMaximize}>
          <MaximizeIcon />
        </Button>
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitleBar>
  );
};

export default TitleBar;
