import { useFileSystem } from 'contexts/fileSystem';
import { useEffect, useState } from 'react';
import type { Position } from 'react-rnd';
import { Size } from 'components/system/Window/RndWindow/useResizable';

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
const SESSION_FILE = '/session.json';

const useSessionContextState = (): SessionContextState => {
  const { fs } = useFileSystem();
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});
  useEffect(() => {
    if (sessionLoaded) {
      fs?.writeFile(
        SESSION_FILE,
        JSON.stringify({
          themeName,
          windowStates
        })
      );
    }
  }, [fs, sessionLoaded, themeName, windowStates]);

  useEffect(
    () =>
      fs?.readFile(SESSION_FILE, (_error, contents) => {
        if (contents) {
          const session = JSON.parse(contents.toString());

          setThemeName(session.themeName);
          setWindowStates(session.windowStates);
        }

        setSessionLoaded(true);
      }),
    [fs]
  );
  return { themeName, setThemeName, windowStates, setWindowStates };
};

export default useSessionContextState;
