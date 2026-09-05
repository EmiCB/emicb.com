---
layout: game

title: "Goblin Catcher"
date: 2026-08-25
date_range: "August 2026"
category: coursework
course: "GSD 511"
is_draft: false

asset_root: "/assets/images/games/goblin-catcher/"
featured_image: "gc-cover.png"
itch_embed_id: 19116953
itch_embed_scale: 100
videos:
gallery:

# Technical Tags
tags:
- Godot
- GDScript
- Web

# Team Info
team_type: "solo"
my_role: "Programmer"

links:
- name: "Play on itch.io"
  url: "https://emicb.itch.io/goblin-catcher"
  icon:
---

Push all of the goblins! This is a fantasy spin on Thief Catcher, the first project for my GSD 511 course

<!--more-->

This is a fantasy spin on Thief Catcher, the first project for my **GSD 511: Game Development I** course. Push all of the goblins in the pool to win. The current playable version is the newest one!

## Controls
- Move with `W`, `A`, `S`, `D`

## v1.0 - Lecture Version
- `Rigidbody2D` player and enemies w/ movement controlled by applying forces
- Uses `Signals` to detect when enemy enters goal area and execute relevant code
- Enemies are removed and play a sound when pushed into the goal area
- Particle system to highlight the goal area
- `TileMapLayers` for the world construction

## v2.1 - Expanded Version (for fun)
- Updated player to use `CharacterBody2D` for better movement feel
- Added custom physics calculation for player collisions with enemies to keep the pushing mechanic
- Added physics material to make enemies bounce off of surfaces (keeps them from being stuck on area bounds)
- Added `Game Controller` to track progress
- Added a win screen that appears after all enemies are moved into the goal area
- Added my own artwork for characters and landscape
- Added UI for the amount of goblins left

## Asset Attribution
All of the current art was made by me using Aseprite. The cover image was made in Canva using my sprites. Credits for placeholder art and sound effects are listed below:

- Goblin capture sound: [Little Creature Hurt Sound](https://pixabay.com/sound-effects/film-special-effects-little-creature-hurt-sound-295405/) by Homemade_SDX on pixabay.com
- All art for v1.0 from [Sunnyside World](https://danieldiggle.itch.io/sunnyside) by DanielDiggle on itch.io

### Aseprite Files
<div class="post-body-image">
  <img src="{{ page.asset_root | append: 'asp-tiles.png' | relative_url }}" alt="Tileset created in Aseprite">
  <figcaption>Tileset made in Aseprite</figcaption>
</div>

<div class="post-body-image">
  <img src="{{ page.asset_root | append: 'asp-characters.png' | relative_url }}" alt="Character sprites created in Aseprite">
  <figcaption>Character sprites made in Aseprite</figcaption>
</div>