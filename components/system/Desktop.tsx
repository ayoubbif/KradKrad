import type { FC, ReactNode } from "react";
import StyledDesktop from "../../styles/components/system/StyledDesktop";


interface DesktopProps {
  children: ReactNode;
}

const Desktop: FC<DesktopProps> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
