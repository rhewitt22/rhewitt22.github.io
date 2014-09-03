---
title: "Turning Data into Information"
layout: default

course: "GIS 520: Advanced Geospatial Analytics"
topic: "Geospatial Data Issues"

esri-course: true
---

{{ page.title }}
====================

{{ page.course }}
---------------------

{{ page.topic }}
---------------------

[This particular course](http://training.esri.com/gateway/index.cfm?fa=catalog.webCourseDetail&CourseID=2017) provided by ESRI's Virtual Campus introduces GIS users to basic spatial data structures, sources of error, and basic spatial analysis.  I'll describe each of the six modules in more detail below.

### Module I: Basics of Data and Information

This section forms the basis for the rest of the five modules by clearly explaining the most basic types of geographic data: vector (discrete objects and raster (fields).  This topic also covers the most basic problems with representing geographic data.  The world is infinitely complex, so our computer representations of real-life objects must be limited so our datasets remain manageable.  There are also issues with how data is collected, mainly bias derived from sampling techniques.

This course also introduces the concept of spatial autocorrelation.  This principal describes how data within a particular dataset is related to itself.  I think this idea is best described with a series of images rather than through GIS jargon.

Spatial autocorrelation can be positive (features similar in location are also similar in attributes), negative (features that are similar in location are dissimilar in attributes), or neutral (attributes are independent of location).  No Geography course would be complete without mentioning Tobler's 1st Law of Geography:

> Everything is related to everything else, but near things are more related than distant things.

In instances where it is infeasible or impossible to fully sample a given area we can rely on interpolation methods. Spatial interpolation is the process of taking an input of sample points and generating a surface by filling in the gaps with a mathematical "best guess".

Finally this module describes six different types of spatial analysis:
 - Queries and Reasoning (ex. simply asking the database a question)
 - Measurements (ex. length, area)
 - Transforations (ex. conversion between vector and raster)
 - Descriptive Summaries (ex. mean, mode, standard deviation)
 - Optimization (ex. finding the best location for a new store)
 - Hypothesis Testing (inferential statistics)


Uncertainty enters GIS at every stage: in the conception or definition of spatial objects, in the measurement of data, in the structural representation of data, and in the analysis of data.

### Module II: Cartography, Map Production, and Geovisualization

### Module III: Query and Measurement

### Module IV: Transformations and Descriptive Summaries

### Module V: Optimization and Hypothesis Testing

### Module VI: Uncertainty

I often find that consumers of maps assume that the data used is valid and properly applied to a given problem or scenario.  I suspect this comes from the fact that any map you review requires a certain amount of personal analysis.  Since the reader is coming to their own conclusions they don't hesitate to believe them, and are often unaware that the cartographer may have intentionally led them to their conclusion.  Any GIS practitioner that has read [how to lie with maps](http://www.markmonmonier.com/how_to_lie_with_maps_14880.htm) knows how easy it is to manipulate the impression left on your map's end-user.  With that said it is important to not only understand the limitations of a dataset you are prepared to map, but to clearly state the limitations to your readers before you dive into any real analysis.