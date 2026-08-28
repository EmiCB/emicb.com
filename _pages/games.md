---
layout: gallery
title: Games
permalink: /games/
---

<div class="game-tags-container game-tags-legend">
  <span class="game-tag tag-team">Team Size</span>
  <span class="game-tag tag-technical">Technical Tags</span>
  <span class="game-tag tag-design">Design Tags</span>
</div>

<!-- Technical Tag Filters -->
{%- assign technical_tag_options = "" | split: "," -%}
{%- for game in site.games -%}
  {%- for tag in game.tags -%}
    {%- unless technical_tag_options contains tag -%}
      {%- assign technical_tag_options = technical_tag_options | push: tag -%}
    {%- endunless -%}
  {%- endfor -%}
{%- endfor -%}
{%- assign technical_tag_options = technical_tag_options | sort_natural -%}
{% if technical_tag_options.size > 0 %}
<div class="game-filters-container" data-filter-group="technical">
  <span class="game-filters-label">Filter by Technical Tag:</span>
  {%- for tag in technical_tag_options -%}
    <button type="button" class="game-filter-btn filter-technical" data-filter-value="{{ tag | slugify }}">{{ tag }}</button>
  {%- endfor -%}
  <button type="button" class="game-filter-clear" data-filter-clear="technical">Clear</button>
</div>
{% endif %}

<!-- Coursework Section -->
{% assign coursework_games = site.games | where: "category", "coursework" | reverse %}
{% if coursework_games.size > 0 %}
<h2 class="gallery-section-header">Coursework</h2>
<div class="gallery-section">
  {% for game in coursework_games %}
  {%- assign team_tag_slug = game.team_type | slugify -%}
  {%- assign technical_tag_slugs = "" -%}
  {%- for tag in game.tags -%}
    {%- assign tag_slug = tag | slugify -%}
    {%- assign technical_tag_slugs = technical_tag_slugs | append: tag_slug | append: " " -%}
  {%- endfor -%}
  {%- assign design_tag_slugs = "" -%}
  {%- for tag in game.design_tags -%}
    {%- assign tag_slug = tag | slugify -%}
    {%- assign design_tag_slugs = design_tag_slugs | append: tag_slug | append: " " -%}
  {%- endfor -%}
  <article class="game-card{% if game.is_draft %} is-draft{% endif %}" data-team-tag="{{ team_tag_slug }}" data-technical-tags="{{ technical_tag_slugs | strip }}" data-design-tags="{{ design_tag_slugs | strip }}">
    <!-- Draft badge -->
    {%- if game.is_draft -%}
      <div class="draft-badge">WIP</div>
    {%- endif -%}
    <!-- Featured image -->
    {%- if game.featured_image -%}
      {% assign featured_image = game.asset_root | append: game.featured_image %}
      <img src="{{ featured_image | relative_url }}" alt="{{ game.title | escape }}">
    {%- else -%}
      <img src="{{ '/assets/images/500x300.png' | relative_url }}" alt="{{ game.title | escape }} thumbnail">
    {%- endif -%}
    <!-- Title and date -->
    <h3><a tabindex="0" role="button" aria-pressed="false" href="{{ game.url | relative_url }}" class="game-card-link">{{ game.title | escape }}</a></h3>
    <p>{{ game.date_range }}</p>
    <!-- Tags -->
    {%- if game.tags or game.design_tags or game.team_type -%}
      <div class="game-tags-container">
        {%- if game.team_type -%}
          <span class="game-tag tag-team">{{ game.team_type | upcase }}</span>
        {%- endif -%}
        {%- for tag in game.tags -%}
          <span class="game-tag tag-technical">{{ tag | escape }}</span>
        {%- endfor -%}
        {%- for tag in game.design_tags -%}
          <span class="game-tag tag-design">{{ tag | escape }}</span>
        {%- endfor -%}
      </div>
    {%- endif -%}
    <!-- Excerpt -->
    <div class="game-excerpt">{{ game.excerpt }}</div>
  </article>
  {% endfor %}
</div>
{% endif %}

<!-- Personal Section -->
{% assign personal_games = site.games | where: "category", "personal" | reverse %}
{% if personal_games.size > 0 %}
<h2 class="gallery-section-header">Personal</h2>
<div class="gallery-section">
  {% for game in personal_games %}
  {%- assign team_tag_slug = game.team_type | slugify -%}
  {%- assign technical_tag_slugs = "" -%}
  {%- for tag in game.tags -%}
    {%- assign tag_slug = tag | slugify -%}
    {%- assign technical_tag_slugs = technical_tag_slugs | append: tag_slug | append: " " -%}
  {%- endfor -%}
  {%- assign design_tag_slugs = "" -%}
  {%- for tag in game.design_tags -%}
    {%- assign tag_slug = tag | slugify -%}
    {%- assign design_tag_slugs = design_tag_slugs | append: tag_slug | append: " " -%}
  {%- endfor -%}
  <article class="game-card{% if game.is_draft %} is-draft{% endif %}" data-team-tag="{{ team_tag_slug }}" data-technical-tags="{{ technical_tag_slugs | strip }}" data-design-tags="{{ design_tag_slugs | strip }}">
    <!-- Draft badge -->
    {%- if game.is_draft -%}
      <div class="draft-badge">WIP</div>
    {%- endif -%}
    <!-- Featured image -->
    {%- if game.featured_image -%}
      {% assign featured_image = game.asset_root | append: game.featured_image %}
      <img src="{{ featured_image | relative_url }}" alt="{{ game.title | escape }}">
    {%- else -%}
      <img src="{{ '/assets/images/500x300.png' | relative_url }}" alt="{{ game.title | escape }} thumbnail">
    {%- endif -%}
    <!-- Title and date -->
    <h3><a tabindex="0" role="button" aria-pressed="false" href="{{ game.url | relative_url }}" class="game-card-link">{{ game.title | escape }}</a></h3>
    <p>{{ game.date_range }}</p>
    <!-- Tags -->
    {%- if game.tags or game.design_tags or game.team_type -%}
      <div class="game-tags-container">
        {%- if game.team_type -%}
          <span class="game-tag tag-team">{{ game.team_type | upcase }}</span>
        {%- endif -%}
        {%- for tag in game.tags -%}
          <span class="game-tag tag-technical">{{ tag | escape }}</span>
        {%- endfor -%}
        {%- for tag in game.design_tags -%}
          <span class="game-tag tag-design">{{ tag | escape }}</span>
        {%- endfor -%}
      </div>
    {%- endif -%}
    <!-- Excerpt -->
    <div class="game-excerpt">{{ game.excerpt }}</div>
  </article>
  {% endfor %}
</div>
{% endif %}

<!-- Game Jams Section -->
{% assign jam_games = site.games | where: "category", "jam" | reverse %}
{% if jam_games.size > 0 %}
<h2 class="gallery-section-header">Game Jams</h2>
<div class="gallery-section">
  {% for game in jam_games %}
  {%- assign team_tag_slug = game.team_type | slugify -%}
  {%- assign technical_tag_slugs = "" -%}
  {%- for tag in game.tags -%}
    {%- assign tag_slug = tag | slugify -%}
    {%- assign technical_tag_slugs = technical_tag_slugs | append: tag_slug | append: " " -%}
  {%- endfor -%}
  {%- assign design_tag_slugs = "" -%}
  {%- for tag in game.design_tags -%}
    {%- assign tag_slug = tag | slugify -%}
    {%- assign design_tag_slugs = design_tag_slugs | append: tag_slug | append: " " -%}
  {%- endfor -%}
  <article class="game-card{% if game.is_draft %} is-draft{% endif %}" data-team-tag="{{ team_tag_slug }}" data-technical-tags="{{ technical_tag_slugs | strip }}" data-design-tags="{{ design_tag_slugs | strip }}">
    <!-- Draft badge -->
    {%- if game.is_draft -%}
      <div class="draft-badge">WIP</div>
    {%- endif -%}
    <!-- Featured image -->
    {%- if game.featured_image -%}
      {% assign featured_image = game.asset_root | append: game.featured_image %}
      <img src="{{ featured_image | relative_url }}" alt="{{ game.title | escape }}">
    {%- else -%}
      <img src="{{ '/assets/images/500x300.png' | relative_url }}" alt="{{ game.title | escape }} thumbnail">
    {%- endif -%}
    <!-- Title and date -->
    <h3><a tabindex="0" role="button" aria-pressed="false" href="{{ game.url | relative_url }}" class="game-card-link">{{ game.title | escape }}</a></h3>
    <p>{{ game.date_range }}</p>
    <!-- Tags -->
    {%- if game.tags or game.design_tags or game.team_type -%}
      <div class="game-tags-container">
        {%- if game.team_type -%}
          <span class="game-tag tag-team">{{ game.team_type | upcase }}</span>
        {%- endif -%}
        {%- for tag in game.tags -%}
          <span class="game-tag tag-technical">{{ tag | escape }}</span>
        {%- endfor -%}
        {%- for tag in game.design_tags -%}
          <span class="game-tag tag-design">{{ tag | escape }}</span>
        {%- endfor -%}
      </div>
    {%- endif -%}
    <!-- Excerpt -->
    <div class="game-excerpt">{{ game.excerpt }}</div>
  </article>
  {% endfor %}
</div>
{% endif %}
