import StyledClock from './StyledClock';
import useClock from './useClock';
import useLocaleDateTime from './useLocaleDateTime';

const Clock = (): JSX.Element => {
  const now = useClock();
  const { date, time, dateTime } = useLocaleDateTime(now);

  return (
    <StyledClock dateTime={dateTime} title={date} suppressHydrationWarning>
      {time}
    </StyledClock>
  );
};

export default Clock;
