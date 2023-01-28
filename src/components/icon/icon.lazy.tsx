import React, { lazy, Suspense } from 'react';

const LazyIcon = lazy(() => import('./Icon'));

const Icon = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyIcon {...props} />
  </Suspense>
);

export default Icon;
