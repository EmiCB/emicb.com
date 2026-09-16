---
layout: post
title:  "Portfolio Prompt 1: The AI-Developer"
date:   2026-09-11 13:32:40 -0600
categories: gsd511 genAI
---

This posts responds to this portfolio prompt from my GSD 511 course:

> **Add this section to your portfolio site under an "Insights" or "Dev Blog" page:**
> 
> Write a 200–300 word reflection on your personal philosophy regarding AI in development. Consider these questions to guide your post:
> - How do you view your role changing from a "coder" to a "system architect" now that AI can generate functional code blocks instantly?
> - Describe a time when a lack of a clear plan or structural blueprint caused a project (game or otherwise) to break down when you tried to add something new. How will prioritizing system design prevent that in the future?

I'm a little bit sad that the software engineering role is changing since I usually like writing out the code myself. I like to design the system architecture and then implement it. It's easier for me to see any possible flaws along the way. I personally also am able to visualize and understand the flow and big-picture better when I read code instead of looking at a flowchart or visual programming language. However, it is nice that generative AI is able to write code so quickly. It really helps with quick prototyping or adding well-known efficient algorithms to your projects (although a lot of times these could also just be copy-pasted from Google or Stack Overflow).

A recent example of a time where a project broke down when I added a new feature was my [Core TD game in UEFN]({{ 'games/core-td.html' | relative_url }}). Since the we only had 2 weeks to work on this bootcamp project, I made a game design document and planned my systems accordingly. However, during a playtest I got feedback that the towers should be able to be moved after being placed. I had considered this as a feature I would want to add, but ended up making the initial build system more restrictive and less extensible since I was rushing to get the first playtests done. 

To add the ability for the player to move turrets, I needed to refactor the custom build system completely. I was also new to using UEFN and Verse, so I was using the Epic Developer Assistant to improve the code I put together for each system. Being unfamilliar with language and engine constraints also contributed to this issue: I assumed that I could use Fortnite's existing build system and just modify the content of what could be placed. Unfortunately, I was not able to find a way to do that and needed to create my own system which I had very limited time to design.