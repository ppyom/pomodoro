import { Button } from '@/components/ui';
import { TIMER_PRESETS, type TimerPresetKey } from '@/constants/timer-presets';

interface Props {
  selectedPreset: TimerPresetKey;
  onChangeDuration: (seconds: TimerPresetKey) => void;
}

export function TimerPresets({ selectedPreset, onChangeDuration }: Props) {
  return (
    <div className="mt-6 flex justify-center gap-3">
      {Object.values(TIMER_PRESETS).map((p) => (
        <Button
          className={
            selectedPreset === p.id ? 'bg-accent-primary! text-white!' : ''
          }
          key={p.id}
          onClick={() => onChangeDuration(p.id)}
        >
          {p.label}
        </Button>
      ))}
    </div>
  );
}
