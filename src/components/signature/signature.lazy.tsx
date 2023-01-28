import React, { lazy, Suspense } from 'react';

const LazySignature = lazy(() => import('./Signature'));

const Signature = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazySignature {...props} />
  </Suspense>
);

export default Signature;
