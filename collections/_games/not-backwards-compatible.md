---
layout: game

title: "Oops, Not Backwards-Compatible"
date: 2026-09-27
date_range: "September 2026"
category: coursework
course: "GSD 551"
is_draft: false

asset_root: "/assets/images/games/"
featured_image: 
itch_embed_id: 19416549
itch_embed_width: 980
itch_embed_height: 640
videos:
gallery:

# Technical Tags
tags:
- Unity
- C#
- Web

# Design Focus Tags
design_tags:
- Level

# Team Info
team_type: "solo"
my_role: "Programmer"

links:
- name: "Play on itch.io"
  url: "https://emicb.itch.io/not-backwards-compatible"
  icon: 
- name: "View Source on Github"
  url: "https://github.com/EmiCB/GSD-551-Platformer"
  icon:
---

Uh oh, you opened your old platformer prototype after a game engine update and now the level is broken... it's up to your character to fix it from the inside! 

<!--more-->

This is the 2D platformer project for my **GSD 551: Tools & Techniques: Contemporary Techniques for Programming of Games** course. 

## Features
- **Collectibles** - objects around the map that can be picked up and contribute to unlocking new platforms and completing the level
- **Full Platformer Game Loop** - game state tracked with a `GameManager`, which ends the game and displays a win screen when all collectibles are acquired, or a lose screen when the player falls off of the map, both of which have a button to reset the game
- **Horizontal Camera Tracking** - custom script to only follow player horizontally, limiting vertical vision
- **Player Animations** - utilizes Unity's animation system to give player running and idle animations
- **Unlockable Platforms** - certain platforms can be unlocked with collectibles, see [Unique Feature: Unlockable Platforms](#rationale) for more details on why this feature was implemented and how

## Design Documentation
*Press `` ` `` to expand or collapse all sections*

<details class="design-documentation">
<summary>Unique Feature: Unlockable Platforms</summary>
<div markdown="1">

### Rationale
For my unique feature, I chose to add platforms that could be unlocked by obtaining certain amounts of collectibles for each one. I opened an old project recently, and was reminded of the horrors of upgrading to a new engine version (thankfully, this one migrated with no issues). I thought it would be fun to make a platformer based on this concept: the player is stuck in an old project that the developer decided to auto-upgrade to a new engine version, but the level broke. The player has to collect pieces of data in-game to repair platforms and complete the level. I think this adds more meaning and motivation to gathering the collectibles, while also opening up opportunities for more interesting level design.

### Implementation
#### `GatedPlatform.cs`
This class is responsible for defining and controlling each unlockable platform. The number of collectibles required to unlock a platform and the alpha used for ghosting are easily configurable through the inspector utilizing Unity's `SerializeField` property, keeping the values scoped properly.

Similar to the `Collectible` we wrote in class, the `GatedPlatform`s also register themselves to the game manager upon instantiation.

To visually distinguish these platforms from the rest of the level, I made gated platforms have a ghosting effect by changing the alpha value of their material and disabling their `TilemapCollider2D` component. I also added a world-space `TextMeshPro` element to display the current status towards unlocking a platform.

After the required amount of collectibles have been collected by the player, the platform becomes solid and the collider is enabled. This is visually shown by the platform's alpha being reset to 1 and the unlock status text disappearing.

[View the source code on GitHub](https://github.com/EmiCB/GSD-551-Platformer/blob/main/Assets/Scripts/GatedPlatform.cs)

#### `GameManager.cs`
To coordinate the `GatedPlatform`s with the rest of the game state, `GameManager` had to be updated similarly to when we added the `Collectible`s in class. 

1. Make a `List` of registered `GatedPlatform`s
```csharp
private List<GatedPlatform> _gatedPlatforms = new List<GatedPlatform>();
```

2. Create a method for `GatedPlatform` to call and register itself when each object is instantiated
```csharp
public void RegisterGatedPlatform(GatedPlatform platform) {
  _gatedPlatforms.Add(platform);
}
```

3. Update all `GatedPlatform` status when the game state changes (in this case, in the `CollectItem()` and `ResetGameplay()` methods)
```csharp
// check if any new gates are unlocked
foreach (GatedPlatform platform in _gatedPlatforms) {
  platform.UpdateGatedPlatformState(_currentCollectibles);
}
```

[View the source code on GitHub](https://github.com/EmiCB/GSD-551-Platformer/blob/main/Assets/Scripts/GameManager.cs)

#### Gated Platform prefab
Finally, we can make each `GatedPlatform` into a prefab so it can be easily re-used. Each `GatedPlatform` consists of a `Tilemap` GameObject with the `TilemapCollider2D` and `Gated Platform (Script)` components attached, as well as a `TextMeshPro` child to display the unlock status. It is also tagged with "Ground" for compatibility with they player's `GroundCheck` and set to the "Ground" sorting layer to keep the game visually consistent.

Sample Scene > GameRoot > Grid > GatedPlatforms > StatusText

Designing it this way means that each GatedPlatform Tilemap can store multiple platforms that unlock with the same number of collectibles. This can then be sorted easily in the Scene Hierarchy by naming them "GatedPlatforms_X", where X is the amount set to unlock.

Since the scale of this game is small, this approach makes the most sense from an organizational and implementation standpoint. The pattern for defining and controlling `Collectible`s has already been established, so using the same structure for `GatedPlatform`s keeps the codebase consistent and makes debugging easier. I usually try to avoid creating lots of new game objects, but using a single `Tilemap` for all of the platforms and doing per-tile toggling would be much harder to organize, program, and debug, so it makes the most sense to use multiple `Tilemap`s, sorted by the amount of collectibles needed to unlock.
</div>
</details>

## Asset Attributions
- Player model from: https://n3cloud.itch.io/2d-pixel-art-character-template-platformer-metroidvania
- Font: https://datagoblin.itch.io/monogram
- Tileset: https://ansimuz.itch.io/sunnyland-fort-of-illusion
- UI: https://oinky55.itch.io/fantasy-ui