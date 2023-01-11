export type VantaCloudsSettings = {
  // Change this later
  speed?: number;
  skyColor?: number;
  cloudColor?: number;
  cloudShadowColor?: number;
  sunColor?: number;
  sunGlareColor?: number;
  sunlightColor?: number;
};

export type wallpaperEffect = (
  // eslint-disable-next-line no-unused-vars
  el: HTMLElement | null
) => () => void;
