FROM oven/bun:1 AS bun-base

FROM ruby:3.2-slim

# Install build deps for native gems (nokogiri, etc.), git for remote_theme, and curl for the Bun installer
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    git \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Copy Bun binary from the official Bun image instead of curl-piping the installer
COPY --from=bun-base /usr/local/bin/bun /usr/local/bin/bun

WORKDIR /site

# Cache gem install layer separately from source code
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Cache bun install layer separately from source code
COPY package.json bun.lock ./
RUN bun install

COPY . .

RUN chmod +x docker-entrypoint.sh

EXPOSE 4000 35729

CMD ["./docker-entrypoint.sh"]
