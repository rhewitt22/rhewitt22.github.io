---
title: "Turning Data into Information"
layout: default

course: "GIS 520: Advanced Geospatial Analytics"
topic: "Geospatial Data Issues"
order: 1

esri-course: http://training.esri.com/gateway/index.cfm?fa=catalog.webCourseDetail&CourseID=2017
---

{{ page.title }}
====================

{{ page.course }}
---------------------

{{ page.topic }}
---------------------

[This particular course](http://training.esri.com/gateway/index.cfm?fa=catalog.webCourseDetail&CourseID=2017) provided by ESRI's Virtual Campus introduces GIS users to basic spatial data structures, sources of error, and basic spatial analysis.  I'll describe each of the six modules in more detail below.

### Module I: Basics of Data and Information

This section forms the basis for the rest of the five modules by clearly explaining the most basic types of geographic data: vector (discrete objects) and raster (fields).  This topic also covers the most basic problems with representing geographic data.  The world is infinitely complex, so our computer representations of real-life objects must be limited so our datasets remain manageable.  There are also issues with how data is collected, mainly bias derived from sampling techniques, and limitations of data collection equipment.

This course also introduces the concept of spatial autocorrelation.  This principal describes how data within a particular dataset is related to itself.  I think this idea is best described with a series of images rather than through GIS jargon.

Spatial autocorrelation can be positive (features similar in location are also similar in attributes), negative (features that are similar in location are dissimilar in attributes), or neutral (attributes are independent of location).  No Geography course would be complete without mentioning Tobler's 1st Law of Geography:

> Everything is related to everything else, but near things are more related than distant things.  
> - Waldo R. Tobler

In instances where it is infeasible or impossible to fully sample a given area we can rely on interpolation methods. Spatial interpolation is the process of taking an input of sample points and generating a surface by filling in the gaps with a mathematical "best guess".  Two such methods include [Inverse Distance Weighting](http://resources.arcgis.com/en/help/main/10.2/index.html#//00310000002m000000), and [Kriging](http://resources.arcgis.com/en/help/main/10.2/index.html#//009z00000076000000) -- each with it's own strengths and weaknesses.

Finally this module describes six different types of spatial analysis:
 - Queries and Reasoning (ex. asking the database a simple question)
 - Measurements (ex. length, area)
 - Transformations (ex. conversion between vector and raster)
 - Descriptive Summaries (ex. mean, mode, standard deviation)
 - Optimization (ex. finding the best location for a new store)
 - Hypothesis Testing (ex. inferential statistics)

### Module II: Cartography, Map Production, and Geovisualization

Cartography is where the rubber meets the road in terms of turning data into information.  Cartography is the science of making maps, but a good cartographic product relies heavily on principals of art and design.  The world of GIS makes cartography more flexible by removing several limitations associated with paper maps.  In both the desktop and web GIS environments we have the ability to create products that have dynamic scales and extents.  The audience for digital cartographic products is generally much more specific.  This allows GIS practitioners to create much more specialized maps to fulfill specific needs.  Paper maps, on the other hand, require a more general approach as the audience tends to be larger more diverse.  Web maps can even be easily altered based on user interaction, which makes them very dynamic by nature.

GIS tools let us symbolize our data in a number of different ways depending on the message we're trying to get across.  Generally we use attribute data to symbolize our map in one of two main ways: size, and color.  Humans are naturally very good at pattern recognition.  This is why a map tends to get our message across much faster than scanning the rows of a table.  For example, if we are creating a map of major cities in the USA, instead of creating the same point for each city the points can be symbolized according to population size.  The largest cities would therefore have the largest "dots".  Similarly we can symbolize roads in a way that immediately makes sense to our audience.  Rather than all roads being the same color and thickness we can use distinct symbology for highways, avenues, and surface streets.

In more complex scenarios where we are trying to display multiple variables for a given area we can turn to more complex representations like bar and pie charts.  While it can often be tempting to cram as much information into a single map as possible it can often be beneficial to create a series of maps, each with a single purpose (or variable), that can be visually compared side-by-side.  These are all considerations that we must make as cartographers.

### Module III: Query and Measurement

Queries and measurements are some of the most basic properties of a GIS.  Simply put, these are the tools we use to ask questions of a given dataset.  For example we can ask, "Which cities in the USA have a population greater than 3 million?" The beauty of queries is their simplicity -- asking a single question of the dataset.  For more advanced queries we simply combine multiple queries together using operators like `AND`, `OR`, `NOT`, and `LIKE`.  If we want to know the American cities with populations over 3 million, but we're only concerned with the East Coast we simply combine two queries with the `AND` operator (assuming our dataset has population and coast fields).

{% highlight SQL %}
SELECT *
WHERE population > 3000000 AND coast = 'east'
FROM cities
{% endhighlight %} 

Alternatively we can use GIS to calculate attributes of our data for us.  In the case of a polygon we can have the software calculate our area for us based on a given coordinate system.  This would be far more complicated to calculate by hand, but a GIS can handle this task in less than a second, and can re-calculate the area in a number of different coordinate systems.  Measurements are not restricted to polygons.  Lines for example can represent real-world objects like rivers and streams.  If we are considering removing a dam along a river to allow native fishes to migrate to their natural spawning grounds GIS can calculate the total river and stream miles opened to fish passage if a given dam is removed.  This sort of information can help us select the most important dams to remove to restore native fish populations.

### Module IV: Transformations and Descriptive Summaries

Transformation and descriptive summaries each provide something new.  Until now we've simply been asking our data questions.  To generate new information we can use tools in GIS and Statistics.

Transformations generally take in one or more GIS layers and produce a new layer leaving the inputs untouched.  One example of a simple transformation is the buffer tool that is available in all GIS software packages.  This tool takes in a layer (point, line or polygon), and produces a new, expanded layer based on the user's input.  This technique is valuable for indicating protected areas around an object.  For example, a regulator agency might buffer around Bald Eagle nests and prevent development in those areas to prevent disturbance.  Another of the most common transformations in GIS is the intersect.  This tool is valuable when you want to know where two or more layers overlap.  Imagine a scenario where you are interested in protecting a rare species.  You have one polygon layer that represents the species preferred habitat.  A second layer represents lands that are currently protected (State/Federal parks, etc.).  Using the intersection of these two layers you have an area managed by government that can manage the land specifically for your rare species.

Descriptive statistics summarize a dataset.  Mean, mode, and standard deviation are all examples of descriptive statistics.  These numbers help us understand a dataset (how spread out it is, where the middle is, etc.) without looking at each individual record.

### Module V: Optimization and Hypothesis Testing

When ever someone asks me what GIS is I usually describe an optimization scenario.  For example, given a city with data on current restaurant locations, demographics, and transportation you start to plan where to put your next fast-food restaurant.

### Module VI: Uncertainty

I often find that consumers of maps assume that the data used is valid and properly applied to a given problem or scenario.  I suspect this comes from the fact that any map you review requires a certain amount of personal analysis.  Since the reader is coming to their own conclusions they don't hesitate to believe them, and are often unaware that the cartographer may have intentionally led them to their conclusion.  Any GIS practitioner that has read [how to lie with maps](http://www.markmonmonier.com/how_to_lie_with_maps_14880.htm) knows how easy it is to manipulate the impression left on your map's end-user.  With that said it is important to not only understand the limitations of a dataset you are prepared to map, but to clearly state the limitations to your readers before you dive into any real analysis.