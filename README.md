# Barrie Transit Platform Signs

Digital signage system for Barrie Transit platform displays optimized for 320x80 pixel screens.

## Features

- **14 Platform Routes**: Accessible via `/platform/1` through `/platform/14`
- **Exact Display Size**: Optimized for 320px × 80px digital signage displays
- **Live Clock**: Auto-refreshing time display updated every second
- **Service Alerts**: Scrolling banner for important announcements
- **High Contrast Design**: Using official Barrie Transit blue (RGB 0, 86, 128)
- **Bus Route Display**: Shows route numbers and destinations for each platform

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the platform index.

Access individual platforms at:
- [http://localhost:3000/platform/1](http://localhost:3000/platform/1)
- [http://localhost:3000/platform/2](http://localhost:3000/platform/2)
- ... through platform 14

## Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

Or use Vercel CLI:
```bash
npx vercel
```

## Display Specifications

- **Width**: 320px
- **Height**: 80px
- **Orientation**: Landscape
- **Refresh Rate**: 1 second (for clock)
- **Color Scheme**: High contrast with Barrie Transit blue

## Platform Routes

Each platform displays mock bus routes with realistic Barrie Transit route numbers (1, 2, 3A, 4B, 5, 6, 7, 8, 90A, 90B, 100A, 100B, etc.) and destinations.

## Technologies

- Next.js 14
- React 18
- CSS Modules
- Optimized for Vercel deployment