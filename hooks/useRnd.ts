import type { RndResizeCallback, Props } from 'react-rnd';
import { useCallback } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import useResizable from './useResizable';
import useDraggable from './useDraggable';
import rndDefaults from 'utils/rndDefaults';
import { useSession } from 'contexts/session';
import { useProcesses } from 'contexts/process';

const useRnd = (id: string, maximized = false): Props => {
  const {
    processes: {
      [id]: { autoSizing }
    }
  } = useProcesses();
  const {
    windowStates: { [id]: windowState }
  } = useSession();
  const { position: statePosition, size: stateSize } = windowState || {};
  const [position, setPosition] = useDraggable(maximized, statePosition);
  const [size, setSize] = useResizable(maximized, autoSizing, stateSize);

  const onDragStop = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    [setPosition]
  );

  const onResizeStop = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } },
      _delta,
      { x: positionX, y: positionY }
    ) => {
      setSize({ height: elementHeight, width: elementWidth });
      setPosition({ x: positionX, y: positionY });
    },
    [setPosition, setSize]
  );

  return {
    disableDragging: maximized,
    enableResizing: !maximized && !autoSizing,
    position,
    size,
    onDragStop,
    onResizeStop,
    ...rndDefaults
  };
};

export default useRnd;
