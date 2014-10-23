---
title: "Spatial Statistics"
layout: default

course: "GIS 520: Advanced Geospatial Analytics"
topic: "Geospatial Analytics with Vector Data"
order: 8
---

{% include topic-header.html %}

## Problem

The problem presented in this assignment is to apply spatial statistics methods to get a better understanding of the spatial distribution of Emergency Medical Service (EMS) calls.  These tools generally find the presence or absence of clustering/dispersion on either attribute values or the geographic location itself.

## Analysis Procedures

### Strategies

For this assignment we used the Spatial Statistics tools available in ArcGIS.  We used the Average nearest neighbor tool to test for geographic clustering using an input of EMS point locations, and the area of Battalion 2's footprint.  For the next exercise we used the General G statistic, which measures concentrations of high/low values over an entire study area.
Ripley's K function pattern analysis to determine clustering -- uses ALL points, not just nearest neighbor.
Moran's I finds clustering using attributes and geographic location.

Describe the analytic plan for solving this type problem/issue; as applicable, you should also include required software, required ArcGIS modules, and the type of data used and data sources. "I watched the course lecture video" or "I followed instructions" are NOT strategies to solve the problems.

### Methods 

Include a brief description in a paragraph form and a diagram that clearly communicate the procedures and overall process you used to solve the problem. Overall, this section should be a generalized description for solving the problem, which could be also used for solving other similar problems. Hence, this is NOT to be a detailed step-by-step procedure log and it should not be a click-by-click description. The diagram should also be a generalized graphical/visual representation of your workflow used to solve the problem. You may create the diagram using any software/format available, and include it as a screen capture in your text document. Ensure that the text associated with the diagram is readable. If you include separate diagrams and writeup for the four exercises, which is not necessary, it is ok if the document is longer than 2 pages.

## Discussion

### Difficulties Encountered

Since the tutorials associated with this assignment were step-by-step I didn't really encounter any "blocking" problems.  The one issue I had was with exercise two using the High/Low Clustering Tool.  Since we were using relatively small distances each time we ran the tool using a different distance measure we got the same error: **"X number of features didn't have neighbors the statistical properties of the test are generally invalid."**  The assignment suggested that we choose the result with the maximum z-score, however, this result coincided with the largest number of features that couldn't find a neighbor within the given distance.  I found these results to be the least trust-worthy.

### Evaluation

This was the first time that we were able to use statistical analysis to quantify the accuracy of our results.  We were able to use the z-score and p-value of our statistical analysis to get a Confidence Level of our results.  Based on these values we were able to make an educated decision whether or not to reject the null hypothesis.  In statistical analysis the null hypothesis, in the case of spatial statistics, represents ["Complete Spatial Randomness (CSR), either of the features themselves or of the values associated with those features."] [1]  
  
## Application &amp; Reflection

Spatial statistics are very useful in the world of natural resource management.  Species locations are tracked with GPS either through observation, or remote GPS collars that transmit their location to a remote server.  This data is almost always compared to the habitat or landcover in that particular record's location.  After accumulating this type of data for some period of time we can use spatial statistics to get a better understanding of where a particular species tends to cluster, and how the associated habitat/landcover conditions might support that species' population.  With this knowledge we can target restoration and work to improve habitat for rare species.

[1]: http://resources.arcgis.com/en/help/main/10.2/index.html#//005p00000006000000 "ArcGIS Resources: What is a z-score? What is a p-value?"