import type { RndResizeCallback, Position } from 'react-rnd';
import { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { DraggableEventHandler } from 'react-draggable';

type Size = {
  height: string;
  width: string;
};

type Resizable = Size & {
  updateSize: RndResizeCallback;
};

type Draggable = Position & {
  updatePosition: DraggableEventHandler;
};

type ResizableAndDraggable = Resizable & Draggable;

const defaultWindowSize = {
  height: '200px',
  width: '250px'
};

const defaultWindowPosition = {
  x: 0,
  y: 0
};

const useResizableAndDraggable = (maximized = false): ResizableAndDraggable => {
  const { sizes } = useTheme();
  const [{ height, width }, setSize] = useState<Size>(defaultWindowSize);
  const [{ x, y }, setPosition] = useState<Position>(defaultWindowPosition);
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    []
  );

  const updateSize = useCallback<RndResizeCallback>(
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
    []
  );

  return {
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    updatePosition,
    height: maximized ? `calc(100% - ${sizes.taskbar.height})` : height, //Substract taskbar height
    width: maximized ? '100%' : width,
    updateSize
  };
};

export default useResizableAndDraggable;
