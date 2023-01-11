import vantaClouds from '../utils/vantaClouds';

const colors = {
  background: '#000',
  primary: '#000',
  window: '#CCCCCC'
};

const sizes = {
  clock: {
    width: '100px'
  },
  startButton: {
    width: '50px'
  },
  taskbar: {
    height: '40px',
    entry: {
      width: '80px'
    }
  }
};

const wallpaper = vantaClouds({
  skyColor: 0x1d3f4d,
  cloudColor: 0x4a70a7,
  cloudShadowColor: 0x452a7f,
  sunColor: 0xdead11,
  sunGlareColor: 0x3db18e,
  sunlightColor: 0x93581d
});

const defaultTheme = {
  colors,
  sizes,
  wallpaper
};

export default defaultTheme;
