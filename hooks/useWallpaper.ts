import { useEffect } from "react";
import type { RefObject } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const useWallpaper = (refElement: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: refElement.current,
      THREE,
    });

    return () => {
      vantaEffect.destroy();
    };
  }, [refElement]);
};

export default useWallpaper;
