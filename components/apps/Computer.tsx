import { useProcesses } from 'contexts/process';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Computer = ({ id }): JSX.Element => {
  const {
    processes: {
      [id]: { url }
    }
  } = useProcesses();

  return <h1 className={inter.className}>{url}</h1>;
};

export default Computer;
