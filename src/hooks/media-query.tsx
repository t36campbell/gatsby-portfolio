import { useState, useEffect } from 'react';
import event from '@utils/event';
import isSSR from '@utils/ssr';

const useMediaQuery = (query: string): boolean => {
  const initialState = isSSR
    ? false
    : JSON.parse(sessionStorage.getItem('mediaState') ?? 'false');
  const saveState = (state: boolean) => {
    if (!isSSR) sessionStorage.setItem('mediaState', `${state}`);
    setMatched(state);
  };
  const [matched, setMatched] = useState(initialState);

  useEffect(() => {
    const handleChanges = (match: boolean) => saveState(match);

    const media = !isSSR ? window.matchMedia(query)?.matches : false;
    handleChanges(media);

    const listener = () => handleChanges(media);
    if (!isSSR) event.subscribe(window, 'resize', listener);

    return () => {
      if (!isSSR) event.unsubscribe(window, 'resize', listener);
    };
  }, [matched, query]);

  return matched;
};

export default useMediaQuery;
