import { useTimer } from '@/hooks/use-timer';

export default function App() {
  const { timeLeft, isRunning, start, pause, reset, changeDuration } =
    useTimer();

  const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const s = String(timeLeft % 60).padStart(2, '0');

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-primary px-6 font-sans">
      <section className="w-full max-w-md rounded-[24px] border border-border-soft bg-surface-elevated p-10">
        <p className="text-center text-sm text-text-muted">Focus Timer</p>

        <h1 className="mt-8 text-center text-8xl font-semibold tracking-tight text-text-primary">
          {m}:{s}
        </h1>

        <button
          className="mt-10 w-full rounded-2xl bg-accent-primary py-4 text-sm font-medium text-white transition-all"
          onClick={isRunning ? pause : start}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => changeDuration(15 * 60)}>15m</button>
          <button onClick={() => changeDuration(25 * 60)}>25m</button>
          <button onClick={() => changeDuration(50 * 60)}>50m</button>
        </div>

        <button onClick={reset} className="mt-4 w-full">
          Reset
        </button>
      </section>
    </main>
  );
}
