import React from "react";
import dynamic from "next/dynamic";
import { Process } from "../../types/contexts/process";

const Window = dynamic(import("./Window"));

const RenderProcess: React.FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );

export default RenderProcess;
