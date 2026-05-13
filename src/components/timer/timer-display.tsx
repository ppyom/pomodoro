import { formatTime } from '@/utils/format-time';

interface Props {
  timeLeft: number
}

export function TimerDisplay({timeLeft}: Props) {
  return (
    <h1 className="mt-8 text-center text-8xl font-semibold tracking-tight text-text-primary">
      {formatTime(timeLeft)}
    </h1>
  );
}