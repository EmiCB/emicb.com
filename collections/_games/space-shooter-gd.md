---
layout: game

title: "Space Shooter"
date: 2026-09-01
date_range: "September 2026"
category: coursework
course: "GSD 511"
is_draft: false

asset_root: "/assets/images/games/space-shooter-gd/"
featured_image: "ssgd-cover.png"
itch_embed_id: 19118770
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
  url: "https://emicb.itch.io/space-shooter-gd"
  icon:
---

Side-shooter project for my GSD 511 course

<!--more-->

Side-shooter project for my **GSD 511: Game Development I** course.

## Controls
- Move with arrow keys

## v1.0 Features - Lecture Version
- **Data-driven design** - uses a custom auto-loaded `data_loader.gd` script to pull game data from `.csv` files
  - uses a spreadsheet as a single source of truth
  - see [Game Data Examples](#weapons--enemy-data) section for more details
- **Equipable Weapons** - a variety of weapons, each with [different stats](#weapons)
  - NOTE: weapon firing / in-game model is not implemented at this point, just in-game data pulling and weapon label
- **Enemies** - a variety of enemies, each with [different stats](#enemies)
  - NOTE: enemies are not yet implemented in game, just the data import and sprites

<details class="design-documentation" open>
<summary>Game Data Examples</summary>
<div markdown="1">

### Weapons & Enemy Data

This data lives in a Google Sheet, which I export to `.csv` and drop into the project for `data_loader.gd` to read at runtime. The tables below are pulled directly from those exported files, so they'll stay current as the sheet evolves - full `.csv` files are also linked for reference.

#### Weapons
[Download weapons.csv]({{ '/assets/documents/space-shooter-gd/weapons.csv' | relative_url }})

| Name | Damage | Fire Rate (s) | DPS |
|------|--------|----------------|-----|
| Pulse Laser | 10 | 0.2 | 50.00 |
| Plasma Cannon | 35 | 0.6 | 58.33 |
| Heavy Rocket | 90 | 1.5 | 60.00 |

#### Enemies
[Download enemies.csv]({{ '/assets/documents/space-shooter-gd/enemies.csv' | relative_url }})

| Name | HP | Speed | Screen Time (s) | TTK w/ Laser (s) |
|------|-----|-------|------------------|-------------------|
| Scout Drone | 20 | 400 | 4.8 | 0.4 |
| Armored Cruiser | 160 | 120 | 16 | 3.2 |

#### Godot CSV Import Issue
How to fix the CSV data pulling if files cannot be found when exported to the web:
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
