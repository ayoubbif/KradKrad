import type { ReactElement } from "react";
import { ProcessProvider } from "../contexts/process";
import ProcessLoader from "../components/system/ProcessLoader";
import { getStartupProcesses } from "../utils/processDirectory";
import Desktop from "../components/system/Desktop";

export default function Home(): ReactElement {
  return (
    <ProcessProvider startupProcesses={getStartupProcesses()}>
      <Desktop>
        <ProcessLoader />
      </Desktop>
    </ProcessProvider>
  );
}
