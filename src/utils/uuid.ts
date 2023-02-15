import { v5 as uuidv5 } from 'uuid';

const NAMESPACE = '3c1424c4-f89c-4e12-96c5-3e46700daa17';

export const genereateUUID = (obj: object): string =>
  uuidv5(JSON.stringify(obj), NAMESPACE);
