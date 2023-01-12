import 'styled-components';
import { WallpaperEffect } from '../types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      taskbar: string;
      window: string;
    };
    fonts: {
      clock: {
        size: string;
      };
    };
    sizes: {
      clock: {
        width: string;
      };
      startButton: {
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
