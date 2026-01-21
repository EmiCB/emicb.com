/**
 * Minecraft skin portrait using: https://github.com/cosmic-fi/skin3d
 */

import * as skin3d from 'skin3d';

// Set up viewport
const viewer = new skin3d.View({
  canvas: document.getElementById("skin_view_container"),
  width: 400,
  height: 600,
  skin: "assets/images/skin.png"
});

// Set up animation
viewer.autoRotate = false;
viewer.animation = new skin3d.IdleAnimation();

// Disable zooming
viewer.controls.enableZoom = false;

// Player follow mouse cursor similar to MC inventory

// Wait for model to load, then set up mouse tracking
setTimeout(() => {
  console.log('=== Debugging Viewer Structure ===');
  console.log('Viewer:', viewer);
  console.log('Viewer.scene:', viewer.scene);
  console.log('Viewer.playerObject:', viewer.playerObject);
  
  // Log all objects in the scene
  if (viewer.scene) {
    viewer.scene.traverse((object) => {
      console.log(`Object: type=${object.type}, name="${object.name}"`, object);
    });
  }
  
  // Track mouse movement across entire webpage
  let debugCount = 0;
  document.addEventListener('mousemove', (event) => {
    // Get mouse position relative to viewport center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate normalized coordinates
    // For X: left = -1, center = 0, right = 1
    // For Y: bottom = -1, center = 0, top = 1 (inverting screen coordinates)
    const normalizedX = (event.clientX - centerX) / centerX;
    const normalizedY = (centerY - event.clientY) / centerY;
    
    // Apply rotation limits (similar to Minecraft inventory)
    const maxRotationY = Math.PI / 6; // 30 degrees for left/right
    const maxRotationX = Math.PI / 8; // 22.5 degrees for up/down
    
    // Calculate rotation values
    const rotationY = normalizedX * maxRotationY;
    const rotationX = -normalizedY * maxRotationX; // Negative because Three.js X-axis rotation is inverted
    
    // Debug logging (only every 30 frames to avoid spam)
    if (debugCount % 30 === 0) {
      console.log('Mouse Y:', event.clientY, '| normalizedY:', normalizedY.toFixed(2), '| rotation.x:', rotationX.toFixed(2));
    }
    debugCount++;
    
    // Try to find and rotate the head in the scene
    if (viewer.scene) {
      viewer.scene.traverse((object) => {
        // Look for head object by name
        if (object.name && (object.name.toLowerCase() === 'head' || object.name === 'playerHead')) {
          object.rotation.y = rotationY;
          object.rotation.x = rotationX;
        }
      });
    }
    
    // Try rotating the player object if it exists
    if (viewer.playerObject) {
      if (viewer.playerObject.head) {
        viewer.playerObject.head.rotation.y = rotationY;
        viewer.playerObject.head.rotation.x = rotationX;
      } else {
        // Rotate entire player if head isn't accessible
        viewer.playerObject.rotation.y = rotationY;
        viewer.playerObject.rotation.x = rotationX;
      }
    }
  });
}, 1000); // Wait 1 second for model to load
