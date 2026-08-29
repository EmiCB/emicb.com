---
layout: game

title: "Core TD"
date: 2026-08-13
date_range: "August 2026"
category: coursework
course: "UEFN Bootcamp"
is_draft: true

asset_root: "/assets/images/games/core-td/"
featured_image: "thumbnail.png"
videos:
- "https://www.youtube.com/embed/i6AsvPUjdTg?si=NwFwEqgcTFBrEWMh"
gallery:
- "thumbnail.png"

# Technical Tags
tags:
- UEFN
- Verse

# Design Focus Tags
design_tags:
- Systems
- UX

# Team Info
team_type: "solo"
my_role: "Designer & Programmer"

links:
- name: "View on Fortnite.GG"
  url: "https://fortnite.gg/island/2999-7858-8150"
  icon:
- name: "Bootcamp Completion Badge"
  url: "https://www.credential.net/ff90813f-a3c7-4fb6-b325-8a2d498b0db0#acc.XBpCMRJx"
  icon:
---

Defend your core from waves of enemies on this Fortnite island

<!--more-->

This is my submission from the UEFN Student Bootcamp.

## My Contributions
I did all of the design and programming for this Fortnite island.

## Design Documentation

## Current Implementation Details

#### Orchestration
- happens in `game_controller.verse`
- base health
- state management (prep, wave)
- player economy

#### Waves of Enemies
- controlled by `wave_manager.verse`
- custom wave config to make adding waves highly configurable and easy
  - can define which spawners to use, how many mobs, spawning interval
  - can add multiple of these configs for each wave
  - NOTE: need to manually enter a spawner ID for now to avoid multiple subscriptions to the same spawner
- hand-placed `NPC Spawner Devices` using custom `NPC Character Definition`
  - chose this to make it easy to create new enemies with different stats in the future
- each spawner follows a hand-placed route of `AI Patrol Path Nodes`, moving to and ending at the Core
  - uses custom behavior `path_follower_behavior.verse`
- enemies are damaged by Turrets (but not players)
- enemies are eliminated once they reach the core and inflict 1 point of damage onto it
- each wave is started by the player pressing a `Button Device`
- enemies and waves reward currency upon elimination

#### Core
- health defined in `game_controller.verse`
- game ends when Core health reaches 0
- basic text UI at top to show current core health
- player UI text notification when core is hit

#### Towers
- using `Automated Turret Device` for these
  - NOTE: want to be able to add different types of turrets to select from and build in the future
- disabled Fortnite native build system in favor of custom one
  - NOTE: want this custom system to eventually be similar to Lego Odyssey's
- basic system for now:
  - controlled with `custom_build_system.verse`
  - pool of turret game objects (to avoid repeated spawning and deleting)
  - activate build mode with aim action (right-click on PC) configured in a `Player Input Device`
    - shows a ghost version for accurate turret placement
    - snaps to floor
  - place turrets with fire action (left-click on PC) in another `Player Input Device`
  - costs currency to place, will not place if not enough

#### Resources
- resource nodes made with `Prop Manipulator Device` to allow player to break objects inside the area and receive resources
- NOTE: feature not included in final build as a result of re-scoping

#### Current Holes in Design
- no tutorial or intro in place yet
  - want this to be frictionless and also not require reading
  - easy to understand within the first 30-60 seconds

## Playtesting
- Conducted repeated playtests to iterate the gameplay on

## Challenges
- Missed a couple of days of work due to health issues, so needed to do some re-scoping