module.exports = {
  siteMetadata: {
    title: `Miranda Schreiber`,
    author: `Liz Faria`,
    description: `Miranda Schreiber`,
    siteUrl: `https://mirandaschreiber.ca/`,
    social: {
      twitter: `miranda_joli`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `netlify-images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `src/markdown-pages`,
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-responsive-iframe`],
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Miranda Schreiber`,
    //     short_name: `Miranda Schreiber`,
    //     start_url: `/`,
    //     // background_color: `#ED1C24`,
    //     // theme_color: `#ED1C24`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Nunito\:300,400,400i,700`,
    //       `open sans\:300,400,400i,600,700` // you can also specify font weights and styles
    //     ],
    //     display: 'swap'
    //   }
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

  //   `gatsby-plugin-styled-components`,
  //   `gatsby-transformer-sharp`,
  //   `gatsby-plugin-sharp`,
  //   `gatsby-plugin-offline`,
  //   `gatsby-plugin-react-helmet`,
  //   `gatsby-plugin-feed-mdx`,
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       path: `${__dirname}/content/blog`,
  //       name: `blog`,
  //     },
  //   },
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       path: `${__dirname}/content/`,
  //       name: `page`,
  //     },
  //   },
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       path: `${__dirname}/content/assets`,
  //       name: `assets`,
  //     },
  //   },
  //   {
  //     resolve: `gatsby-plugin-mdx`,
  //     options: {
  //       extensions: [".mdx", ".md"],
  //       gatsbyRemarkPlugins: [
  //         {
  //           resolve: `gatsby-remark-images`,
  //           options: {
  //             maxWidth: 590,
  //           },
  //         },
  //         {
  //           resolve: `gatsby-remark-responsive-iframe`,
  //           options: {
  //             wrapperStyle: `margin-bottom: 1.0725rem`,
  //           },
  //         },
  //         {
  //           resolve: `gatsby-remark-vscode`,
  //         },
  //         {
  //           resolve: `gatsby-remark-copy-linked-files`,
  //         },
  //         {
  //           resolve: `gatsby-remark-smartypants`,
  //         },
  //       ],
  //       plugins: [`gatsby-remark-images`],
  //     },
  //   },
  //   {
  //     resolve: `gatsby-plugin-google-analytics`,
  //     options: {
  //       // edit below
  //       // trackingId: `ADD YOUR TRACKING ID HERE`,
  //     },
  //   },
  //   {
  //     resolve: `gatsby-plugin-manifest`,
  //     options: {
  //       name: `Gatsby Starter Blog`,
  //       short_name: `GatsbyJS`,
  //       start_url: `/`,
  //       background_color: `#ffffff`,
  //       theme_color: `#663399`,
  //       display: `minimal-ui`,
  //       // edit below
  //       icon: `content/assets/gatsby-icon.png`,
  //     },
  //   },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  //   {
  //     resolve: `gatsby-plugin-netlify-cms`,
  //     options: {
  //       enableIdentityWidget: true,
  //     }
  //   }
  ],
}
