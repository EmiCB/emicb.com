---
layout: single
title:  "ContainerTracker Plugin"
date:   2023-12-29 10:25:41 -0600
---
A Minecraft plugin that stores what items are in each inventory slot of every container on the server.

Java, BukkitAPI, Maven, IntelliJ, MySQL
{: .text-center}
{: .notice}

Documentation and Spigot links are under construction and will be added soon!
{: .notice--warning}

[Source Code](https://github.com/EmiCB/ContainerTracker){: .btn .btn--info} | [Documentation](){: .btn .btn--primary} | [Download on Spigot](){: .btn .btn--primary} 

## Features
- Tracking for containers (i.e. single chests, shulker boxes, barrels, furnaces, hoppers, droppers, dispensers)
- MySQL Database integration to store container and item data
- Optional tracking for physical interactions (i.e. pressure plate, trip wire, redstone ore activations)
- Toggleable debug mode to see what is being logged

## Planned
- Restructure database tables to allow more detailed item data
- Toggle for Citizens integration (currently, Citizens NPCs will activate physical interactions)
- Support for double chests

This project was made for [WHIMC](https://whimcproject.web.illinois.edu/) as a part of data collection for [INVITE](https://invite.illinois.edu/)
{: .notice--info}