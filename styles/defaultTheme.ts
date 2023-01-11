import vantaClouds from "../utils/vantaClouds";

const defaultTheme = {
  colors: {
    background: '#000',
    primary: '#000',
    window: '#CCCCCC'
  },
  wallpaper: vantaClouds({
    speed: 1.5,
    skyColor: 0x636385,
    cloudColor: 0x717188,
    cloudShadowColor: 0x495362,
    sunColor: 0xff2000,
    sunGlareColor: 0x4dcc2e,
    sunlightColor: 0x1666d1
  })
};

export default defaultTheme;
