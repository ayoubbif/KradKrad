import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface StyledAppProps {
  children: ReactNode;
  currentTheme: DefaultTheme
}
