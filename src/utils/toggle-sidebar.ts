import event from '@utils/event';

const toggleSidebarState = (state: boolean) => {
  event.trigger<{ state: boolean }>(document, 'sidebar', { state });
};

export default toggleSidebarState;
