import Image from 'next/image';
import { useProcesses } from 'contexts/process';
import Button from 'styles/generic/Button';
import { useSession } from 'contexts/session';
import { useMemo } from 'react';
import {
  CloseIcon,
  MaximizeIcon,
  MaximizedIcon,
  MinimizeIcon
} from '../../Icons';
import StyledTitleBar from './StyledTitleBar';
import useWindowActions from './useWindowActions';

type TitleBarProps = {
  id: string;
};

const TitleBar = ({ id }: TitleBarProps): JSX.Element => {
  const {
    processes: {
      [id]: { autoSizing, icon, title, maximized }
    }
  } = useProcesses();
  const { foregroundId } = useSession();
  const isForeground = useMemo(() => id === foregroundId, [foregroundId, id]);
  const { onMaximize, onMinimize, onClose } = useWindowActions(id);

  return (
    <StyledTitleBar className="handle" foreground={isForeground}>
      <h1>
        <figure>
          <Image
            src={icon}
            alt={title}
            height={16}
            width={16}
            draggable={false}
          />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button className="minimize" onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button className="maximize" onClick={onMaximize} disabled={autoSizing}>
          {maximized ? <MaximizedIcon /> : <MaximizeIcon />}
        </Button>
        <Button className="close" onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitleBar>
  );
};

export default TitleBar;

