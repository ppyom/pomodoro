interface Props {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export function TimerControls({ isRunning, onStart, onPause, onReset }: Props) {
  return (
    <>
      <button
        className="mt-10 w-full rounded-2xl bg-accent-primary py-4 text-sm font-medium text-white transition-all"
        onClick={isRunning ? onPause : onStart}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={onReset} className="mt-4 w-full">
        Reset
      </button>
    </>
  );
}
