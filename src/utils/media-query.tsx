import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleChanges = (media: MediaQueryList) =>
      media.matches !== matches ? setMatches(media.matches) : null;

    const media = window.matchMedia(query);
    handleChanges(media);

    const listener = () => handleChanges(media);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
