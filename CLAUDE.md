# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Chain Capitals Group Voice Agents — a Spanish-language marketing/lead-gen site for AI voice agent solutions (dental clinics, aesthetic medicine, real estate, restaurants & hotels). Full-stack TypeScript: React + Vite frontend served by an Express server.

This project was bootstrapped via Lovable (`lovable-tagger` runs in dev). Changes made via Lovable auto-commit to this repo, so be aware your branch may receive unrelated commits.

## Commands

```sh
npm run dev      # tsx watch on server/index.ts; Express + Vite middleware (HMR)
npm run build    # vite build (client → dist/public) && tsc -p tsconfig.server.json (server → dist/server)
npm start        # NODE_ENV=production tsx server/index.ts
npm run lint     # eslint .
```

No test runner is configured. Do not invent a `test` script.

### Ports

- **Local default**: `PORT` env var, falls back to `3000` (`server/index.ts`).
- **Replit dev**: workflow expects port `5000` (see `.replit`). When running on Replit, start with `PORT=5000 npm run dev`.
- **Dockerfile**: exposes `3000`, sets `PORT=3000`.

The Procfile (`npx serve -s dist`) is stale — it doesn't match the Express+tsx production setup. Use `npm start`, not the Procfile.

## Architecture

### Single-process dev/prod model

`server/index.ts` is the entry point for **both** development and production — there is no separate Vite dev server. Express decides at runtime:

- `NODE_ENV=development` → `setupVite(app, server)` mounts Vite as middleware (`server/vite.ts`), which handles HMR and transforms `client/index.html` per request.
- Otherwise → `serveStatic(app)` serves the prebuilt `dist/public` and falls back to `index.html` for SPA routing.

Consequence: when adding API routes, register them in `server/routes.ts` **before** the Vite/static middleware would otherwise capture the request. `registerRoutes` is called first in `server/index.ts`, so adding routes there is safe.

### Path aliases

Two aliases are defined in **three** places that must stay in sync:

| Alias       | Resolves to       | Configured in                                                       |
| ----------- | ----------------- | ------------------------------------------------------------------- |
| `@/*`       | `client/src/*`    | `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`              |
| `@shared/*` | `shared/*`        | same                                                                |

`shared/schema.ts` is the canonical place for types used by both client and server.

### Frontend

- **Router**: Wouter (`<Switch>` / `<Route>`), not React Router, despite `react-router-dom` being a dependency. Routes are declared in `client/src/App.tsx`. Spanish-language paths: `/`, `/politica-privacidad`, `/politica-cookies`, `/terminos`, `/agendar-cita`.
- **Data fetching**: `@tanstack/react-query` with a custom default `queryFn` (`client/src/lib/queryClient.ts`) that treats `queryKey[0]` as the URL. For one-off calls use `apiRequest(url, options)` from the same file.
- **UI**: shadcn/ui (Radix primitives) under `client/src/components/ui/`. Config in `components.json`; baseColor is `slate`, CSS variables enabled, no prefix. Add new shadcn components via the shadcn CLI so aliases (`@/components`, `@/lib/utils`, etc.) resolve correctly.
- **Styling**: Tailwind with a custom AI-themed palette. Colors use CSS variables defined in `client/src/index.css` (HSL only — the design system enforces this). Custom tokens include `ai-blue`, `ai-cyan`, `ai-green`, `ai-glow`, gradient `--gradient-ai`, and shadows `--shadow-glow`/`--shadow-soft`. Use `cn()` from `@/lib/utils` for class merging.
- **Toasts**: both `Toaster` (shadcn/Radix) and `Sonner` are mounted in `App.tsx`. Prefer Sonner for new code unless matching existing Radix toast usage.

### Supabase

`@supabase/supabase-js` is wired but inactive. The client (`client/src/integrations/supabase/client.ts`) is auto-generated — do not hand-edit it. It reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`, which are optional; the app runs without them. `supabase/config.toml` only contains a `project_id`.

### TypeScript config quirks

Strictness is intentionally relaxed across all tsconfigs (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`). ESLint similarly disables `@typescript-eslint/no-unused-vars`. Don't add stricter rules without a reason — the project is in rapid-prototyping mode.

`tsconfig.server.json` is the only config that emits (`outDir: ./dist/server`). The app/node configs are `noEmit`.

## Conventions

- New API routes: add to `server/routes.ts` under the `// Add your API routes here` marker. All API paths start with `/api` (the request logger in `server/index.ts` filters on this prefix).
- New shared types: add to `shared/schema.ts` and import via `@shared/...` from either side.
- New pages: create under `client/src/pages/` and register the route in `client/src/App.tsx` (Wouter `<Route>`). Always add the catch-all `NotFound` last.
- Site copy is in Spanish — match the existing tone in surrounding files (`Index.tsx`, the legal pages) when adding user-facing strings.

## Deployment

- **Replit**: VM deployment, build = `npm run build`, run = `npm run start`, port 5000 external 80 (`.replit`).
- **Docker**: multi-stage Node 20 build that copies the entire `/app` (including `node_modules`) to the runtime image and runs `npm start`. Listens on 3000.
