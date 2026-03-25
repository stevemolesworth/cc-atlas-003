# Connected Compliance Atlas — Context for Claude

## Current State
- Version: v5
- Last updated: 2026-03-25

## What This Is
A Connected Compliance prototype built with Vite + React + MUI v7 + Diligent Atlas design system.
Demonstrates a compliance dashboard, quarterly report canvas with AI chat editing, and report management.

## Who It's For
Diligent design team — used for concept exploration and stakeholder demos.

## Tech Stack
- Vite + React + TypeScript
- MUI v7 (`@mui/material`, `@mui/x-date-pickers`)
- `@diligentcorp/atlas-react-bundle` (Atlas design system)
- React Router v7
- dayjs (date adapter for MUI date pickers)

## Key Decisions
- `PageHeader` uses `buttonArray` prop (not `actions`) for header buttons
- `StatusIndicator` colors: `warning`, `success`, `error`, `information`, `disabled`, `generic`, `subtle`
- Atlas theme does not register `color="error"` on Button — use `sx={{ '&&': { bgcolor: '#d32f2f' } }}` to force red
- `useBlocker` from React Router requires data router — not compatible with `<Routes>`. Use manual `guardedNavigate` + modal instead.
- Nav collapse: `AppLayout` has no prop for this. Use a `useEffect` in `App.tsx` to query the `mock-hb-global-navigator` shadow root and click the toggle button after mount.

## Vibe Sharing Deployment

### ⚠️ Important: Avoid Vercel framework mis-detection
When `import_repo` creates a **new** Vercel project, Vercel auto-detects the framework before reading `vercel.json` and may lock it as Next.js — causing the build to fail with "No Next.js version detected."

**Fix:** Reuse an existing working prototype ID instead of creating a new one each time.
Pass `prototype_id` of an already-working deployment so no new Vercel project is created and the framework setting (Vite) is preserved.

Only use a new `deploy_name` (new Vercel project) when a permanently separate URL is genuinely needed.

Current working deployments:
- v4: prototype `ec686b28-5912-426d-b3f5-23f2f317b5d7` → `cc-atlas-004.vercel.app`
- v5: prototype `851276d5-e6a8-4874-9f62-b1266c4e820e` → `cc-atlas-005.vercel.app` (pending fix)

`vercel.json` must remain at repo root with:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Routes
- `/` — D1P AI assistant home
- `/connected-compliance` — Dashboard (posture overview, product tiles, recent reports)
- `/reports` — Report list with sorting, pagination, create/duplicate modal
- `/reports/q1-2026` — Report canvas + AI chat (split view)
- `/settings` — Settings placeholder
- `/styles` — Atlas component reference page
