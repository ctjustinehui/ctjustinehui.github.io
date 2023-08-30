---
layout: page
permalink: /publications/
title: Publications
description: Publications about some works that I have done or collaborated with. 
sections:
  - bibquery: "@article"
    text: "Journal articles"
  - bibquery: "@inproceedings"
    text: "Conference and workshop papers"
years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
nav: false
nav_order: 4
---

<div class="publications">

{%- for section in page.sections %}
  <a id="{{section.text}}"></a>
  <p class="bibtitle">{{section.text}}</p>
  {%- for y in page.years %}

    {%- comment -%}  Count bibliography in actual section and year {%- endcomment -%}
    {%- capture citecount -%}
    {%- bibliography_count -f {{site.scholar.bibliography}} -q {{section.bibquery}}[year={{y}}] -%}
    {%- endcapture -%}

    {%- comment -%} If exist bibliography in actual section and year, print {%- endcomment -%}
    {%- if citecount !="0" %}

      
      {% bibliography -f {{site.scholar.bibliography}} -q {{section.bibquery}}[year={{y}}] %}

    {%- endif -%}

  {%- endfor %}

{%- endfor %}

</div>