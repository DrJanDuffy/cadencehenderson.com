# Cadence Henderson Website

A modern Next.js website clone of [cadencenv.com](https://cadencenv.com/) - showcasing the Cadence master-planned community in Henderson, Nevada.

## Features

- **Responsive Navigation** - Full dropdown menus for desktop and mobile
- **Hero Section** - Eye-catching landing with call-to-action buttons
- **Content Sections**:
  - Home Finder Tool
  - Amenities Overview (Central Park, pools, trails, schools)
  - Lifestyle Features (events, entertainment)
  - Location Benefits (access to airport, Las Vegas Strip, Lake Mead)
  - Realtor Resources
  - News & Updates
- **Builders Showcase** - Display of all partner home builders
- **Newsletter Signup** - Email subscription form
- **Modern Footer** - Quick links and branding

## Tech Stack

- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Latest React version
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

## Components Structure

```
components/cadence/
├── navigation.tsx       # Main navigation with dropdowns
├── hero.tsx            # Hero section with background
├── home-finder.tsx     # Home finder call-to-action
├── amenities-section.tsx
├── lifestyle-section.tsx
├── location-section.tsx
├── realtors-section.tsx
├── news-section.tsx
├── builders-showcase.tsx # Grid of builder logos
├── newsletter.tsx      # Email signup form
└── footer.tsx         # Site footer
```

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

This project is configured for Vercel deployment with:
- `vercel.json` - Specifies pnpm as package manager
- `pnpm-workspace.yaml` - Workspace configuration

### Vercel Build Fixed

The original build error (`npm ERR! Unsupported URL Type "workspace:"`) has been fixed by:
1. Replacing `"v0-sdk": "workspace:*"` with `"v0-sdk": "^0.1.42"`
2. Adding `vercel.json` to specify pnpm commands
3. Creating `pnpm-workspace.yaml` for workspace support

## Customization

### Images
Replace the placeholder Unsplash images in each section component with actual Cadence community photos.

### Content
Update text content in each component to match specific community details and messaging.

### Styling
Modify colors in Tailwind classes to match exact brand guidelines (currently using blue-900 as primary).

### Navigation Links
Update href values in `navigation.tsx` and `footer.tsx` to link to actual pages.

## License

Copyright 2025 | All Rights Reserved

