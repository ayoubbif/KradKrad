const colors = {
  background: '#000',
  highlight: '#111666',
  fileEntry: {
    background: 'hsla(69, 13%, 96%, 0.36)',
    border: '2px solid hsla(100, 100%, 50%, 0.5)',
    text: '#000',
    textShadow: `
      0 0 1px rgba(00, 88, 77, 0.1),
      0 0 2px rgba(55, 55, 44, 0.3),
      0 0 4px rgba(33, 11, 11, 0.5),
      0 0 5px rgba(66, 33, 22, 0.7)
    `
  },
  startButton: '#000',
  taskbar: {
    active: 'hsla(0, 0%, 40%, 70%)',
    activeHover: 'hsla(0, 0%, 50%, 70%)',
    background: 'hsla(156, 44%, 64%, 0.6)',
    hover: 'hsla(6, 93%, 71%, 0.8)'
  },
  text: '#000',
  titlebar: {
    background: '#efe',
    text: 'rgb(16, 176, 18)',
    textInactive: 'rgb(300, 96, 18)',
    backgroundInactive: 'rgb(90, 93, 86)',
    buttonInactive: 'rgb(128, 128, 128)'
  },
  window: {
    background: '#fadcca',
    outline: 'hsl(0deg 0% 25% / 75%)',
    outlineInactive: 'hsl(0deg 0% 30% / 75%)',
    shadow: '0 0 12px 0 rgba(0, 0, 0, 50%)',
    shadowInactive: '0 0 8px 0 rgba(0, 0, 0, 50%)'
  }
};

export default colors;

