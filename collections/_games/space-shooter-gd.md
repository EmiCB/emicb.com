---
layout: game

title: "Space Shooter"
date: 2026-09-16
date_range: "September 2026"
category: coursework
course: "GSD 511"
is_draft: false

asset_root: "/assets/images/games/space-shooter-gd/"
featured_image: "ssgd-cover.png"
itch_embed_id: 19268609
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
my_role: "Programmer & Artist"

links:
- name: "Play on itch.io"
  url: "https://emicb.itch.io/space-shooter-gd"
  icon:
---

Space-themed, data-driven, side-shooter project for my GSD 511 course

<!--more-->

For my **GSD 511: Game Development I** course, we made a side-shooter project. I decided to stick with the space theme since I already had some space assets I created a while back and wanted to expand on them a little bit. I'm hoping to add some more quality of life features and some better balancing, but am currently hindered by some health issues.

In the current, not well-balanced, state it may only be possible to win using the weapon swapping. I wasn't able to complete it with the starter weapon, but maybe I'm just bad at aiming :)

## Controls
- Move with arrow keys
- Cycle through weapons with `<` and `>`

## v1.0 Features - Lecture Version
- **Data-Driven Design** - uses a custom auto-loaded `data_loader.gd` script to pull game data from `.csv` files
  - uses a spreadsheet as a single source of truth
  - see [Game Data Examples](#weapons--enemy-data) section for more details
- **Equipable Weapons** - a variety of weapons, each with [different stats](#weapons)
  - NOTE: weapon firing / in-game model is not implemented at this point, just in-game data pulling and weapon label
- **Enemies** - a variety of enemies, each with [different stats](#enemies)
  - NOTE: enemies are not yet implemented in game, just the data import and sprites

## v2.0 Features - Lecture Version (+ Extra Content)
- **Expanded Data-Driven Design** - added handling for `spawns.csv` to [define waves](#waves), and added score values to each enemy
- **Weapon Firing** - bullets spawn in front of player and travel towards enemy-side using the currently equipped weapon's data
- **Enemy Waves** - enemies spawn on right side if the screen with y-position and time between spawns pulled from the wave data
  - enemies fly towards player-side using pulled enemy data
  - enemies are destroyed when they:
    - reach the other end of the screen -> player loses a life
    - run into the player -> player loses a life
    - take damage greater than or equal to their HP from the player's bullets -> player gets the enemy's point value added to their score
- **More Weapon and Enemy Types** - now have 5 [weapons](#weapons) and 5 [enemies](#enemies)
- **Player Lives** - player can take damage from enemies reaching the player side or running directly into the player
- **Player Score** - player gets points for each enemy killed (scores are defined in the enemy data)
- **Win/Loss Screens** - appropriate screens for when player loses (has 0 lives remaining) and wins (defeats the wave), with restart buttons to play again
- **Weapon Swapping** - player can cycle through every implemented weapon using the `<` and `>` keys

<details class="design-documentation" open>
<summary>Game Data Examples</summary>
<div markdown="1">

### Weapons & Enemy Data

This data lives in a Google Sheet, which I export to `.csv` and drop into the project for `data_loader.gd` to read at runtime. The tables below are pulled directly from those exported files, so they'll stay current as the sheet evolves. I've also linked the full `.csv` files as a downloadable reference.

#### Weapons
{% include data-table.html game_slug="space-shooter-gd" csv_name="weapons" %}

#### Enemies
{% include data-table.html game_slug="space-shooter-gd" csv_name="enemies" %}

#### Waves
{% include data-table.html game_slug="space-shooter-gd" csv_name="spawns" %}

#### Godot CSV Import Issue
This is how to fix the CSV data pulling if files cannot be found when exported to the web:
1. Check the `Import` tab (usually in the same pane as the `Scene` window)
2. If it's showing `CSV Translation`, change it to `Keep File (exported as is)`
3. `Re-Import`
4. Repeat for each CSV file

</div>
</details>

## Asset Attributions
All of the current art was made by me using Aseprite and Paint.net. The cover image was made in Canva using my sprites.

### Aseprite Files
<div class="post-body-image">
  <img src="{{ page.asset_root | append: 'asp-ssgd-characters.png' | relative_url }}" alt="Character sprites made in Aseprite">
  <figcaption>Character sprites made in Aseprite</figcaption>
</div>
