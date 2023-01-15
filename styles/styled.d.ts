import 'styled-components';

export type WallpaperEffect = (element: HTMLElement | null) => () => void;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      highlight: string;
      startButton: string;
      taskbar: {
        background: string;
        hover: string;
      };
      taskbarHover: string;
      text: string;
      titlebar: {
        background: string;
        text: string;
      };
      window: {
        background: string;
        outline: string;
        shadow: string;
      };
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
      fileManager: {
        columnGap: string;
        gridEntryHeight: string;
        gridEntryWidth: string;
        rowGap: string;
        padding: string;
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
      titlebar: {
        buttonIconWidth: string;
        buttonWidth: string;
        fontSize: string;
        height: string;
        iconMargin: string;
        iconSize: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
