import { useEffect } from "react";
import type { RefObject } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const useWallpaper = (refElement: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const vantaEffect = CLOUDS ({
      THREE,
      el: refElement.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      skyColor: 0x3b5f6a,
      cloudColor: 0x577cb0,
      cloudShadowColor: 0x475360,
      sunColor: 0x349a35,
      sunGlareColor: 0xe5430e,
      sunlightColor: 0xca711a,
    });

    return () => {
      vantaEffect.destroy();
    };
  }, [refElement]);
};

export default useWallpaper;
