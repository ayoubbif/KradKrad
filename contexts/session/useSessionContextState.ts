import { useState } from 'react';
import type { Position } from 'react-rnd';
import { Size } from '../../components/system/Window/RndWindow/useResizable';

export type SessionContextState = {
  themeName: string;
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
  windowStates: WindowStates;
  setWindowStates: React.Dispatch<React.SetStateAction<WindowStates>>;
};

type WindowState = {
  position?: Position;
  size?: Size;
};

type WindowStates = {
  [id: string]: WindowState;
};

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});

  return { themeName, setThemeName, windowStates, setWindowStates };
};

export default useSessionContextState;
