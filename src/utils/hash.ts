export const hashCode = (obj: object) =>
  JSON.stringify(obj)
    .split('')
    .reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0);
