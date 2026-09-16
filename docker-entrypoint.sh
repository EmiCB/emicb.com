#!/usr/bin/env bash
set -e

# Run the initial JS build so build/ is populated before Jekyll starts
rm -rf build/*
bun run build.js

# Mirror CSVs from assets/documents/ into _data/ so Jekyll can parse them into tables
bun run sync-csv-data.js

# Watch JS entrypoints and rebuild on change, in the background
bun --watch build.js &

# Run Jekyll in the foreground so container logs/exit follow it
exec bundle exec jekyll serve --host 0.0.0.0 --livereload --force_polling
