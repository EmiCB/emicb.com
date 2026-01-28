---
layout: gallery
title: Projects
permalink: /projects/
---

<!-- Sort projects from newest to oldest -->
<div class="gallery-section">
{% assign projects = site.projects | reverse %}
{% for project in projects %}
  <article class="game-card">
    <!-- Featured image -->
    {%- if project.featured_image -%}
      <img src="{{ project.featured_image | relative_url }}" alt="{{ project.title | escape }}">
    {%- else -%}
      <img src="{{ '/assets/images/500x300.png' | relative_url }}" alt="{{ project.title | escape }} thumbnail">
    {%- endif -%}
    <!-- Title and date -->
    <h3><a tabindex="0" role="button" aria-pressed="false" href="{{ project.url | relative_url }}" class="game-card-link">{{ project.title | escape }}</a></h3>
    <p>{{ project.date_range }}</p>
    <!-- Tags -->
    {%- if project.tags -%}
      <div class="game-tags-container">
        {%- for tag in project.tags -%}
          <span class="game-tag">{{ tag | escape }}</span>
        {%- endfor -%}
      </div>
    {%- endif -%}
    <!-- Excerpt -->
    <div class="game-excerpt">{{ project.excerpt }}</div>
  </article>
{% endfor %}
</div>