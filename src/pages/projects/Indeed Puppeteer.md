---
path: "/indeed-puppeteer"
image: ""
category: "project"
featured: "false"
published: "2020-05-05"
title: "Indeed Puppeteer"   
author: "Tyler Campbell"
---
An attempt to automate the process of applying for jobs and to bypass Indeed’s UI. I’m not a fan of how Indeed displays the jobs I have saved, Id rather keep track of my saved jobs at a plain text document that I can use offline. In addition, to a better organization scheme for “My Jobs,” I would like to automate filling out applications that allow you to “ Apply with Indeed.”

The goal is to manage these interactions from the command line. The workflow I have envisioned is as follows:

* Launch app
* Prompt for credentials the login with these variables
* Select apply or export
	* Apply
		* Will open each saved job that has the option to “Apply with Indeed”
		* Print  the questions in this form and pass input to the form
		* Until all jobs in this list have been applied to
	* Export
		* Return a list of the jobs in a category (i.e. saved, applied, interview, etc.)

## What’s Inside
Heres a list of this app’s plugins:

* Puppeteer
* Chalk

Find out how I added these features and more in my series on Puppeteer [here](link_to_page)
