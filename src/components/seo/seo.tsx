import React, { FC } from 'react';
import useSiteMetadata from '@hooks/use-site-metadata';

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  children?: any;
}

const SEO: FC<SeoProps> = ({ title, description, image, path, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image || defaultImage}`,
    url: `${siteUrl}/${path || ''}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:creator' content={seo.twitterUsername} />
      <meta name='og:title' content={seo.title} />
      <meta name='og:url' content={seo.url} />
      <meta name='og:description' content={seo.description} />
      <meta name='og:image' content={seo.image} />
      <link rel='icon' href='src/images/gatsby-icon.png' />
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Tyler Campbell',
          ...seo,
        })}
      </script>
      {children}
    </>
  );
};

export default SEO;
