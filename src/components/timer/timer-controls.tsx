import { Button } from '@/components/ui';

interface Props {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export function TimerControls({ isRunning, onStart, onPause, onReset }: Props) {
  return (
    <>
      <Button
        className="mt-8 w-full py-4"
        variant="primary"
        onClick={isRunning ? onPause : onStart}
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button className="mt-4 w-full" variant="outline" onClick={onReset}>
        Reset
      </Button>
    </>
  );
}
