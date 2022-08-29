import { useEffect, useRef } from "react";

export function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {    
    clearTimeout(timer);
    timer = setTimeout(() => { 
      console.log("Debounced and sent req");
      func.apply(this, args); }, timeout);
      
  };
}

export function debounceLeading(func, timeout = 500) {
  let timer;
  return (...args) => {
    if (!timer) {
      console.log("Debounced and sent req");      
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

var timeoutId;

export function throttle(func, timeout = 500) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(func, timeout);
  
}


export function useDebounce(callback: () => void, delay: number) {
  const latestCallback = useRef<() => void>();
  const latestTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  return () => {
    if (latestTimeout.current) {
      clearTimeout(latestTimeout.current);
    }

    latestTimeout.current = setTimeout(() => {
      if (!latestCallback.current) return;
      latestCallback.current();
    }, delay);
  };
}