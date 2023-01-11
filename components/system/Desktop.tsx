import { FC, ReactNode, useRef } from "react";
import useWallpaper from "../../hooks/useWallpaper";
import StyledDesktop from "../../styles/components/system/StyledDesktop";

interface DesktopProps {
  children: ReactNode;
}

const Desktop: FC<DesktopProps> = ({ children }) => {
  const desktopRef = useRef<HTMLElement>(null);

  useWallpaper(desktopRef);

  return <StyledDesktop ref={desktopRef}>{children}</StyledDesktop>;
};

export default Desktop;
