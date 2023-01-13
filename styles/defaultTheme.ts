import { DefaultTheme } from 'styled-components';
import vantaClouds from 'utils/vantaClouds';

const colors = {
  background: '#000',
  highlight: '#000666',
  clockText: '#000',
  primary: '#000',
  startButton: '#000',
  taskbar: 'hsla(174, 16%, 55%, 0.69)',
  taskbarHover: 'hsla(0, 37%, 67%, 1)',
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
    fontSize: '14px',
    width: '150px'
  },
  startButton: {
    iconSize: '27px',
    width: '45px'
  },
  taskbar: {
    blur: '7px',
    height: '50px',
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
