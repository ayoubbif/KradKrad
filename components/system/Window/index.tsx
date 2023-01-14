import { useProcesses } from 'contexts/process';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import { ProcessComponentProps } from '../Processes/RenderProcess';
import TitleBar from './TitleBar';
import { Rnd } from 'react-rnd';
import useResizable from 'hooks/useResizable';
import rndDefaults from 'utils/rndDefaults';

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();

  const { height, width, updateSize } = useResizable(maximized);

  return (
    <Rnd
      enableResizing={!maximized}
      size={{ height, width }}
      onResizeStop={updateSize}
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
