---
path: /projects/vue-gallery
category: project
date: "2020-08-01"
published: Aug 1 2020
title: Vue Gallery
author: Tyler Campbell
description: Consuming the Flickr API, the application delivers pictures based on photo’s tag name. Built with Vue 3 & Vuetify
image: https://ik.imagekit.io/t36campbell/Portfolio/project-4_ou0ZwkxrQ.png
link: https://vue-gallery-fe4bb.web.app
repo: https://github.com/t36campbell/vue-gallery
---


# Summary

* Consuming the Flickr API, the application delivers pictures based on photo’s tag name.
* Built with Vue 3 & Vuetify (HTML, JavaScript, & SCSS).

# Case Study

#### Challenge

* For my third Vue app I wanted to make something that felt more like a real application instead of a simple web page for a business. In order to accomplish this I needed to access data from a public api.

#### Solution

* Using the Flickr api I was able to recreate the core features of their popular web app, allowing users to search for images. Once the app starts it grabs a list of today’s trending tags by name from Flickr. After the tags are received the most popular tag in that list will have its images displayed.  The remaining 3 of the top 4 tags will displayed as buttons that will return a list of their images when pressed. If so inclined the user can search for any tag name that they would like. The api returns images so quickly that it making it feel just like using the Flickr website itself.  

# Dependencies 
```
vue-gallery@0.1.0
├── axios@0.19.2
├── core-js@3.6.5
├── firebase@7.19.1
├── register-service-worker@1.7.1
├── vue@2.6.11
├── vue-router@3.4.1
├── vue2-google-maps@0.10.7
└── vuetify@2.3.7
```