const subscribe = (
  target: Document | Window,
  eventName: string,
  listener: () => void,
) => {
  target.addEventListener(eventName, listener);
};

const unsubscribe = (
  target: Document | Window,
  eventName: string,
  listener: () => void,
) => {
  target.removeEventListener(eventName, listener);
};

const trigger = <T = { [key: string]: string }>(
  target: Document | Window,
  eventName: string,
  data?: T,
): void => {
  const event = data
    ? new CustomEvent<T>(eventName, { detail: data })
    : new Event(eventName);

  target.dispatchEvent(event);
};

const event = {
  subscribe,
  unsubscribe,
  trigger,
};

export default event;
