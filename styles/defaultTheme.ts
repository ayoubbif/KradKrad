import { DefaultTheme } from 'styled-components';
import vantaClouds from '../utils/vantaClouds';

const colors = {
  background: '#000',
  borderColor: '#00e64d',
  clockText: '#000',
  primary: '#000',
  startButton: '#000',
  taskbar: '#C3C3C3',
  window: '#C3C3C3',
  opaqueWhite: '#000'
};

const formats = {
  date: <Intl.DateTimeFormatOptions>{
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  },
  time: <Intl.DateTimeFormatOptions>{
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }
};

const sizes = {
  clock: {
    fontSize: '13px',
    width: '76px'
  },
  startButton: {
    iconSize: '21px',
    width: '36px'
  },
  taskbar: {
    blur: '7px',
    height: '30px',
    entry: {
      borderSize: '3px',
      fontSize: '12px',
      maxWidth: '161px'
    }
  }
};

const wallpaper = vantaClouds({
  skyColor: 0x387977,
  cloudColor: 0x324253,
  cloudShadowColor: 0x404136,
  sunColor: 0xcc3256,
  sunGlareColor: 0xcaa443,
  sunlightColor: 0x26d99f,
  speed: 1.0
});

const defaultTheme: DefaultTheme = {
  colors,
  formats,
  sizes,
  wallpaper
};

export default defaultTheme;
