---
layout: gallery
title: Games
permalink: /games/
---

<!-- Sort games from newest to oldest -->
{% assign games = site.games | reverse %}
{% for game in games %}
  <article class="game-card">
    <!-- Featured image -->
    {%- if game.featured_image -%}
      <img src="{{ game.featured_image }}" alt="{{ game.title | escape }}">
    {%- else -%}
      <img src="/assets/images/500x300.png" alt="{{ game.title | escape }} thumbnail">
    {%- endif -%}
    <!-- Title and date -->
    <h3><a tabindex="0" role="button" aria-pressed="false" href="{{ game.url | relative_url }}" class="game-card-link">{{ game.title | escape }}</a></h3>
    <p>{{ game.date_range }}</p>
    <!-- Tags -->
    {%- if game.tags -%}
      <div class="game-tags-container">
        {%- for tag in game.tags -%}
          <span class="game-tag">{{ tag | escape }}</span>
        {%- endfor -%}
      </div>
    {%- endif -%}
    <!-- Excerpt -->
    <div class="game-excerpt">{{ game.excerpt }}</div>
  </article>
{% endfor %}