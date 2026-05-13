import { useTimer } from '@/hooks/use-timer';
import { TimerControls, TimerDisplay, TimerPresets } from '@/components/timer';

export default function App() {
  const { duration, timeLeft, isRunning, start, pause, reset, changeDuration } =
    useTimer();

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-primary px-6 font-sans">
      <section className="w-full max-w-md rounded-[24px] border border-border-soft bg-surface-elevated p-10">
        <p className="text-center text-sm text-text-muted">Focus Timer</p>

        <TimerDisplay duration={duration} timeLeft={timeLeft} />
        <TimerControls
          isRunning={isRunning}
          onStart={start}
          onPause={pause}
          onReset={reset}
        />
        <TimerPresets onChangeDuration={changeDuration} />
      </section>
    </main>
  );
}
