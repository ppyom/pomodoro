export const TIMER_PRESETS = {
  test: { id: 'test', label: '10s', value: 10 },
  short: { id: 'short', label: '15m', value: 15 * 60 },
  medium: { id: 'medium', label: '25m', value: 25 * 60 },
  long: { id: 'long', label: '50m', value: 50 * 60 },
} as const;

export type TimerPresetKey = keyof typeof TIMER_PRESETS;
