import type { ReactElement } from "react";
import { ProcessProvider } from "../contexts/process";
import ProcessLoader from "../components/system/ProcessLoader";
import { getStartupProcesses } from "../utils/processDirectory";

export default function Home(): ReactElement {
  return (
    <ProcessProvider startupProcesses={getStartupProcesses()}>
      <ProcessLoader />
    </ProcessProvider>
  );
}
