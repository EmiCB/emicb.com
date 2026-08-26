---
layout: game

title: "Goblin Catcher"
date: 2026-08-25
date_range: "August 2026"
category: coursework
is_draft: false

asset_root: "/assets/images/games/goblin-catcher/"
featured_image: "main-screen.png"
itch_embed_id: 18962734
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

## v1.0 - Lecture Version
- `Rigidbody2D` player and enemies w/ movement controlled by applying forces
- Uses `Signals` to detect when enemy enters goal area and execute relevant code
- Enemies are removed and play a sound when pushed into the goal area
- Particle system to highlight the goal area

## v2.0 - Expanded Version (for fun)
- Updated player to use `CharacterBody2D` for better movement feel
- Added custom physics calculation for player collisions with enemies to keep the pushing mechanic
- Added physics material to make enemies bounce off of surfaces (keeps them from being stuck on area bounds)
- Added `Game Controller` to track progress
- Added a win screen that appears after all enemies are moved into the goal area

## Asset Attributions
- All art is from [Sunnyside World](https://danieldiggle.itch.io/sunnyside) by DanielDiggle on itch.io
- Goblin capture sound: [Little Creature Hurt Sound](https://pixabay.com/sound-effects/film-special-effects-little-creature-hurt-sound-295405/) by Homemade_SDX on pixabay.com