import React from 'react';
import SEO from '@/components/seo/seo';
import Layout from '@/components/layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout title='404'>
      <SEO title='404' />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
