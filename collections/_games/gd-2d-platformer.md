---
layout: game

title: "Godot 2D Platformer"
date: 2026-10-27
date_range: "October 2026"
category: coursework
course: "GSD 511"
status: in-development
page_complete: false

asset_root: "/assets/images/games/gd-2d-platformer/"
featured_image: "platform.png"
itch_embed_id: 20089059
itch_embed_width: 640
itch_embed_height: 380
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
  url: "https://emicb.itch.io/gd-2d-platformer"
  icon:
---

Platformer project for my GSD 511 course.

<!--more-->

Platformer project for my **GSD 511: Game Development I** course.

## Controls
- Move with `A`, `D`
- Jump with `SPACE`
- Interact with `E`
- Fire with `LMB`
- Reload with `R`
- Burst fire ability with `F`
- Quit with `ESC`
  - Note: Godot's `get_tree().quit()` will freeze web embeds, so please refresh the page after using this functionality
- Reload the level with `~`

## v0.2 - Lecture Version + Shooting Mechanic & Reskin Implementation
- Multiple firing variations:
  - Default - single projectile
  - Burst - 3 projectiles in short sequence
  - 
- Projectiles stun enemies on hit and give a visible sprite indication

## v0.1 - Lecture Version
- Main menu utilizing Godot's UI system and `Theme` resource
- Basic player movement and jumping

## Asset Attribution
- All artwork from [Rocky Roads by Esssam on itch.io](https://essssam.itch.io/rocky-roads)