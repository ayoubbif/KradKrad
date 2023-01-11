
import Themes from "../types/styles/themes";
import vantaClouds from "../utils/vantaClouds";

const defaultTheme = {
  colors: {
    backgroundcolor: "#000",
    primary: "#000",
    window: "#CCCCCC",
  },
  wallpaper: vantaClouds({
    speed: 1.5,
    minHeight: 200.0,
    minWidth: 200.0,
    skyColor: 0x123123,
    cloudColor: 0x7f7f7f,
    cloudShadowColor: 0x2b4b6b,
    sunColor: 0xe8361d,
    sunGlareColor: 0x443433,
    sunlightColor: 0x805808,
  }),
};

const themes: Themes = { defaultTheme };

export default themes;
