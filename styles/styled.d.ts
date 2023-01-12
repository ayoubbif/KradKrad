import 'styled-components';
import { WallpaperEffect } from '../types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      startButton: string;
      taskbar: string;
      window: string;
    };
    sizes: {
      clock: {
        size: string;
        width: string;
      };
      startButton: {
        size: string;
        width: string;
      };
      taskbar: {
        blur: string;
        height: string;
        entry: {
          maxWidth: string;
        };
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
