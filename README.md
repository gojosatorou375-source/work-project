# SISU Platform (Executed Blueprint)

This repository now contains an implementation-ready monorepo scaffold for the SISU premium mentorship platform:

- `apps/web`: Next.js + Tailwind + Framer Motion + GSAP premium website and dashboards
- `apps/api`: Express + Socket.IO service for intake/approval workflow events
- `packages/types`: shared domain types

## Implemented Features

- Apple-style storytelling homepage with section-based narrative and motion
- SPI EDGE animated pillar section (GSAP ScrollTrigger)
- Booking page with AI-style intake form (`/book`)
- Request lifecycle API routes: approve, reject, reschedule
- Client dashboard shell (`/client`)
- RATS dashboard with approval controls (`/rats`)
- Backend API server with WebSocket events for request updates

## Quick Start

```bash
npm install
npm run dev:web
npm run dev:api
```

Open:
- Web: `http://localhost:3000`
- API: `http://localhost:4000/health`
