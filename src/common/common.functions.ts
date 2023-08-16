export const addslashes = (str: string): string =>
  // eslint-disable-next-line no-control-regex
  (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
