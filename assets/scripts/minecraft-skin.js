/**
 * Minecraft skin portrait using: https://github.com/cosmic-fi/skin3d
 */

import * as skin3d from 'skin3d';

// set up viewport
const viewer = new skin3d.View({
  canvas: document.getElementById("skin_view_container"),
  width: 400,
  height: 600,
  skin: "assets/images/skin.png"
});

// set up animation
viewer.autoRotate = false;
viewer.animation = new skin3d.IdleAnimation();

// TODO: make player follow mouse cursor similar to MC inventory
// reference the library code
