import { useProcesses } from 'contexts/process';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import { ProcessComponentProps } from '../Processes/RenderProcess';
import TitleBar from './TitleBar';
import { Rnd } from 'react-rnd';
import useResizable from 'hooks/useResizable';
import rndDefaults from 'utils/rndDefaults';
import useDraggable from 'hooks/useDraggable';

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();

  const { height, width, updateSize } = useResizable(maximized);
  const { x, y, updatePosition } = useDraggable(maximized);

  return (
    <Rnd
      disableDragging={maximized}
      enableResizing={!maximized}
      size={{ height, width }}
      onDrag={updatePosition}
      onResize={updateSize}
      position={{ x, y }}
      {...rndDefaults}
    >
      <StyledWindow minimized={minimized}>
        <TitleBar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
