# SISU — Production-Ready Product, UX, Motion, and Platform Blueprint

## A) Full Website Architecture

### 1. Product Architecture (High Level)
- **Public Marketing App** (Next.js App Router)
  - Premium landing and storytelling pages
  - SEO-optimized content surfaces
  - Primary conversion funnel to AI-led booking
- **Authenticated Client App** (same Next.js app, protected routes)
  - Chat-first mentorship requests
  - Session tracking, progress dashboard, history
- **Authenticated RATS Admin App** (role-based route group)
  - Request triage (approve/reject/reschedule)
  - Calendar control and AI summaries
- **Backend API Layer** (NestJS preferred for scalability)
  - Auth, booking orchestration, availability, notifications
  - LLM extraction pipeline and summarization
- **Realtime & Job Layer**
  - WebSockets (status updates, chat events)
  - Queue workers (emails, calendar sync, reminder jobs)
- **Data Layer**
  - PostgreSQL + Redis
  - Object storage for optional attachments

### 2. Monorepo Structure
```
/apps
  /web               # Next.js site + dashboards
  /api               # NestJS API
/packages
  /ui                # shared design system (Tailwind + tokens)
  /types             # shared TS contracts
  /config            # eslint, tsconfig, prettier presets
  /utils             # date, analytics, formatting helpers
/infrastructure
  /terraform         # cloud infra IaC
  /docker            # images, compose for local dev
/docs
  /architecture
```

### 3. Route Map (Next.js)
- `/` Home (storytelling landing)
- `/methodology` SPI EDGE deep-dive
- `/workshops` Workshop formats
- `/book` AI booking entry
- `/login`, `/signup`
- `/client` Client dashboard
- `/client/sessions`, `/client/progress`, `/client/history`
- `/rats` Mentor dashboard
- `/rats/requests`, `/rats/calendar`, `/rats/clients`

---

## B) Page-by-Page UI Breakdown

## 1) Home (`/`)
### Hero (100vh, cinematic)
- Headline: **“Reimagine Performance. Build Your Edge.”**
- Subhead: premium value proposition for founders/operators
- CTA primary: **Book Your Session**
- CTA secondary: **Explore SPI EDGE**
- Motion: layered parallax typography + subtle depth gradient + scroll hint

### Section: What is SISU
- 2-column narrative: “Mentorship + systems + execution discipline”
- Cards: long-term transformation, AI-era advantage, operator mindset

### Section: SPI EDGE Framework
- Horizontal sticky scrollytelling section
- 3 framework pillars as animated modules:
  1. Leadership Development
  2. Operational Excellence
  3. Strategic Execution
- Progressive reveal with benchmark indicators

### Section: How It Works
- Step timeline animation (1 → 5)
  1. AI Intake
  2. Structured diagnosis
  3. RATS review
  4. Session + execution plan
  5. Iterative progress

### Section: About RATS
- Authority-centered profile block
- Credibility signals: years, sectors, outcomes
- Photo/video slot, minimalist style

### Section: Program Structure
- Premium pricing module:
  - **₹15,000 / month**
  - **2 one-on-one sessions / month**
  - **1-year transformation commitment**
- Included capabilities as icon list

### Section: Outcomes
- KPI-oriented cards (examples):
  - Decision velocity
  - Team accountability
  - Operating rhythm maturity
  - Leadership adaptability

### Section: Workshops & Learning
- Structured session types (private, team, accelerator cohorts)
- Delivery format chips (onsite/remote/hybrid)

### Section: AI-Powered Mentorship
- Live mock chat panel (interactive)
- Explain extraction: problem, topic, urgency, preferred time

### CTA Banner
- “Book Your Session” high-contrast premium block

### Footer
- Minimal nav, policy links, contact, social

## 2) Methodology (`/methodology`)
- Full SPI EDGE explainer
- Animated diagram + practical implementation playbook
- Industry examples and execution checklist

## 3) Workshops (`/workshops`)
- Program variants and expected outcomes
- Enterprise inquiry CTA

## 4) Booking (`/book`)
- AI chat intake (150–200 words)
- Structured summary preview before submit
- Consent + submit flow

## 5) Client Dashboard (`/client`)
- Appointment status rail (pending/approved/rejected/reschedule)
- Upcoming session card, history list, progress tracker
- Embedded AI assistant for follow-up requests

## 6) RATS Dashboard (`/rats`)
- Pending queue with AI summaries
- Decision actions (approve/reject/propose slots)
- Calendar integration panel and client context drawer

---

## C) Animation & Interaction Design

### Motion Principles
- **Calm precision**: low-noise, high-intent movement
- **Depth hierarchy**: foreground text, midground assets, background gradients
- **Scroll as narrative**: each viewport = one strategic message

### Implementation Approach
- **Framer Motion** for UI micro-interactions and route transitions
- **GSAP + ScrollTrigger** for pinned storytelling, parallax layers, timelines
- **Lenis** (optional) for smooth scroll with careful accessibility fallback

### Key Motion Specs
- Hero parallax speed ratios: 0.7 / 0.9 / 1.1 layers
- Section reveal timing: 450–650ms easing (`power2.out`)
- Sticky story segments: 200–300vh scroll distance each
- Reduced motion: all transforms downgraded to fades when `prefers-reduced-motion`

### Micro-interactions
- CTA hover: soft elevation + sheen line sweep
- KPI counters animate when in viewport
- Chat bubbles stagger on appearance (40–80ms)

---

## D) Frontend Component Structure

### Design System (`packages/ui`)
- `Button`, `Input`, `Textarea`, `Select`, `Badge`, `Card`, `Modal`, `Toast`
- `Section`, `Container`, `Headline`, `Metric`, `Timeline`, `StickyPanel`
- Tokens:
  - Color: `obsidian`, `graphite`, `ivory`, `electric-blue` accent
  - Type scale: clamp-based responsive typography
  - Spacing scale: 4/8pt system

### App Components
- `HeroScene.tsx`
- `SisuIntroSection.tsx`
- `SpiEdgeStickyStory.tsx`
- `HowItWorksTimeline.tsx`
- `MentorProfile.tsx`
- `ProgramPricing.tsx`
- `OutcomesGrid.tsx`
- `WorkshopsShowcase.tsx`
- `AiMentorDemo.tsx`
- `BookSessionCTA.tsx`
- `ClientDashboardShell.tsx`
- `RatsDashboardShell.tsx`
- `RequestQueueTable.tsx`
- `CalendarPanel.tsx`

### State + Data
- `react-query` for server state
- `zustand` (optional) for local UI orchestration
- `zod` shared schemas for client-side validation

---

## E) Backend API Structure (NestJS)

### Services
- `auth-service`
- `users-service`
- `booking-service`
- `availability-service`
- `chat-intake-service`
- `notification-service`
- `calendar-service`
- `analytics-service`

### REST Endpoints (example)
- `POST /auth/login`
- `GET /me`
- `POST /chat/intake` (raw text 150–200 words)
- `POST /requests` (structured request create)
- `GET /requests?status=pending`
- `PATCH /requests/:id/approve`
- `PATCH /requests/:id/reject`
- `PATCH /requests/:id/reschedule`
- `GET /calendar/availability`
- `POST /calendar/events`
- `GET /client/sessions`
- `GET /client/progress`

### WebSocket Events
- `request.created`
- `request.updated`
- `session.reminder`
- `chat.reply.stream` (optional for richer bot UX)

### Security
- JWT auth + refresh tokens
- RBAC (`client`, `rats`, `admin`)
- Rate limits on chat and booking endpoints
- Audit trail for approval decisions

---

## F) AI Chatbot Design + Prompt

### NLP Objective
Given a 150–200 word user message, extract:
- `problem`
- `topic`
- `urgency` (`low|medium|high|critical`)
- `preferred_time` (normalized datetime window)
- `goal_horizon` (30/90/365 days if inferable)

### LLM Pipeline
1. Input moderation + PII screening
2. Extraction prompt -> strict JSON output
3. Validation via `zod`
4. Confidence scoring
5. Save to DB + create `pending` request
6. Generate short AI summary for RATS dashboard

### System Prompt (Production Draft)
```txt
You are SISU Intake AI. Extract structured mentorship request data from founder/operator messages.
Rules:
1) Output valid JSON only.
2) Keep extracted fields concise and faithful to user text.
3) If uncertain, set confidence low and add clarification_question.
4) Urgency must be one of: low, medium, high, critical.
5) Preferred time should be ISO-8601 or null.

JSON Schema:
{
  "problem": "string",
  "topic": "string",
  "urgency": "low|medium|high|critical",
  "preferred_time": "string|null",
  "goal_horizon": "30_days|90_days|1_year|null",
  "summary": "string",
  "confidence": 0.0,
  "clarification_question": "string|null"
}
```

### Assistant Behavior
- If confidence < 0.7, ask 1 targeted follow-up before submission
- Always present structured preview before final submit

---

## G) Booking Workflow Logic

### Primary Flow
1. Client submits chat request
2. AI extracts structure + summary
3. Request stored as `pending`
4. RATS sees request in dashboard queue
5. RATS action:
   - **Approve** → slot selected → email + calendar event generated
   - **Reject** → client notified unavailable + prompted to resubmit
   - **Reschedule** → 3 suggested slots shared with client
6. Client confirms slot (if rescheduled)
7. Status updates broadcast in real time

### State Machine
- `draft` → `pending` → (`approved` | `rejected` | `reschedule_proposed`)
- `reschedule_proposed` → `reschedule_confirmed` → `approved`
- `approved` → `completed`
- cancellation path: `approved` → `cancelled`

### Notification Logic
- Transactional emails:
  - Request received
  - Approved with calendar invite
  - Rejected with rebooking CTA
  - Reschedule options
  - Reminder T-24h and T-1h

---

## H) Database Schema (PostgreSQL)

### Core Tables
- `users`
  - id, role, name, email, phone, timezone, created_at
- `client_profiles`
  - user_id (FK), company_name, stage, team_size, goals_json
- `mentorship_requests`
  - id, client_id, raw_message, problem, topic, urgency,
  - preferred_time_start, preferred_time_end,
  - ai_summary, ai_confidence,
  - status, mentor_notes, created_at, updated_at
- `request_events`
  - id, request_id, event_type, actor_id, payload_json, created_at
- `sessions`
  - id, request_id, client_id, mentor_id, scheduled_start, scheduled_end,
  - meeting_link, calendar_event_id, status, notes
- `progress_entries`
  - id, client_id, period_start, period_end, kpi_json, reflection, created_at
- `availability_slots`
  - id, mentor_id, start_at, end_at, is_booked
- `notifications`
  - id, user_id, channel, template, status, sent_at

### Indexing
- `mentorship_requests(status, created_at)`
- `sessions(client_id, scheduled_start)`
- `availability_slots(mentor_id, start_at, is_booked)`

---

## I) Deployment Plan

### Infrastructure
- **Frontend**: Vercel (global edge)
- **API**: Render/Fly/AWS ECS (containerized NestJS)
- **DB**: Managed PostgreSQL (Neon/RDS)
- **Redis**: Upstash/ElastiCache
- **Queue**: BullMQ
- **Storage**: S3-compatible

### Environments
- `dev`, `staging`, `prod`
- GitHub Actions CI/CD:
  - lint + test + build
  - migrate DB in controlled step
  - deploy with health checks + rollback

### Observability
- Logs: structured JSON (pino)
- APM: OpenTelemetry + Grafana/Datadog
- Error tracking: Sentry
- Uptime checks on `/health` and key journeys

---

## J) Performance Optimization Strategy

### Frontend
- Use Next.js App Router + partial prerendering
- Server components for content-heavy sections
- Lazy-load heavy motion bundles (`dynamic import` GSAP scenes)
- Responsive images (`next/image`, AVIF/WebP)
- Font optimization via variable fonts + subset
- Defer non-critical scripts (chat demo only after idle)

### Motion Performance
- Use `transform` and `opacity` only for animations
- Avoid large repaint areas and fixed background jank
- Throttle scroll listeners and use RAF scheduling
- Cap simultaneous animated nodes in viewport

### API Performance
- Caching availability queries (Redis)
- Queue outbound emails/calendar jobs (async)
- Pagination for dashboard lists
- Connection pooling and query optimization

### Quality Targets
- Lighthouse: **>90** for Performance/Accessibility/SEO
- LCP: <2.0s on 4G mid-tier mobile
- INP: <200ms
- CLS: <0.1

---

## Recommended Execution Phases
1. **Foundation (Week 1–2)**: Design system, IA, auth, DB schema
2. **Conversion Site (Week 3–4)**: Landing + motion + booking intake
3. **Workflow Core (Week 5–6)**: Approval lifecycle + notifications + calendar sync
4. **Dashboards (Week 7–8)**: Client + RATS panels + progress tracking
5. **Hardening (Week 9)**: QA, accessibility, performance tuning, analytics
6. **Launch (Week 10)**: Staging signoff, production rollout, monitoring

This blueprint is intentionally implementation-ready and aligned to SISU’s premium brand positioning, long-term mentorship model, and AI-augmented operating workflow.
