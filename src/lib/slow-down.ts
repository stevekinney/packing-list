export const sleep = (delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, delay);
  });
};

export const block = (duration = 500) => {
  const start = performance.now();
  while (performance.now() < start + duration) {}
};

export const makeExpensive = <F extends (...args: any) => any>(
  fn: F,
  duration = 0,
) => {
  return (...args: Parameters<F>): ReturnType<F> => {
    block(duration);
    return fn(...args);
  };
};
