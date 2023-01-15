import type { RndResizeCallback, Props } from 'react-rnd';
import { useCallback } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import useResizable from './useResizable';
import useDraggable from './useDraggable';
import rndDefaults from 'utils/rndDefaults';
import { useSession } from 'contexts/session';

const useRnd = (id: string, maximized = false): Props => {
  const {
    windowStates: { [id]: windowState }
  } = useSession();
  const { position: previousPosition, size: previousSize } = windowState || {};
  const [position, setPosition] = useDraggable(maximized, previousPosition);
  const [size, setSize] = useResizable(maximized, previousSize);

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
    enableResizing: !maximized,
    position,
    size,
    onDragStop,
    onResizeStop,
    ...rndDefaults
  };
};

export default useRnd;
