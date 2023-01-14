import { DefaultTheme } from 'styled-components';
import vantaClouds from 'utils/vantaClouds';

const colors = {
  background: '#000',
  highlight: '#000666',
  startButton: '#000',
  taskbar: 'hsla(111, 30%, 69%, 0.6)',
  taskbarHover: 'hsla(0, 69%, 69%, 0.9)',
  window: '#C3C3C3',
  text: '#000'
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
    fontSize: '15px',
    width: '100px'
  },
  startButton: {
    iconSize: '27px',
    width: '45px'
  },
  taskbar: {
    blur: '7px',
    height: '50px',
    entry: {
      borderSize: '5px',
      fontSize: '13px',
      maxWidth: '161px'
    }
  }
};

const wallpaper = vantaClouds({
  skyColor: 0xfad977,
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
