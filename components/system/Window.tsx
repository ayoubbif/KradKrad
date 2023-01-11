import type { FC, ReactNode } from "react";
import StyledWindow from "../../styles/components/StyledWindow";

interface WindowProps {
  children: ReactNode;
}

const Window: FC<WindowProps> = ({ children }) => (
  <StyledWindow>{children}</StyledWindow>
);

export default Window;
