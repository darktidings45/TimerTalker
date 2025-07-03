import { useState, useEffect, useRef, useCallback } from "react";

export type IntervalRate = "10seconds" | "30seconds" | "minute";

export interface LapTime {
  id: number;
  time: number;
  formattedTime: string;
}

export interface StopwatchState {
  isRunning: boolean;
  elapsedTime: number;
  startTime: number | null;
  intervalRate: IntervalRate;
  lapTimes: LapTime[];
}

export function useStopwatch() {
  const [state, setState] = useState<StopwatchState>({
    isRunning: false,
    elapsedTime: 0,
    startTime: null,
    intervalRate: "10seconds",
    lapTimes: []
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastAnnouncementRef = useRef<number>(0);

  const formatTime = useCallback((milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const getAnnouncementInterval = useCallback((rate: IntervalRate): number => {
    switch (rate) {
      case "10seconds":
        return 10000;
      case "30seconds":
        return 30000;
      case "minute":
        return 60000;
      default:
        return 10000;
    }
  }, []);

  const shouldAnnounce = useCallback((currentTime: number, rate: IntervalRate): boolean => {
    const interval = getAnnouncementInterval(rate);
    const timeSinceLastAnnouncement = currentTime - lastAnnouncementRef.current;
    
    if (timeSinceLastAnnouncement >= interval) {
      lastAnnouncementRef.current = currentTime;
      return true;
    }
    return false;
  }, [getAnnouncementInterval]);

  const start = useCallback(() => {
    if (state.isRunning) return;

    const startTime = Date.now() - state.elapsedTime;
    setState(prev => ({
      ...prev,
      isRunning: true,
      startTime
    }));

    intervalRef.current = setInterval(() => {
      setState(prev => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - (prev.startTime || currentTime);
        
        return {
          ...prev,
          elapsedTime
        };
      });
    }, 10); // Update every 10ms for smooth display
  }, [state.isRunning, state.elapsedTime]);

  const stop = useCallback(() => {
    if (!state.isRunning) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setState(prev => ({
      ...prev,
      isRunning: false,
      startTime: null
    }));
  }, [state.isRunning]);

  const reset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setState(prev => ({
      ...prev,
      isRunning: false,
      elapsedTime: 0,
      startTime: null,
      lapTimes: []
    }));

    lastAnnouncementRef.current = 0;
  }, []);

  const addLap = useCallback(() => {
    if (!state.isRunning && state.elapsedTime === 0) return;

    const lapTime: LapTime = {
      id: Date.now(),
      time: state.elapsedTime,
      formattedTime: formatTime(state.elapsedTime)
    };

    setState(prev => ({
      ...prev,
      lapTimes: [...prev.lapTimes, lapTime]
    }));
  }, [state.isRunning, state.elapsedTime, formatTime]);

  const setIntervalRate = useCallback((rate: IntervalRate) => {
    setState(prev => ({
      ...prev,
      intervalRate: rate
    }));
    lastAnnouncementRef.current = 0; // Reset announcement timing
  }, []);

  const toggle = useCallback(() => {
    if (state.isRunning) {
      stop();
    } else {
      start();
    }
  }, [state.isRunning, start, stop]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    ...state,
    formattedTime: formatTime(state.elapsedTime),
    start,
    stop,
    reset,
    toggle,
    addLap,
    setIntervalRate,
    shouldAnnounce,
    getAnnouncementInterval
  };
}
