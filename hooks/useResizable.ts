import type { Props } from 'react-rnd';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';
import { pxToNumber } from 'utils/stringFunctions';

export type Size = NonNullable<Props['size']>;

type Resizable = [Size, React.Dispatch<React.SetStateAction<Size>>];

const useResizable = (
  maximized = false,
  size = DEFAULT_WINDOW_SIZE
): Resizable => {
  const [{ height, width }, setSize] = useState<Size>(size);
  const {
    sizes: { taskbar }
  } = useTheme();

  return [
    {
      height: maximized
        ? `${window.innerHeight - pxToNumber(taskbar.height)}px`
        : height,
      width: maximized ? '100%' : width
    },
    setSize
  ];
};

export default useResizable;
