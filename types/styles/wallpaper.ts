import React from "react";

export type VantaCloudsSettings = {
  speed: number;
  skyColor: number;
  cloudColor: number;
  cloudShadowColor: number;
  sunColor: number;
  sunGlareColor: number;
  sunlightColor: number;
};

export type wallpaperEffect = (
  desktopRef: React.RefObject<HTMLElement>
) => () => void;
