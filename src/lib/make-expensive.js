export const block = (duration = 500) => {
  const start = performance.now();
  while (performance.now() < start + duration) {}
};

export const makeExpensive = (fn, duration = 0) => {
  return (...args) => {
    block(duration);
    fn(...args);
  };
};
