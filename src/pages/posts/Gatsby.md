---
path: "/gatsby"
category: "blog"
featured: "true"
published: "2020-04-14"
title: "Gatsby"
author: "Tyler Campbell"
---
### Intro
Get started with Gatsby in no time flat.

### Prerequisites 
Things you should know before you begin:
1. The Basics (HTML, CSS, JS)
2. Comfortable in the command line
3. Have Node.js installed on your machine
4. Understand how to use npm

### Summary
Cut to the chase with these commands:
```
 npm install -g gatsby-cli
 gatsby new hello-world && cd hello-world
 gatsby develop
```

## Lets Get Started 
### Setting Up Your Environment
We’ll start by checking that node and npm are installed. In the terminal run:
```
npm --version && node --version
```

Now let’s install the gatsby-cli: 
```
npm install -g gatsby-cli
```

Installing this package globally with the  `-g` flag allows this package to be called in the command-line. Which can be very useful when developing a Gatsby website. 

### Creating a New Project
In the terminal run:
```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-default && cd hello-world
```

Now let’s breakdown what this did. `gatsby new` is the command that creates a new project,  `hello-world` is the title of the directory., and the url that follows is a link to the project we want to use as a template. This sequence is essentially cloning a project from GitHub and adding the Gatsby secret sauce. The command follows this structure:
```
gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
```

> /Note: If you omit a URL from the end, Gatsby will automatically generate a site for you based on the  [default starter](https://github.com/gatsbyjs/gatsby-starter-default) /  

### Running & Building
Gatsby provides a development server to facilitate hot-reloading, which updates changes to the website when a file is saved. You can start this by running: 
```
gatsby develop	
```

This will start the development server and host the website at `http://localhost:8000/` 

> Note: add  `-H 0.0.0.0` to access your dev environment on other devices on the same network  

Congrats! You just built your very first Gatsby site! 🎉

Our work for today is almost done, lets prepare the project for deployment. To do this we can run: 
```
gatsby build && gatsby serve	
```

This performs starts a development server just like `gatsby develop` but this will use the output of the production bundle as the source. This production bundle is optimized for performance, it will remove all comments, minify the files and much more.

### Extra Credit 
Get an idea of how the community is using Gatsby by installing one of the [starters](https://www.gatsbyjs.org/starters/?v=2) or by taking a look through the [showcase](https://www.gatsbyjs.org/showcase/) gallery. 
