await Bun.build({
  entrypoints: [
    './assets/scripts/minecraft-skin.js',
    './assets/scripts/carousel.js'
  ],
  outdir: './build',
  minify: true,
  // If you need CSS bundled separately:
  // experimentalCss: true,
});

console.log('Build complete!');