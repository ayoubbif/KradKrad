import { DefaultTheme } from 'styled-components';
import defaultTheme from './defaultTheme';

type Themes = {
  [name: string]: DefaultTheme;
};

const themes: Themes = { defaultTheme };

export default themes;
