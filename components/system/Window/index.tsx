import { useProcesses } from 'contexts/process';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import { ProcessComponentProps } from '../Processes/RenderProcess';
import TitleBar from './TitleBar';
import { Rnd } from 'react-rnd';
import rndDefaults from 'utils/rndDefaults';
import useResizableAndDraggable from 'hooks/useRnd';

type WindpwProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, id }: WindpwProps): JSX.Element => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();

  const { height, width, updateSize, x, y, updatePosition } =
    useResizableAndDraggable(maximized);
  return (
    <Rnd
      disableDragging={maximized}
      enableResizing={!maximized}
      size={{ height, width }}
      onDragStop={updatePosition}
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
