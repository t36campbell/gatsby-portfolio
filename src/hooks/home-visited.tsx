import { useState, useEffect } from 'react';
import isSSR from '@utils/ssr';

const useHomeVisited = (): boolean => {
  const initialState = isSSR
    ? false
    : JSON.parse(sessionStorage.getItem('homeVisited') ?? 'false');
  const saveState = (state: boolean) => {
    if (!isSSR) sessionStorage.setItem('homeVisited', `${state}`);
    setVisited(state);
  };
  const [visited, setVisited] = useState(initialState);

  useEffect(() => {
    setTimeout(() => {
      saveState(true);
    }, 5000);
  }, []);

  return visited;
};

export default useHomeVisited;
