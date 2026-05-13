export function CircularProgress({ progress }: { progress: number }) {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg viewBox="0 0 240 240" className="size-48 sm:size-64 -rotate-90 flex">
      <circle
        className="stroke-accent-soft"
        cx="120"
        cy="120"
        r={radius}
        strokeWidth="8"
        fill="none"
      />
      <circle
        className="stroke-accent-primary transition-all duration-300"
        cx="120"
        cy="120"
        r={radius}
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress)}
        strokeLinecap="round"
      />
    </svg>
  );
}
