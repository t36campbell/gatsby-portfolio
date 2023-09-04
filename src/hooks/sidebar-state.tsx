import { useState, useEffect } from 'react';
import event from '@utils/event';
import isSSR from '@utils/ssr';

const useSidebarState = (): boolean => {
  const initialState = isSSR
    ? false
    : JSON.parse(localStorage.getItem('sidebarState') ?? 'false');
  const saveState = (state: boolean) => {
    if (!isSSR) localStorage.setItem('sidebarState', `${state}`);
    toggleSidebar(state);
  };
  const [showSidebar, toggleSidebar] = useState(initialState);

  useEffect(() => {
    const handleChanges = (state: boolean) => saveState(state);

    const listener = () => handleChanges(!showSidebar);
    if (!isSSR) event.subscribe(document, 'sidebar', listener);
    return () => {
      if (!isSSR) event.unsubscribe(document, 'sidebar', listener);
    };
  }, [showSidebar]);

  return showSidebar;
};

export default useSidebarState;
