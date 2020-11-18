---
path: /projects/periodic-table-api
category: project
published: "2020-11-01"
title: Periodic Table API
author: Tyler Campbell
image: https://ik.imagekit.io/t36campbell/Portfolio/project-6_r-JWju4LR.png
link: https://pt-api.herokuapp.com/elements/krypton
repo: https://github.com/t36campbell/periodic-table-api
---

### Summary

* A RESTful API that retrieves the elements of the periodic table in JSON format.
* Created with Node.js, & Express (TypeScript).

### Case Study

###### Challenge

Many people have made this api or other simple ones like it. However the one thing they all had in common is that they were written in plain JavaScript. 

###### Solution

So I set out to use TypeScript and ES6 imports, as there are many tutorials and projects out there that teach the simple backend concepts of this app. However I found far fewer projects that use TypeScript. 

Writing and testing the app was no problem; the hard part was getting the app to work once it deployed as it required some very specific setup to work natively on a server. Thanks to a good article on [medium](https://medium.com/developer-rants/deploying-typescript-node-js-applications-to-heroku-81dd75424ce0) I was able to find the answer.

###### Dependencies 
```
periodic-table-api@1.0.0 
├─- cors@2.8.5
├── dotenv@8.2.0
├─- express@4.17.1
└── fs@0.0.1-security
```