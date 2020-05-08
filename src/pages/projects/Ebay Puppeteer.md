---
path: "/ebay-puppeteer"
category: "project"
featured: "false"
published: "2020-05-06"
title: "Ebay Puppeteer"
author: "Tyler Campbell"
--- 
This project is meant to automate a process that I prefer very often, researching market value of electronics. I often find myself searching eBay and FaceBook Marketplace for a broken device to fix. To ensure I can still make money after I fix the device, I need to have a rough idea of what the item sells for. I use eBay as my point of reference here because this gives me a worse case scenario, because eBay tends to favor the buyer. 

The goal is to manage these interactions from the command line. The workflow I have envisioned is as follows:

* Launch app
* Prompt for an item to query
* The app will then go to eBay, enter information on the “advanced search” page, ensuring only items sold within the last month/year are returned.
* The results will then be scraped and returned for ChartJS to plot the items on a graph. Most importantly the average value and the current trend will be noted.
* The output will be an image saved in the results folder, with the name of the item queried and the date.

## What’s Inside
Heres a list of this app’s packages:

* Puppeteer
* Chalk
* ChartJS

Find out how I added these features and more in my series on Puppeteer [here](link_to_page)
