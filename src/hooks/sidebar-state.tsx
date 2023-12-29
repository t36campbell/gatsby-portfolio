import { useState, useEffect } from 'react';
import event from '@utils/event';
import isSSR from '@utils/ssr';

const useSidebarState = (): boolean => {
  const initialState = isSSR
    ? false
    : JSON.parse(sessionStorage.getItem('sidebarState') ?? 'false');

  const saveState = (state: boolean) => {
    if (!isSSR) sessionStorage.setItem('sidebarState', `${state}`);
    toggleSidebar(state);
  };
  const [showSidebar, toggleSidebar] = useState(initialState);

  if (initialState !== showSidebar) saveState(initialState);

  useEffect(() => {
    const handleChanges = (state: boolean) => saveState(state);

    if (!isSSR) saveState(initialState);
    const listener = () => handleChanges(!showSidebar);
    if (!isSSR) event.subscribe(document, 'sidebar', listener);

    return () => {
      if (!isSSR) event.unsubscribe(document, 'sidebar', listener);
    };
  }, [initialState, showSidebar]);

  return showSidebar;
};

export default useSidebarState;
