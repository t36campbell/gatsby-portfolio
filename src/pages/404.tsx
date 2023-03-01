import React from 'react';
import Layout from '@components/layout/layout';
import SEO from '@src/components/seo/seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export const Head = () => {
  const seo = { title: '404', description: 'Page Not Found', path: '/404' };
  return <SEO {...seo} />;
};

export default NotFoundPage;
