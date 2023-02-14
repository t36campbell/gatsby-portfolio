import { isSSR } from '@/utils/ssr';
import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
  const initialState = isSSR
    ? null
    : JSON.parse(localStorage.getItem('mediaState') ?? 'false');
  const saveState = (state: boolean) => {
    if (!isSSR) localStorage.setItem('mediaState', `${state}`);
    setMatches(state);
  };
  const [matches, setMatches] = useState(initialState);

  useEffect(() => {
    const handleChanges = (media: MediaQueryList) =>
      media.matches !== matches ? saveState(media.matches) : null;

    const media = window.matchMedia(query);
    handleChanges(media);

    const listener = () => handleChanges(media);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
