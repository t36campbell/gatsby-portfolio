module.exports = {
  siteMetadata: {
    title: 'T.S.C. Portfolio',
    description:
      'Tyler Campbell Full Stack Software Developer, United States Air Force veteran working on a M.Sc in Computer Science.',
    author: 'Tyler Campbell',
    siteUrl: 'https://tylercampbell.space',
    twitterUsername: 'Tyler Campbell',
    image: '',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-158530632-1',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://tylercampbell.space',
        sitemap: 'https://tylercampbell.space/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'T.S.C. Portfolio',
        short_name: 'TSC',
        description:
          'Tyler Campbell Full Stack Software Developer, United States Air Force veteran working on a M.Sc in Computer Science.',
        start_url: '/',
        background_color: '#14151b',
        theme_color: '#14151b',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Atkinson Hyperlegible:400,400i,700, 700i'],
        display: 'swap',
      },
    },
  ],
  jsxRuntime: 'automatic',
};
