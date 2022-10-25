const sleep = (delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, delay);
  });
};

export default sleep;
