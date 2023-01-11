import 'styled-components';
import { WallpaperEffect } from '../types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      window: string;
    };
    wallpaper: WallpaperEffect;
  }
}
