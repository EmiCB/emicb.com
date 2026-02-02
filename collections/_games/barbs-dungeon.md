---
layout: game

title: "Barb's Dungeon"
date: 2024-05-10
date_range: "May 2024"
category: coursework
is_draft: false

asset_root: "/assets/images/games/barbs-dungeon/"
featured_image: "character-select.png"
videos:
- "https://www.youtube.com/embed/wAk4BwZ2ROM" # Game start
- "https://www.youtube.com/embed/cLejL4XirZI" # Dungeon generation
- "https://www.youtube.com/embed/kEHQhjfKa68" # Boss fight
gallery:

# Technical Tags
tags:
- Unity
- C#

# Design Focus Tags
design_tags:
- Systems
- UX

# Team Info
team_type: "6 person"
my_role: "Programmer & Designer"

links:
- name: "View source on Github"
  url: "https://github.com/EmiCB/Barbs-Dungeon"
  icon: 
---

A roguelite dungeon crawler with procedural generation, strategic combat, and character progression systems developed through an iterative production pipeline

<!--more-->

This was my team's final project for our **GSD 405: Video Game Development Process** course. For this assignment, our team selected a previous design concept from a past semester of the (separate) game design course. We were tasked with modifying and refining this existing design, creating a comprehensive implementation plan, and executing the full game production cycle over the semester. The project emphasized professional game development workflows including pre-production planning, milestone tracking, and iterative development based on feedback.

## Features

- **Procedural dungeon generation** - Randomly generated floor layouts using an algorithm that creates varied, interconnected rooms
- **Strategic combat system** - Dynamic combat with melee and ranged weapon options, dodge mechanics, and tactical positioning
- **Character progression** - Multiple playable character classes with unique stat distributions and playstyles
- **Inventory system** - Item management with stacking, consumables, and descriptions
- **UI/UX systems** - Class selection screen, main menu, pause menu, death screen, resource bars, and dungeon minimap
- **Enemy Variety** - Basic enemy and boss with different behaviors and stats
- **Room-based exploration** - Handcrafted room designs translated into Unity prefabs for procedural assembly

## My Contributions

As one of two **Programmers** on a 6-person team, I was responsible for implementing core gameplay systems and UI functionality. My work focused on player interaction, combat mechanics, and creating the user-facing systems that translated the design documents into playable experiences. I also contributed to the level design with handcrafted rooms and helped make decisions for the design modifications in the initial phase.

#### Player Systems
- **Controls** - Implemented core player movement mechanics
- **Resources** - Health, mana, and stamina resources that can deplete and regenerate
- **Stats** - Hidden RPG stats for Defense, Strength, Dexterity, Lethality, Intelligence, Wisdom, Agility
- **Combat mechanics** - Programmed melee and ranged weapon systems, and dodge mechanics
- **Class selection** - Developed player class selection screen and system

#### Progression & Inventory
- **Class and weapon stats** - Implemented stat system using Unity Scriptable Objects for quick, data-driven class and weapon configuration
- **Inventory system** - Built full inventory management including item selection, stacking logic, and description panel UI
- **Consumable items** - Implemented item usage and effects system

#### UI Implementation
- **Menu systems** - Created main menu, pause menu, and death screen
- **Class selection UI** - Designed and implemented class selection interface
- **In-game UI** - Created inventory panels and item descriptions

#### Content & Polish
- **Room prefab creation** - Designed and translated room layouts into Unity prefabs for the procedural generation system
- **Basic enemy implementation** - Programmed base enemy functionality and behaviors
- **Bug fixes** - Debugged and resolved issues throughout development cycle

#### Collaboration
- Worked closely with designers to ensure technical implementation matched design intent
- Playtested and implemented balance adjustments
- Contributed to team discussions on scope management and feature prioritization

---

## Design Documentation

The following comprehensive design documents were modified / created by our team during pre-production and production. Since these are all living documents, we kept a detailed **[Changelist]({{ site.baseurl }}/assets/documents/barbs-dungeon/Changelist.pdf?v={{ site.time | date: "%s" }})** to track any modifications we made throughout the process.

#### Pre-Production Documents
- **[Vision Canvas, Asset List & Feature List]({{ site.baseurl }}/assets/documents/barbs-dungeon/1-VisionCanvas-AssetList-FeatureList.pdf?v={{ site.time | date: "%s" }})** - Core vision, prioritized features, and required assets
- **[Game Description]({{ site.baseurl }}/assets/documents/barbs-dungeon/3-BarbsDungeonDescription.pdf?v={{ site.time | date: "%s" }})** - High-level game concept and player experience goals
- **[Narrative & Lore]({{ site.baseurl }}/assets/documents/barbs-dungeon/2-BarbsDungeonNarrativeLore.pdf?v={{ site.time | date: "%s" }})** - Setting, world-building, and narrative framework
- **[Pre-Production Milestone Plan]({{ site.baseurl }}/assets/documents/barbs-dungeon/10-PreProductionMilestonePlan.pdf?v={{ site.time | date: "%s" }})** - Development timeline and deliverable tracking

#### System Design Documents
- **[Game Loops]({{ site.baseurl }}/assets/documents/barbs-dungeon/4-GameLoops.pdf?v={{ site.time | date: "%s" }})** - Visual diagrams showing system interactions and player flow
- **[System List]({{ site.baseurl }}/assets/documents/barbs-dungeon/8-SystemList.pdf?v={{ site.time | date: "%s" }})** - Comprehensive breakdown of all game systems and their requirements
- **[Technical Design Document]({{ site.baseurl }}/assets/documents/barbs-dungeon/6-TechnicalDesignDoc.pdf?v={{ site.time | date: "%s" }})** - Technical specifications for system implementation
- **[Beat by Beat]({{ site.baseurl }}/assets/documents/barbs-dungeon/5-BeatByBeat.pdf?v={{ site.time | date: "%s" }})** - Detailed progression through gameplay experience

#### Art & Polish Documents
- **[Art Style Guide]({{ site.baseurl }}/assets/documents/barbs-dungeon/7-ArtStyleGuides.pdf?v={{ site.time | date: "%s" }})** - Visual direction, color palette, and asset specifications
- **[Tone Target]({{ site.baseurl }}/assets/documents/barbs-dungeon/8-ToneTarget.jpg?v={{ site.time | date: "%s" }})** - Reference imagery for desired aesthetic and mood
- **[Prototype Documentation]({{ site.baseurl }}/assets/documents/barbs-dungeon/7-Prototype.pdf?v={{ site.time | date: "%s" }})** - Early prototype evaluation and iteration notes

#### Quality Assurance
- **[QA Test Plan]({{ site.baseurl }}/assets/documents/barbs-dungeon/9-QATestPlan.pdf?v={{ site.time | date: "%s" }})** - Testing procedures, bug tracking, and quality benchmarks
