import 'styled-components';

export type WallpaperEffect = (element: HTMLElement | null) => () => void;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      highlight: string;
      fileEntry: {
        background: string;
        border: string;
        text: string;
        textShadow: string;
      };
      startButton: string;
      taskbar: {
        active: string;
        activeHover: string;
        background: string;
        hover: string;
      };
      text: string;
      titlebar: {
        background: string;
        text: string;
        backgroundInactive: string;
        buttonInactive: string;
        textInactive: string;
      };
      window: {
        background: string;
        outline: string;
        outlineInactive: string;
        shadow: string;
        shadowInactive: string;
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
      fileEntry: {
        fontSize: string;
        iconSize: string;
        letterSpacing: string;
      };
      fileManager: {
        columnGap: string;
        gridEntryHeight: string;
        gridEntryWidth: string;
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
          icon: {
            size: string;
          };
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

      window: {
        lineHeight: string;
        outline: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
