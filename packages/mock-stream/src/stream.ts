export type StopStream = () => void;

export function createIntervalStream(
  callback: () => void,
  intervalMs = 1000
): StopStream {
  const timer = globalThis.setInterval(callback, intervalMs);

  return () => {
    globalThis.clearInterval(timer);
  };
}
