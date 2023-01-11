import { useState } from 'react';
import { HelloWorld, Taskbar } from '../utils/processDirectory';
import type { ProcessContextState } from '../types/contexts/process';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState({ HelloWorld, Taskbar });

  return { processes };
};

export default useProcessContextState;
