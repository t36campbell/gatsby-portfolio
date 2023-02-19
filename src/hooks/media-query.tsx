'use client';
import { useState, useEffect } from 'react';
import events from '@utils/events';
import isSSR from '@utils/ssr';

const useMediaQuery = (query: string): boolean => {
  const initialState = isSSR
    ? true
    : JSON.parse(localStorage.getItem('mediaState') ?? 'false');
  const saveState = (state: boolean) => {
    if (!isSSR) localStorage.setItem('mediaState', `${state}`);
    setMatches(state);
  };
  const [matches, setMatches] = useState(initialState);

  useEffect(() => {
    const handleChanges = (match: boolean) =>
      match !== matches ? saveState(match) : null;

    const media = !isSSR ? window.matchMedia(query)?.matches : false;
    handleChanges(media);

    const listener = () => handleChanges(media);
    if (!isSSR) events.subscribe(window, 'resize', listener);
    return () => {
      if (!isSSR) events.unsubscribe(window, 'resize', listener);
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
