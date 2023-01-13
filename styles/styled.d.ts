import 'styled-components';

export type WallpaperEffect = (element: HTMLElement | null) => () => void;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      highlight: string;
      clockText: string;
      primary: string;
      startButton: string;
      taskbar: string;
      window: string;
      taskbarHover: string;
      opaqueWhite: string;
    };
    formats: {
      date: Intl.DateTimeFormatOptions;
      time: Intl.DateTimeFormatOptions;
    };
    sizes: {
      clock: {
        fontSize: string;
        width: string;
      };
      startButton: {
        iconSize: string;
        width: string;
      };
      taskbar: {
        blur: string;
        height: string;
        entry: {
          borderSize: string;
          fontSize: string;
          maxWidth: string;
        };
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
