import { useProcesses } from 'contexts/process';
import { useRef } from 'react';
import { ProcessComponentProps } from '../Processes/RenderProcess';
import RndWindow from './RndWindow';
import StyledWindow from './StyledWindow';
import TitleBar from './TitleBar';
import useFocusable from './useFocusable';

type WindowProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, id }: WindowProps): JSX.Element => {
  const {
    processes: {
      [id]: { minimized, backgroundColor }
    }
  } = useProcesses();
  const windowRef = useRef<HTMLElement | null>(null);
  const { zIndex, ...focusableProps } = useFocusable(id, windowRef);

  return (
    <RndWindow id={id} style={{ zIndex }}>
      <StyledWindow
        minimized={minimized}
        ref={windowRef}
        style={{ backgroundColor }}
        {...focusableProps}
      >
        <TitleBar id={id} />
        {children}
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
