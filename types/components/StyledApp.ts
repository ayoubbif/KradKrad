import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

export type StyledAppProps = {
  children: ReactNode;
  currentTheme: DefaultTheme;
};
