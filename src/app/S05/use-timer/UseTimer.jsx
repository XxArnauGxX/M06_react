"use client";

import { useState, useRef, useEffect } from "react";

export default function useTimer(initialTime = 10, isIncrement = false) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => (isIncrement ? prev + 1 : prev - 1));
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, isIncrement]);

  useEffect(() => {
    if (!isIncrement && time <= 0) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  }, [time, isIncrement]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  return { time, isRunning, start, pause, reset };
}
