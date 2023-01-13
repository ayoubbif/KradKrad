import useWallpaper from 'hooks/useWallpaper';
import { useRef } from 'react';
import StyledDesktop from 'styles/components/system/StyledDesktop';
interface DesktopProps {
  children: React.ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  const desktopRef = useRef<HTMLElement | null>(null);

  useWallpaper(desktopRef);

  return <StyledDesktop ref={desktopRef}>{children}</StyledDesktop>;
};

export default Desktop;
