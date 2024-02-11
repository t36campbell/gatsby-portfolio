---
path: /projects/frontend/mcsteen-features
category: frontend
date: "2023-10-28"
title: Features I made at McSteen
description: Things I made during my time working at McSteen
image: https://ik.imagekit.io/t36campbell/Portfolio/county_map_BLveTvehk.png?updatedAt=1698504897424
---

These are features that I am most proud of, which I created during my time as a Full Stack engineer at McSteen Land Surveyors when redesigning their order processing application.

<br>
<br>

<h1 class="text-3xl">County Map</h1>
<br>

## Summary

These maps are one of the best features that I have developed. It can break down any SVG image into searchable sections. In the case of the state maps, it makes the counties searchable, but I have also used this feature for searching elements on the periodic table. 

<br>

## Features

- Dynamically builds an SVG image from stored parameters in a database, like name and county path string.
- By getting a list of elements from the database, it: 
    - reduced the application bundle (storage space required) size
    - made the feature scalable, so more states can be added easily
    - simplified the code and made the styling easier to maintain
- Makes the IDs of SVG elements searchable, then applies styles to them so they are visually apparent.

<br>
<iframe class="w-full h-screen" src="https://imagekit.io/player/embed/t36campbell/Portfolio/county_map_JO2gQO519.mp4?thumbnail=https%3A%2F%2Fik.imagekit.io%2Ft36campbell%2FPortfolio%2Fcounty_map_JO2gQO519.mp4%2Fik-thumbnail.jpg&updatedAt=1698509338232" title="County Map Search" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"> </iframe>
<br>

At McSteen, they serve many states, and every county with each state has a website and or method for obtaining information about a given property. This page was designed to help quickly find a county and, when clicked, routed to a page with all the details for that county. 

<br>

I designed this page with admins and field workers on iPads in mind. For instance, I have yet to learn what each county looks like, so I must type the name in the search bar. But for field workers, especially in the winter, the less the screen needs to be touched, the better, so they could click on the county because they know the county's shape and locations on the map.  

<br>
<br>

<h1 class="text-3xl">Dark Mode for Google Maps</h1>
<br>

## Summary

Added dark mode support for the maps used across the application, especially the static maps for the property on each order and the dynamic maps used for viewing the locations of all the orders

## Features

- Made customizable configurations for light and dark maps
- This allowed for a consistent look across the app, even when viewing different map types

# Light & Dark: Static Google Maps
<div>
    <img src="https://ik.imagekit.io/t36campbell/Portfolio/tr:w-0.36/light_static_map_uRCerIgHm.png?updatedAt=1698516692173">
    <img src="https://ik.imagekit.io/t36campbell/Portfolio/tr:w-0.36/dark_static_map_yf-dC3DAI.png?updatedAt=1698516691632">
</div>

<br>
<br>

# Light & Dark: Dynamic Google Maps
<div>
    <img src="https://ik.imagekit.io/t36campbell/Portfolio/tr:w-0.36/light_dyn_map_sSIEGgA7p.png?updatedAt=1698516693180">
    <img src="https://ik.imagekit.io/t36campbell/Portfolio/tr:w-0.36/dark_dyn_map_Vf6ML-O7J.png?updatedAt=1698516692234">
</div>

