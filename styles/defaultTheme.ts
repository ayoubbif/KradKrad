import { DefaultTheme } from 'styled-components';
import vantaClouds from '../utils/vantaClouds';

const colors = {
  background: '#000',
  primary: '#000',
  taskbar: 'rgba(0, 0, 0, 60%)',
  window: '#CCCCCC'
};

const fonts = {
  clock: {
    size: '13px'
  }
};

const sizes = {
  clock: {
    width: '76px'
  },
  startButton: {
    width: '36px'
  },
  taskbar: {
    blur: '7px',
    height: '30px',
    entry: {
      maxWidth: '161px'
    }
  }
};

const wallpaper = vantaClouds({
  skyColor: 0x1d3f4d,
  cloudColor: 0x4a70a7,
  cloudShadowColor: 0x452a7f,
  sunColor: 0xdead11,
  sunGlareColor: 0x3db18e,
  sunlightColor: 0x93581d,
  speed: 1.0
});

const defaultTheme: DefaultTheme = {
  colors,
  fonts,
  sizes,
  wallpaper
};

export default defaultTheme;
