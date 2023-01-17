const colors = {
  background: '#000',
  highlight: '#111666',
  fileEntry: {
    background: 'hsla(69, 13%, 96%, 0.30)',
    border: '2px solid hsla(100, 90%, 50%, 0.5)',
    text: '#000',
    textShadow: `
      0 0 1px rgba(00, 88, 77, 0.1),
      0 0 2px rgba(50, 55, 44, 0.25),
      0 0 3px rgba(13, 22, 11, 0.3),
      0 0 4px rgba(13, 22, 11, 0.7),
      0 0 5px rgba(00, 11, 22, 0.8)
    `
  },
  startButton: '#000',
  taskbar: {
    background: 'hsla(212, 96%, 32%, 0.5)',
    hover: 'hsla(360, 69%, 69%, 0.8)'
  },
  text: '#000',
  titlebar: {
    background: '#eee',
    text: '#000'
  },
  window: {
    background: '#5ed3df',
    outline: '2px solid',
    shadow: '0 0 33px 0 rgba(0, 0, 0, 0.7)'
  }
};

export default colors;
