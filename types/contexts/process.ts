import React from 'react';

export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type Processes = {
  [pid: string]: Process;
};

export type ProcessContextState = {
  close: (pid: string) => void;
  open: (pid: string) => void;
  mapProcesses: ProcessesMap;
};

export type ProcessesMap = (
  callback: ([pid, process]: [string, Process]) => JSX.Element
) => JSX.Element[];
