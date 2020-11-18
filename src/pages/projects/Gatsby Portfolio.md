---
path: /projects/gatsby-portfolio
category: project
published: "2020-03-03"
title: Gatsby Portfolio
author: Tyler Campbell
image: https://ik.imagekit.io/t36campbell/Portfolio/project-1_JjONt0XAN.png
link: /
repo: https://github.com/t36campbell/gatsby-portfolio
---

### Summary

* A portfolio crafted to exhibit a unique collection of personal projects.
• Assembled employing Gatsby, Ant Design, & Chart.js (CSS, GraphQL, HTML, JavaScript, JSX, & Markdown).

### Case Study

###### Challenge

I needed to create something captivating in order to hold the attention of a recruiter or a hiring manager long enough to show what I can do. It has been difficult to transition from a career in the military to software development. Until I prove my worth, this website and the projects it contains will continue to improve as I do.

###### Solution

Gatsby was the obvious choice for a small collection of articles detailing the inner workings of my projects. After several iterations, trying to make the website design unique, I decided to make it more simple by integrating Ant Design. Ant provides a very useful responsive sidebar, and the layout for the cards. These features were easy to integrate but the easy to use Emotion styled components made them a pleasure to write. 

Chart.js was my favorite part to integrate because it needs data in order to be useful and Gatsby is a static site generator.  I made it retrieve data from the Wakatime API at render using the UseEffect method. This allows the data that outlining how much time I spend programming and on which language to be display at run time. 

###### Dependencies 
```
gatsby-portfolio@2.0.0 
├── @emotion/core@10.1.0
├── @emotion/styled@10.0.27
├── @fortawesome/fontawesome-svg-core@1.2.32
├── @fortawesome/free-brands-svg-icons@5.15.1
├── @fortawesome/free-regular-svg-icons@5.15.1
├── @fortawesome/react-fontawesome@0.1.12
├── antd@4.7.3
├── axios@0.21.0
├── chart.js@2.9.4
├── gatsby@2.24.91
├── gatsby-plugin-catch-links@2.3.15
├── gatsby-plugin-emotion@4.3.14
├── gatsby-plugin-google-analytics@2.3.19
├── gatsby-plugin-manifest@2.4.37
├── gatsby-plugin-offline@3.2.38
├── gatsby-plugin-react-helmet@3.3.14
├── gatsby-source-filesystem@2.3.37
├── gatsby-transformer-remark@2.8.47
├── prop-types@15.7.2
├── react@17.0.1
├── react-chartjs-2@2.10.0
├── react-dom@17.0.1
└── react-helmet@6.1.0
```