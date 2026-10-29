---
layout: game

title: "On-Rails Space Shooter - Combat Prototype"
date: 2026-10-29
date_range: "October 2026"
category: coursework
course: "GSD 551"
status: in-development
page_complete: false

asset_root: "/assets/images/games/on-rails/"
featured_image: "on-rails.png"
itch_embed_id: 20132781
itch_embed_width: 640
itch_embed_height: 380
videos:
gallery:

# Technical Tags
tags:
- Unity
- C#
- Rider
- Web

# Team Info
team_type: "solo"
my_role: "Programmer"

links:
- name: "Play on itch.io"
  url: "https://emicb.itch.io/on-rails-space-shooter"
  icon:
- name: "View source on GitHub"
  url: "https://github.com/EmiCB/GSD-551-On-Rails-Shooter"
  icon:
---

On-rails style space shooter for my GSD 551 course.

<!--more-->

The current version of this game is a combat prototype following in-class lectures. The description will be updated as it is developed into a polished game with custom visual identity and features.

## How to Play
<details class="design-documentation" open>
<summary>Mouse + Keyboard</summary>
<div markdown="1">
- `W`, `A`, `S`, `D` to move
- `Mouse` to aim reticle
- `LMB` to fire weapon
- `Q` and `E` to preform banking maneuver (left or right)
- Double-tap `Q` or `E` to perform a barrel roll (left or right)
</div></details>

<details class="design-documentation" open>
<summary>Gamepad</summary>
<div markdown="1">
- `Left Stick` to move
- `Right Stick` to aim reticle
- `RT` to fire weapon
- `LB` and `RB` to preform banking maneuver (left or right)
- Double-tap `LB` or `RB` to perform a barrel roll (left or right)
</div></details>

## v0.1.0 - Combat Prototype
- **On-Rails Flight** - move horizontally and vertically within a bounding-box, scrolling environment
- **Movement Feedback and Maneuvers** - visual ship response to movement, left and right banking, and directional barrel rolls with horizontal momentum
- **Independent Targeting and Weapons System** - reticle controlled independently from ship movement, projectiles fire from weapon to reticle position converted to world-space, limited fire-rate
- **Gamepad Support** - choice of mouse and keyboard or gamepad controls
- **Collisions** - projectiles and player collide with hazards and targets
- **Health and Damage** - targets and player utilize reusable health component, allowing them to receive damage and enter a defeat state when their health reaches 0

## Upcoming Improvements / Considerations
- ObjectPooling for frequently used GameObjects (i.e. projectiles, hazards, targets) to avoid repeated insantiation and deletion
- Cohesive visual update after prototyping stage
- Comprehensive documentation on both custom editor tools and code
- Removal of .idea folder on GitHub because I forgot to add it to the .gitignore...

## Asset Attributions
- Currently, all prototype assets are made with Unity primitive shapes

## Design Documentation
Section coming soon