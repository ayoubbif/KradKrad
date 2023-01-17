import Clock from 'components/system/Taskbar/Clock';
import StartButton from './StartButton';
import StyledTaskbar from './StyledTaskbar';
import TaskbarEntries from './TaskbarEntries';

const Taskbar = (): JSX.Element => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
