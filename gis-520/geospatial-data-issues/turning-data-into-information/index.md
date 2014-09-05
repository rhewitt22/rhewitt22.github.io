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

## Module I: Basics of Data and Information

This section forms the basis for the rest of the five modules by clearly explaining the most basic types of geographic data: vector (discrete objects) and raster (fields).  This topic also covers the most basic problems with representing geographic data.  The world is infinitely complex, so our computer representations of real-life objects must be limited so our datasets remain manageable.  There are also issues with how data is collected, mainly bias derived from sampling techniques, and limitations of data collection equipment.

This course also introduces the concept of spatial autocorrelation.  This principal describes how data within a particular dataset is related to itself.  I think this idea is best described with a series of images rather than through GIS jargon.

Spatial autocorrelation can be positive (features similar in location are also similar in attributes), negative (features that are similar in location are dissimilar in attributes), or neutral (attributes are independent of location).  No Geography course would be complete without mentioning Tobler's 1st Law of Geography:

> Everything is related to everything else, but near things are more related than distant things.
>
> -> Waldo R. Tobler

In instances where it is infeasible or impossible to fully sample a given area we can rely on interpolation methods. Spatial interpolation is the process of taking an input of sample points and generating a surface by filling in the gaps with a mathematical "best guess".  Two such methods include [Inverse Distance Weighting](http://resources.arcgis.com/en/help/main/10.2/index.html#//00310000002m000000), and [Kriging](http://resources.arcgis.com/en/help/main/10.2/index.html#//009z00000076000000) -- each with it's own strengths and weaknesses.

Finally this module describes six different types of spatial analysis:
 - Queries and Reasoning (ex. asking the database a simple question)
 - Measurements (ex. length, area)
 - Transformations (ex. conversion between vector and raster)
 - Descriptive Summaries (ex. mean, mode, standard deviation)
 - Optimization (ex. finding the best location for a new store)
 - Hypothesis Testing (ex. inferential statistics)

[Back to top]({{ page.url }}#top)

## Module II: Cartography, Map Production, and Geovisualization

Cartography is where the rubber meets the road in terms of turning data into information.  Cartography is the science of making maps, but a good cartographic product relies heavily on principals of art and design.  The world of GIS makes cartography more flexible by removing several limitations associated with paper maps.  In both the desktop and web GIS environments we have the ability to create products that have dynamic scales and extents.  The audience for digital cartographic products is generally much more specific.  This allows GIS practitioners to create much more specialized maps to fulfill specific needs.  Paper maps, on the other hand, require a more general approach as the audience tends to be larger more diverse.  Web maps can even be easily altered based on user interaction, which makes them very dynamic by nature.

GIS tools let us symbolize our data in a number of different ways depending on the message we're trying to get across.  Generally we use attribute data to symbolize our map in one of two main ways: size, and color.  Humans are naturally very good at pattern recognition.  This is why a map tends to get our message across much faster than scanning the rows of a table.  For example, if we are creating a map of major cities in the USA, instead of creating the same point for each city the points can be symbolized according to population size.  The largest cities would therefore have the largest "dots".  Similarly we can symbolize roads in a way that immediately makes sense to our audience.  Rather than all roads being the same color and thickness we can use distinct symbology for highways, avenues, and surface streets.

In more complex scenarios where we are trying to display multiple variables for a given area we can turn to more complex representations like bar and pie charts.  While it can often be tempting to cram as much information into a single map as possible it can often be beneficial to create a series of maps, each with a single purpose (or variable), that can be visually compared side-by-side.  These are all considerations that we must make as cartographers.

[Back to top]({{ page.url }}#top)

## Module III: Query and Measurement

Queries and measurements are some of the most basic properties of a GIS.  Simply put, these are the tools we use to ask questions of a given dataset.  For example we can ask, "Which cities in the USA have a population greater than 3 million?" by running the following query: `SELECT * WHERE population > 3000000 FROM cities;`. The beauty of queries is their simplicity -- asking a single question of the dataset.  For more advanced queries we simply combine multiple queries together using operators like `AND`, `OR`, `NOT`, and `LIKE`.  If we want to know the American cities with populations over 3 million, but we're only concerned with the East Coast we simply combine two queries with the `AND` operator (assuming our dataset has population and coast fields).

{% highlight SQL %}
SELECT *
WHERE population > 3000000 AND coast = 'east'
FROM cities;
{% endhighlight %} 

Alternatively we can use GIS to calculate attributes of our data for us.  In the case of a polygon we can have the software calculate our area for us based on a given coordinate system.  This would be far more complicated to calculate by hand, but a GIS can handle this task in less than a second, and can re-calculate the area in a number of different coordinate systems.  Measurements are not restricted to polygons.  Lines for example can represent real-world objects like rivers and streams.  If we are considering removing a dam along a river to allow native fishes to migrate to their natural spawning grounds GIS can calculate the total river and stream miles opened to fish passage if a given dam is removed.  This sort of information can help us select the most important dams to remove to restore native fish populations.

[Back to top]({{ page.url }}#top)

## Module IV: Transformations and Descriptive Summaries

Transformation and descriptive summaries each provide something new.  Until now we've simply been asking our data questions.  To generate new information we can use tools in GIS and Statistics.

Transformations generally take in one or more GIS layers and produce a new layer leaving the inputs untouched.  One example of a simple transformation is the buffer tool that is available in all GIS software packages.  This tool takes in a layer (point, line or polygon), and produces a new, expanded layer based on the user's input.  This technique is valuable for indicating protected areas around an object.  For example, a regulator agency might buffer around Bald Eagle nests and prevent development in those areas to prevent disturbance.  

Another of the most common transformations in GIS is the intersect.  This tool is valuable when you want to know where two or more layers overlap.  Imagine a scenario where you are interested in protecting a rare species.  You have one polygon layer that represents the species preferred habitat.  A second layer represents lands that are currently protected (State/Federal parks, etc.).  Using the intersection of these two layers you have an area managed by government that can manage the land specifically for your rare species.

Descriptive statistics summarize a dataset.  Mean, mode, and standard deviation are all examples of descriptive statistics.  These numbers help us understand a dataset (how spread out it is, where the middle is, etc.) without looking at each individual record.

[Back to top]({{ page.url }}#top)

## Module V: Optimization and Hypothesis Testing

When ever someone asks me what GIS is I usually describe an optimization scenario.  This is generally the easiest "real-world" application to understand for a novice.  The term optimization is very general and can refer to a number of different analysis techniques.  The common denominator is that we're either trying to minimize costs or maximize benefits using a series of spatial datasets.  The optimization scenario we covered in this chapter had to do with location a transmission line to connect a power plant with a substation.  Optimization analysis can run on Raster and Vector datasets, but usually the analysis is done with layers of the same type rather than mixing raster and vectors in the same analysis.  An example of a vector optimization analysis would be finding the shortest (distance), or fastest (time) route for a vehicle, bike or pedestrian to travel across a road network.

Hypothesis testing comes from the field of Statistics, and allows us to test assumptions of a population based on only a sample of the full population.  To test a hypothesis we create something called a Null Hypothesis, which just represents the opposite of our original hypothesis.  For example, if we want to test if more citizens in Georgia are fans of College football rather than Professional football our Null hypothesis would be that Greater than 50% of Georgians prefer Professional football to College football. Since we are dealing with a sample our conclusions cannot be 100% guaranteed.  Instead we operate on confidence intervals generally between 95% and 99.9% depending on sample size and possible outcomes.  If we reject a null hypothesis with a confidence interval of 99% means that the odds that our sample results were due to random deviation are just 1%.

While hypothesis testing is the basis for a majority of statistical analysis this technique cannot be applied to all spatial analysis.  First, when it comes to geographic analysis we often have a full dataset on a population.  In this case we don't need to infer anything since we have all available data -- we would use descriptive statistics instead.  In cases where we are doing an analysis of a sample of the whole population the spatial relationships between individuals is often not considered.  Instead of inferential statistics we usually create an interpolated surface, which does take into account the spatial relationship between points.

[Back to top]({{ page.url }}#top)

## Module VI: Uncertainty

Error is a fact of life when it comes to geographic data.  The world is infinitely complex, and therefore impossible to model without some generalization or error.  Additionally the instruments we use to collect geographic data come with inherent error.  A Global Positioning Systems (GPS) use a series of satellites orbiting the earth paired with stations on the ground with a known position.  The hand-held GPS device you use to take lat/lon positions uses signals from both of these devices in order to record your current position.  Many factors effect the quality of the data collected include the GPS module used, the number of satellites you can connect to just to name a few.  Generally speaking the error produced by these devices will be similar if you are collecting a series of points all at once.  If, instead, you will be collecting data over the course of several days, weeks, months, or years the position and availability of GPS Satellites may be grossly different and can result in different amounts of error.

There are different techniques for measuring error depending on the type of data you're working with.  For nominal data (categories) we use something called a [confusion matrix](http://en.wikipedia.org/wiki/Confusion_matrix).  As an example let's assume we are digitizing land-use types based on aerial imagery.  We create polygons of contiguous areas that represent the same land-use type.  To test the accuracy of our photo interpretation we ground truth our data most likely using a stratified sample (we're unlikely to be able to ground truth every record).  Before we get started we need to create a grid on top of our data so we're selecting random cells rather than inspecting entire polygons.  As we ground truth we record instances where our photo interpretation was correct, and in instances where our interpretation was wrong we record the correct value for that cell.  The resulting table is called a confusion matrix.

We can use our confusion matrix to estimate how likely our photo interpretations are correct, and the likelihood of random errors. [Kappa index]()

I often find that consumers of maps assume that the data used is valid and properly applied to a given problem or scenario.  I suspect this comes from the fact that any map you review requires a certain amount of personal analysis.  Since the reader is coming to their own conclusions they don't hesitate to accept them.  At times the reader of a map is unaware that the cartographer has intentionally led them to a certain conclusion.  Any GIS practitioner that has read [how to lie with maps](http://www.markmonmonier.com/how_to_lie_with_maps_14880.htm) knows how easy it is to manipulate the impression left on your map's end-user.  With that said it is important to not only understand the limitations of a dataset you are prepared to map, but to clearly state the limitations to your readers before you dive into any real analysis.

[Back to top]({{ page.url }}#top)