# Barrie Transit Digital Platform Signs

## Project Overview
Digital platform sign system for Barrie Transit terminals displaying bus routes, platform numbers, and service alerts. Designed for 320x80px digital signage displays with nested organization by terminal location.

## Key Features
- **Display Size**: Optimized for 320x80px landscape displays
- **Multi-Terminal Support**: Downtown Terminal (Platforms 13 & 14) and Allandale Transit Terminal (Platforms 1-14)
- **Nested Routing**: Location-based URL structure for easy management
- **Real-time Clock**: Updates every second
- **Service Alert Banner**: Scrolling announcement for terminal changes
- **Route Colors**: Visual route identification with official Barrie Transit colors
- **Barrie Blue Theme**: RGB(0, 86, 128) official branding

## Tech Stack
- Next.js 14.0.4
- React
- CSS Modules
- Vercel deployment ready

## Commands
```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run linting
```

## Project Structure
```
Platform Signs/
├── pages/
│   ├── index.js                      # Home page with terminal selector
│   ├── downtown/
│   │   ├── index.js                  # Downtown terminal platform list
│   │   └── platform/[id].js          # Downtown platform displays (13-14)
│   ├── allandale/
│   │   ├── index.js                  # Allandale terminal platform list
│   │   └── platform/[id].js          # Allandale platform displays (1-14)
│   ├── platform/[id].js              # Legacy platform routing
│   ├── _app.js                       # Next.js app wrapper
│   └── _document.js                  # Document configuration
├── data/
│   └── busRoutes.js                  # Bus route data organized by terminal
├── styles/
│   ├── globals.css                   # Global styles
│   ├── Platform.module.css           # Platform display styles
│   └── Home.module.css              # Home and terminal page styles
├── public/                           # Static assets
├── package.json                      # Dependencies
├── next.config.js                    # Next.js configuration
└── vercel.json                      # Vercel deployment config
```

## Terminal Locations

### Downtown Terminal
**Platforms:** 13 & 14

#### Platform 13
- Route 101: Blue (Light blue #4FC3F7 with black text and white border)
- Route 12B: Park Place (Dark pink #C2185B)

#### Platform 14
- Route 100: Red (Dark red #8B0000)
- Route 12A: Georgian Mall (Dark pink #C2185B)

### Allandale Transit Terminal
**Platforms:** 1-14 (Full transit hub with all Barrie Transit routes)

## Route Color Scheme
- Yellow: #FFD700 (Routes 1, 1A, 11)
- Green: #4CAF50 (Routes 2B, 3A, 3B, 4A)
- Orange: #FF8C00 (Routes 7, 7B)
- Black: #000000 (Routes 8, 8A, 8B, 8BNB)
- Purple: #9C27B0 (Routes 5, 10)
- Blue: #4FC3F7 (Route 101 - lighter for contrast)
- Red: #8B0000 (Routes 100, 100A, 100B)
- Pink: #C2185B (Routes 12A, 12B)
- Gray: #808080 (Routes 90A, 90B)

## Display Layout (320x80px)
1. **Top Banner (12px)**: Orange scrolling service alert
2. **Main Area (68px)**:
   - Platform number section (55px wide)
   - Divider line
   - Bus routes section (flexible width)
   - Clock section (65px wide)

## Deployment

### Local Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npx vercel
```
Or connect GitHub repository to Vercel for automatic deployments.

## URL Structure

### Main Navigation
- **Home**: `/` - Terminal selection page
- **Downtown Terminal**: `/downtown` - Platform selection for Downtown
- **Allandale Terminal**: `/allandale` - Platform selection for Allandale

### Platform Displays
#### Downtown Terminal
- Platform 13: `/downtown/platform/13` - Routes 101 (Blue) and 12B (Park Place)
- Platform 14: `/downtown/platform/14` - Routes 100 (Red) and 12A (Georgian Mall)

#### Allandale Transit Terminal
- Platform 1: `/allandale/platform/1` - Multiple routes with full color coding
- Platform 2: `/allandale/platform/2` - Multiple routes with full color coding
- ... (Platforms 3-14 follow same pattern)

#### Legacy URLs (Still supported)
- `/platform/13` - Redirects to Downtown Platform 13
- `/platform/14` - Redirects to Downtown Platform 14

## Design Specifications
- Font: Inter (400, 600, 700, 900 weights)
- Primary Color: Barrie Blue RGB(0, 86, 128)
- Alert Color: Black #000000 with white text
- High contrast white text on blue background
- Compact layout optimized for small displays
- Bold route numbers for visibility

## Notes
- Designed for landscape orientation digital signage
- Auto-refreshing clock component
- Scrolling alert banner for announcements
- Route colors match official Barrie Transit platform map
- Blue route (101) uses lighter shade with white border for visibility against blue background
- All text sized for readability at 320x80px resolution