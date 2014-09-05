---
title: "Course: Advanced Geospatial Analytics (GIS 520)"
layout: default

course: "GIS 520: Advanced Geospatial Analytics"
---

<h1>{{ page.title }}</h1>

<p>The NC State Graduate Certificate in GIS provides students with a greater understanding of how to apply spatial concepts to real-world problem solving. The Certificate program has two required courses including GIS 510: Introduction to Geographic Information Science, and
GIS 520: Advanced Geospatial Analytics.</p>

<p>This course covers the basics of spatial analysis.  We will cover how to apply different analysis techniques to vector and raster datasets.</p>

<p>This course has four main topics including:</p>

<ul>
  {% assign sorted_pages = (site.pages | sort: 'indexOrder') %}
  {% for page in sorted_pages %}
    {% if page.isIndex %}
      <a href="{{ page.url }}"><li>{{ page.topic }}</li></a>
    {% endif %}
  {% endfor %}
</ul>

