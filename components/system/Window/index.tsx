import { useProcesses } from 'contexts/process';
import StyledWindow from 'styles/components/system/Window/StyledWindow';
import { ProcessComponentProps } from '../Processes/RenderProcess';
import TitleBar from './TitleBar';
import { Rnd } from 'react-rnd';
import useRnd from 'hooks/useRnd';

type WindowProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, id }: WindowProps): JSX.Element => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();

  const rndProps = useRnd(maximized);

  return (
    <Rnd {...rndProps}>
      <StyledWindow minimized={minimized}>
        <TitleBar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
