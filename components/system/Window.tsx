import type { FC, ReactNode } from "react";
import StyledWindow from "../../styles/components/StyledWindow";

interface Props {
  children: ReactNode;
}

const Window: FC<Props> = ({ children }) => (
  <StyledWindow>{children}</StyledWindow>
);

export default Window;
