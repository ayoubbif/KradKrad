import type { FC } from "react";
import { ProcessConsumer } from "../../contexts/process";

const WindowManager: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} />
      ))
    }
  </ProcessConsumer>
);

export default WindowManager;

