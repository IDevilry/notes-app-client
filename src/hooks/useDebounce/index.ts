

export function useDebounce<T>(
  callback: (...args: T[]) => void,
  delay: number
): Function {

  let timer: ReturnType<typeof setTimeout>;

  return function debouncedCallback(...args: T[]) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
