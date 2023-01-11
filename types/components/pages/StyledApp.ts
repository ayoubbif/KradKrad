import React from "react";
import type { DefaultTheme } from "styled-components";

export type Theme = {
  colors: {
    primary: string;
  };
};

export type StyledAppProps = {
  theme?: DefaultTheme;
  children: React.ReactNode;
};
