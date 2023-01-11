import React from "react";

export type VantaCloudsSettings = {
  speed: number;
  minHeight: number;
  minWidth: number;
  skyColor: number;
  cloudColor: number;
  cloudShadowColor: number;
  sunColor: number;
  sunGlareColor: number;
  sunlightColor: number;
};

export type wallpaperEffect = (
  // eslint-disable-next-line no-unused-vars
  desktopRef: React.RefObject<HTMLElement>
) => () => void;
