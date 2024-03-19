export const compose = <T>(func: (a: T) => T, ...funcs: Array<(a: T) => T>) =>
  funcs.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), func)
