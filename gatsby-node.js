const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2');

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const page = path.resolve(`./src/templates/page.js`)
//   return graphql(
//     `
//       {
//         allMdx(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create  posts pages.
//     const pages = result.data.allMdx.edges

//     pages.forEach((item, index) => {
//       createPage({
//         path: `${item.node.fields.slug}`,
//         component: page,
//         context: {
//           slug: item.node.fields.slug,
//         },
//       })
//     })

//     return null
//   })
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node)

  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


