import React, { lazy, Suspense } from 'react';

const LazyWaka = lazy(() => import('./Waka'));

const Waka = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyWaka {...props} />
  </Suspense>
);

export default Waka;
