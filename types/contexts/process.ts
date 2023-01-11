import React from "react";

export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean; //Gotta fix it later
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};

