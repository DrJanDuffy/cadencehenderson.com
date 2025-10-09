# Cadence Henderson Website

A modern Next.js website clone of [cadencenv.com](https://cadencenv.com/) - showcasing the Cadence master-planned community in Henderson, Nevada.

## Features

### Complete Website Pages

1. **Homepage** (`/`)
   - Hero section with stunning visuals
   - Home finder call-to-action
   - Amenities showcase
   - Lifestyle preview
   - Location highlights
   - Realtor section
   - News preview
   - Builder showcase grid
   - Newsletter signup

2. **New Homes** (`/new-homes`)
   - 8 builder profiles with details
   - Price range filtering
   - Home type categories
   - Interactive builder cards
   - Download resources

3. **Rentals** (`/rentals`)
   - 3 rental communities
   - Property comparison
   - Amenity listings
   - Contact options

4. **Lifestyle** (`/lifestyle`)
   - Central Park feature section
   - Events calendar
   - Parks & trails information
   - Shopping & entertainment
   - Schools overview
   - Community amenities
   - Resort-style features

5. **News** (`/news`)
   - Latest news articles
   - Category filtering
   - Photo gallery
   - Newsletter subscription
   - Media center

6. **Realtors** (`/realtors`)
   - Realtor resources
   - Current inventory
   - Pricing information
   - Sales materials
   - Client registration

7. **Contact** (`/contact`)
   - Contact form
   - Location information
   - Office hours
   - Interactive map
   - Multiple contact methods

### Technical Features

- **Fully Responsive** - Mobile-first design that works on all devices
- **Interactive Navigation** - Dropdown menus with smooth transitions
- **Modern UI/UX** - Clean, professional design with hover effects
- **Type-Safe** - Full TypeScript implementation
- **Accessible** - ARIA labels and semantic HTML
- **SEO Optimized** - Proper metadata and structure

## Tech Stack

- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - Latest React version
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

## Site Structure

### Pages
```
app/
├── page.tsx                    # Homepage with all main sections
├── new-homes/
│   └── page.tsx               # New homes listings with builder grid
├── rentals/
│   └── page.tsx               # Rental properties overview
├── lifestyle/
│   └── page.tsx               # Community lifestyle features
├── news/
│   └── page.tsx               # News articles and gallery
├── realtors/
│   └── page.tsx               # Realtor resources and tools
└── contact/
    └── page.tsx               # Contact form and information
```

### Components
```
components/cadence/
├── navigation.tsx             # Responsive navigation with dropdown menus
├── hero.tsx                   # Hero section with CTA buttons
├── home-finder.tsx            # Home search call-to-action
├── amenities-section.tsx      # Community amenities showcase
├── lifestyle-section.tsx      # Lifestyle features
├── location-section.tsx       # Location benefits
├── realtors-section.tsx       # Realtor information
├── news-section.tsx           # Latest news preview
├── builders-showcase.tsx      # Grid of home builders
├── newsletter.tsx             # Email subscription form
└── footer.tsx                 # Site footer with navigation
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

