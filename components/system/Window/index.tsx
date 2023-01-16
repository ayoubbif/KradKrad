import { useProcesses } from 'contexts/process';
import { ProcessComponentProps } from '../Processes/RenderProcess';
import RndWindow from './RndWindow';
import StyledWindow from './StyledWindow';
import TitleBar from './TitleBar';

type WindowProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, id }: WindowProps): JSX.Element => {
  const {
    processes: {
      [id]: { minimized, backgroundColor }
    }
  } = useProcesses();

  return (
    <RndWindow id={id}>
      <StyledWindow minimized={minimized} style={{ backgroundColor }}>
        <TitleBar id={id} />
        {children}
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
