import type { RndResizeCallback } from 'react-rnd';
import { useCallback, useState } from 'react';

type Size = {
  height: string;
  width: string;
};

type Resizable = Size & {
  updateSize: RndResizeCallback;
};

const defaultWindowSize = {
  height: '500px',
  width: '750px'
};

const useResizable = (maximized = false): Resizable => {
  const [{ height, width }, setSize] = useState<Size>(defaultWindowSize);

  const updateSize = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } }
    ) => setSize({ height: elementHeight, width: elementWidth }),
    []
  );

  return {
    height: maximized ? '100%' : height, //Substract taskbar height
    width: maximized ? '100%' : width,
    updateSize
  };
};

export default useResizable;
