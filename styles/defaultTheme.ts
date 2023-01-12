import { DefaultTheme } from 'styled-components';
import vantaClouds from '../utils/vantaClouds';

const colors = {
  background: '#000',
  clockText: '#FFF',
  primary: '#000',
  startButton: '#FFF',
  taskbar: 'rgba(0, 0, 0, 60%)',
  window: '#CCCCCC'
};

const sizes = {
  clock: {
    fontSize: '12px',
    width: '76px'
  },
  startButton: {
    iconSize: '22px',
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
  sizes,
  wallpaper
};

export default defaultTheme;
