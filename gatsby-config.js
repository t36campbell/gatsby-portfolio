module.exports = {
  siteMetadata: {
    title: 'T.S.C. Portfolio',
    description: 'The portfolio of Tyler Campbell; Full Stack Software Engineer. United States Air Force veteran with a B.Sc. in Information Technology specializing in Web Application Development.',
    author: 'Tyler Campbell',
    siteUrl: 'https://tylercampbell.space',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
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
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ff2400',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Atkinson Hyperlegible\:400,400i,700, 700i`
        ],
        display: 'swap'
      }
    }
  ],
}
