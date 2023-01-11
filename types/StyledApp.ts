import React from "react";

export type Theme = {
  colors: {
    primary: string;
  };
};

export type StyledAppProps = {
  theme?: Theme;
  children: React.ReactNode;
};
