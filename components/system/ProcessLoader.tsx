import dynamic from "next/dynamic";
import type { FC } from "react";
import { ProcessConsumer } from "../../contexts/process";
import { Process } from "../../types/contexts/process";

const Window = dynamic(import("./Window"));

const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, process]) => (
        <RenderProcess key={id} {...process} />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;
