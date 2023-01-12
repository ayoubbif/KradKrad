import defaultTheme from './defaultTheme';
import { DefaultTheme } from 'styled-components';

type Themes = {
  [key: string]: DefaultTheme;
};

const themes: Themes = { defaultTheme };

export default themes;
