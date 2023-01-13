import { useProcesses } from 'contexts/process';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import { ProcessComponentProps } from '../Processes/RenderProcess';
import TitleBar from './TitleBar';

const Window: React.FC<ProcessComponentProps> = ({ children, id }) => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();

  return (
    <StyledWindow minimized={minimized}>
      <TitleBar id={id} />
      {children}
    </StyledWindow>
  );
};

export default Window;
