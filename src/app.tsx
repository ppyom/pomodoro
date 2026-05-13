export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface-primary px-6 font-sans">
      <section className="w-full max-w-md rounded-[24px] border border-border-soft bg-surface-elevated p-10">
        <p className="text-center text-sm text-text-muted">Focus Timer</p>

        <h1 className="mt-8 text-center text-8xl font-semibold tracking-tight text-text-primary">
          25:00
        </h1>

        <button className="mt-10 w-full rounded-2xl bg-accent-primary py-4 text-sm font-medium text-white transition-all">
          Start Focus Session
        </button>

        <div className="mt-6 flex justify-center gap-3">
          <button>15m</button>
          <button>25m</button>
          <button>50m</button>
        </div>
      </section>
    </main>
  );
}
