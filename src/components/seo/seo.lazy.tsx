import React, { lazy, Suspense } from 'react';

const LazySeo = lazy(() => import('./Seo'));

const Seo = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazySeo {...props} />
  </Suspense>
);

export default Seo;
