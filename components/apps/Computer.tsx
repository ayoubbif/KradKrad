import { useProcesses } from 'contexts/process';

const Computer = ({ id }): JSX.Element => {
  const {
    processes: {
      [id]: { url }
    }
  } = useProcesses();

  return <h1>{url}</h1>;
};

export default Computer;
