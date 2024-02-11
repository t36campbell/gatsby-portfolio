/* eslint-disable n/no-path-concat */
const title = 'T.S.C. Portfolio';
const siteUrl = 'https://tylercampbell.space';
const description =
  'Tyler Campbell, full stack software engineer & aspiring baker, United States Air Force veteran striving toward an M.Sc. in Computer Science.';
module.exports = {
  flags: {},
  siteMetadata: {
    title,
    siteUrl,
    description,
    author: 'Tyler Campbell',
    image: '',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-remark-classes',
    'gatsby-adapter-netlify',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Atkinson Hyperlegible:400,400i,700,700i'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        description,
        name: 'T.S.C. Portfolio',
        short_name: 'TSC',
        start_url: '/',
        background_color: '#14151b',
        theme_color: '#14151b',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
          quality: 81,
          breakpoints: [640, 768, 1024, 1280, 1536],
          backgroundColor: 'transparent',
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                'heading[depth=1]': 'text-xl font-bold',
                'heading[depth=2]': 'text-lg font-medium my-3 ml-3',
                'heading[depth=3]': 'text-lg my-3 ml-3',
                'list[ordered=false]': 'list-disc list-inside my-3 -ml-2',
                paragraph: 'text-base mt-3',
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          };
        },
      },
    },
  ],
  jsxRuntime: 'automatic',
  graphqlTypegen: true,
};
