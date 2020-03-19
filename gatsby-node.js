const path = require('path')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const postTemplate = path.resolve('src/templates/blog-post.js');
	const projectTemplate = path.resolve('src/templates/project-page.js');

	// Individual blogs pages
	const posts = graphql(`
		{
			posts: allMarkdownRemark(
				filter: { fileAbsolutePath: { glob: "**/src/pages/posts/*.md" } }
				sort: { order: ASC, fields: frontmatter___date }
			) {
				edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create blog pages
		result.data.posts.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: postTemplate,
			});
		});
	});

	// Individual docs pages
	const projects = graphql(`
		{
			projects: allMarkdownRemark(
				filter: {
					fileAbsolutePath: { glob: "**/src/pages/projects/*.md" }
				}
				sort: { order: ASC, fields: frontmatter___date }
			) {
				edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
			}
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create Project pages
		result.data.projects.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: projectTemplate,
			});
		});
	});

	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([posts, projects]);
};

