import { Button } from '@/components/ui';

interface Props {
  onChangeDuration: (seconds: number) => void;
}

const PRESETS = [
  { time: 10, label: '10s' },
  { time: 15 * 60, label: '15m' },
  { time: 25 * 60, label: '25m' },
  { time: 50 * 60, label: '50m' },
];

export function TimerPresets({ onChangeDuration }: Props) {
  return (
    <div className="mt-6 flex justify-center gap-3">
      {PRESETS.map((p) => (
        <Button key={p.time} onClick={() => onChangeDuration(p.time)}>
          {p.label}
        </Button>
      ))}
    </div>
  );
}
