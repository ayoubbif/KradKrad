import { useProcesses } from 'contexts/process';

const Computer = ({ id }): JSX.Element => {
  const {
    processes: {
      [id]: { url }
    }
  } = useProcesses();

  return <h1>Thinith OS ---- {url}</h1>;
};

export default Computer;
