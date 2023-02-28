import React from 'react';
import Layout from '@components/layout/layout';

const NotFoundPage = (): JSX.Element => {
  return (
    <Layout title='404' description={'Page Not Found'} path={'/404'}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
