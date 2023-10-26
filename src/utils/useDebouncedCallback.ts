import { useCallback, useRef } from 'react';

export const useDebouncedCallback = (callback: (...args: any[]) => void, delay: number) => {
  const lastCallRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: any[]) => {
      if (lastCallRef.current) {
        clearTimeout(lastCallRef.current);
      }

      lastCallRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
