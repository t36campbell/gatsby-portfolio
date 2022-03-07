import React from 'react';
import MainLayout from '../components/main-layout/index';
import SEO from '../components/seo/index';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <SEO title="404" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </MainLayout>
  );
};

export default NotFoundPage;
