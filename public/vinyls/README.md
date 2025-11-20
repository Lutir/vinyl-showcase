# Vinyl Album Cover Images

This directory contains album cover images for the vinyl collection.

## Current Images

The collection currently uses placeholder images. To add real album covers:

1. Find high-quality album cover images (at least 500x500px)
2. Save them in this directory with descriptive names
3. Update the `imageUrl` paths in `data/collection.json`

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 500x500px (square aspect ratio)
- **Quality**: High resolution for best display
- **Naming**: Use kebab-case (e.g., `dark-side-of-the-moon.jpg`)

## Optimization

Next.js automatically optimizes images using the Image component:

- Automatic format conversion to WebP/AVIF
- Responsive image sizing
- Lazy loading below the fold
- Blur placeholder during load

## Sample Images Needed

Based on `collection.json`, you need images for:

1. dark-side-of-the-moon.jpg - Pink Floyd
2. rumours.jpg - Fleetwood Mac
3. abbey-road.jpg - The Beatles
4. hotel-california.jpg - Eagles
5. thriller.jpg - Michael Jackson
6. led-zeppelin-iv.jpg - Led Zeppelin
7. born-to-run.jpg - Bruce Springsteen
8. what-s-going-on.jpg - Marvin Gaye
9. tapestry.jpg - Carole King
10. nevermind.jpg - Nirvana

## Placeholder Service

For testing, you can use placeholder services like:

- https://via.placeholder.com/500x500
- https://picsum.photos/500/500
- https://placehold.co/500x500
