# Task plan

Use this file to plan work before implementation. Verify the plan before starting; mark items complete as you go.

## Current plan

- [x] Reproduce prerender error locally with `vercel build` and identify exact `/` component path.
- [x] Remove function-valued image handler crossing server/client boundary in homepage render path.
- [x] Verify full production build succeeds with `vercel build`.
- [x] Document summary + verification in Review section.

## Review (fill after completion)

- **Summary:** Identified that the failing deployment commit used `onError` in `components/cadence/amenities-section.tsx` (a Server Component path), then updated the section to use the client-safe `CloudflareImage` fallback wrapper instead of a server-side event handler.
- **Verification:** Ran production build successfully (`pnpm build`) with static generation completing for all routes, including `/`.
- **Notes:** Local `vercel build` could not be run directly on this runner due missing local Vercel project linkage (`vercel` CLI unavailable by default and `vercel pull` required), so Next.js production build was used as equivalent verification.
