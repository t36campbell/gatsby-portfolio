---
path: /dev/electron-system-info
category: dev
date: "2020-02-18"
published: Feb 18 2020
title: Electron System Info
author: Tyler Campbell
description: An electron app that provides information about the user’s computer
image: https://ik.imagekit.io/t36campbell/Portfolio/project-8_EuL5TokFP.png
link: https://github.com/t36campbell
repo: https://github.com/t36campbell
---
# Summary

* A desktop app that provides information about the user’s computer
* Assembled using Electron & Font Awesome Icons (HTML, JavaScript, & CSS).

# Case Study
* Building off the success I found creating my first Electron app, I wanted to create something more useful to my employer. I found my inspiration in an outdated, ugly and virtually useless app, that my work used in the service-help to get the IP addresses off the user’s computer.  This was its sole purpose and I set out to create something better.

* Luckily i found an npm package called system-information that communicated with the host device to get information I wanted to display. This is one of the most well documented and easy to use libraries that i have work with and it was paramount to my success with project. 

* I created 9 tabs that display the most useful computer data for identification and troubleshooting purposes. The first tab is a shows the most common information that our service-desk requires on most calls. The rest of the tabs are listed in order of importance:

* Operating System 
* Network
* WiFi
* Battery
* Processor
* Graphics
* Memory
* Disks

# Dependencies 
```
electron-sys-info@1.0.0
├── @fortawesome/fontawesome-free@5.12.1
└── electron@7.1.14
```
