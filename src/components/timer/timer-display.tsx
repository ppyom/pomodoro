import { formatTime } from '@/utils/format-time';

import { CircularProgress } from './circular-progress';

interface Props {
  duration: number;
  timeLeft: number;
}

export function TimerDisplay({ duration, timeLeft }: Props) {
  return (
    <div className="relative flex items-center justify-center">
      <CircularProgress progress={timeLeft / duration} />
      <div className="absolute inset-0 text-2xl sm:text-4xl font-semibold flex items-center justify-center text-text-primary">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}
