import { useState } from 'react';
import { Taskbar } from '../utils/processDirectory';
import type { ProcessContextState, Processes } from '../types/contexts/process';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({ Taskbar });

  return { processes };
};

export default useProcessContextState;
