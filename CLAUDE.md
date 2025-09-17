# Barrie Transit Platform Signs

## Project Overview
Digital platform sign system for Barrie Transit displaying bus routes, platform numbers, and service alerts. Designed for 320x80px digital signage displays with 14 platform-specific pages.

## Key Features
- **Display Size**: Optimized for 320x80px landscape displays
- **14 Platform Routes**: Accessible via `/platform/1` through `/platform/14`
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
│   ├── index.js              # Home page with platform selector
│   ├── platform/[id].js      # Dynamic platform display
│   ├── _app.js              # Next.js app wrapper
│   └── _document.js         # Document configuration
├── data/
│   └── busRoutes.js         # Bus route data with colors
├── styles/
│   ├── globals.css          # Global styles
│   ├── Platform.module.css  # Platform display styles
│   └── Home.module.css      # Home page styles
├── public/                  # Static assets
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
└── vercel.json             # Vercel deployment config
```

## Platform Routes Data

### Platform 13
- Route 101: Blue (Light blue #4FC3F7 with white border)
- Route 12B: Park Place (Dark pink #C2185B)

### Platform 14
- Route 100: Red (Dark red #8B0000)
- Route 12A: Georgian Mall (Dark pink #C2185B)

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

## URLs
- Home: `/`
- Platform 1-14: `/platform/[1-14]`
- Example: `/platform/13` shows Platform 13 with routes 101 (Blue) and 12B (Park Place)

## Design Specifications
- Font: Inter (400, 600, 700, 900 weights)
- Primary Color: Barrie Blue RGB(0, 86, 128)
- Alert Color: Orange #ff6b00
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