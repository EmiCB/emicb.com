// Click-to-load itch.io embeds
// The iframe's src is withheld until the visitor clicks play, so the game
// (and its audio) doesn't start loading and running the moment the page loads.
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.itch-embed-play-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function() {
      const container = overlay.closest('.game-itch-embed-container');
      const iframe = document.createElement('iframe');
      iframe.src = overlay.dataset.itchSrc;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      container.replaceChild(iframe, overlay);
    });
  });
});
