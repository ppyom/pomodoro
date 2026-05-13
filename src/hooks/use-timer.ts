import { useEffect, useState } from 'react';

const DEFAULT_DURATION = 10; // 25 * 60; // 25m

export function useTimer(initialDuration = DEFAULT_DURATION) {
  const [duration, setDuration] = useState(initialDuration);
  const [timeLeft, setTimeLeft] = useState(initialDuration);
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
  const changeDuration = (next: number) => {
    setDuration(next);
    setTimeLeft(next);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((p) => {
        if (p <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return p - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return {
    timeLeft,
    isRunning,
    start,
    pause,
    reset,
    changeDuration,
  };
}
