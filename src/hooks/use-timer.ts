import { useEffect, useMemo, useState } from 'react';

import { TIMER_PRESETS, type TimerPresetKey } from '@/constants/timer-presets';
import { playAlarm } from '@/utils/play-alarm';

export function useTimer(initialPreset: TimerPresetKey = 'test') {
  const [selectedPreset, setSelectedPreset] =
    useState<TimerPresetKey>(initialPreset);
  const duration = useMemo<number>(
    () => TIMER_PRESETS[selectedPreset].value,
    [selectedPreset],
  );
  const [timeLeft, setTimeLeft] = useState(TIMER_PRESETS[selectedPreset].value);
  const [isRunning, setIsRunning] = useState(false);

  // 타이머 시작
  const start = () => setIsRunning(true);
  // 타이머 정지
  const pause = () => setIsRunning(false);
  // 타이머 초기화 (duration으로 복구)
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
  };
  // preset 변경
  const changeDuration = (key: TimerPresetKey) => {
    setSelectedPreset(key);
    setTimeLeft(TIMER_PRESETS[key].value);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((p) => {
        if (p <= 1) {
          setIsRunning(false);
          playAlarm();
          return 0;
        }
        return p - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  return {
    selectedPreset,
    duration,
    timeLeft,
    isRunning,
    start,
    pause,
    reset,
    changeDuration,
  };
}
