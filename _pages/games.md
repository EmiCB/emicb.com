---
layout: page
title: Games
---

{% for game in site.games %}
  <h2>{{ game.title }}</h2>
  <p>{{ game.content | markdownify }}</p>
{% endfor %}