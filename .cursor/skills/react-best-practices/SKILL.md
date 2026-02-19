---
name: react-best-practices
description: Applies React and Next.js best practices for components, hooks, performance, TypeScript, testing, and error boundaries. Use when writing or reviewing React/Next.js code, components, hooks, or when the user asks for React best practices.
---

# React Best Practices

## When to Use

Apply when working with React or Next.js: new components, refactors, code review, or when the user mentions React patterns, hooks, or performance.

---

## Component Design

- **One component per file**; co-locate related types or small helpers only if short.
- **Prefer function components** and hooks; use class components only when required (e.g. error boundaries).
- **Keep components focused**: extract when a component grows beyond ~100–150 lines or has multiple responsibilities.
- **Name components in PascalCase** and files to match (e.g. `LeadForm.tsx` for `LeadForm`).
- **Props**: Explicit, typed props; avoid `any`. Single props type per component. Destructure in the signature: `function Card({ title, children }: CardProps)`.

---

## Hooks

- **Rules**: Only call hooks at the top level (no hooks in loops, conditions, or nested functions).
- **Custom hooks**: Name with `use` prefix; encapsulate stateful or effectful logic.
- **Dependencies**: Include all referenced values in dependency arrays; omit only when value is stable (setState, refs).
- **Cleanup**: Return a cleanup function from `useEffect` for subscriptions, timers, listeners.

---

## State and Data Flow

- **Lift state** only as high as needed; avoid prop drilling. Use composition or context for deep trees.
- **Avoid redundant state**: Derive values from existing state when possible.
- **Forms**: Prefer a single state object or `useReducer`; controlled inputs with one handler for many fields.

---

## Performance

- **Memoization**: Use `React.memo` for components that re-render often with same props; `useMemo`/`useCallback` when passing to memoized children or effect deps.
- **Don’t over-memoize**: Apply when you have a measured need (e.g. list items, heavy subtrees).
- **Lists**: Stable `key` (e.g. id), not array index for dynamic lists. Prefer virtualization for long lists.
- **Images**: Use Next.js `Image`; set `width`/`height` or `fill` and meaningful `alt`.

---

## Next.js (App Router)

- **Server vs Client**: Prefer Server Components. Add `'use client'` only for interactivity, browser APIs, or hooks.
- **Data**: Fetch in Server Components or async page/layout; pass data as props to Client Components.
- **Routes**: Use `app/`; route UI in `page.tsx`, shared layout in `layout.tsx`.
- **Dynamic segments**: In Next.js 15+, `params` (and `searchParams`) can be Promises—await when required.
- **Metadata**: Use `generateMetadata` or static `metadata` export.
- **Event handlers in layout**: Don’t pass functions (e.g. `onLoad`) from Server to Client; put script + handler in a Client Component (e.g. `CalendlyScripts`).

---

## TypeScript

- **Typed props**: Interface or type for every component’s props.
- **Children**: Type as `React.ReactNode` when accepting arbitrary children.
- **Events**: Use `React.ChangeEvent<HTMLInputElement>`, `React.FormEvent`, etc.
- **Strict**: Prefer strict mode; avoid `any`; use `unknown` and type guards when uncertain.
- **Custom elements**: Use `createElement('tag-name', { 'attr-name': value })` to avoid JSX intrinsic type errors for web components (e.g. RealScout widgets).

---

## Testing

- **Unit/components**: Prefer React Testing Library; query by role, label, or text; avoid implementation details.
- **User flow**: Fire events (`click`, `change`), assert on visible output and accessibility.
- **Async**: Use `findBy*` or `waitFor` for async updates; avoid raw `act` unless needed.
- **Mocks**: Mock external APIs and modules at boundaries; keep tests focused on behavior.
- **Coverage**: Prioritize critical paths and user-facing behavior over line count.

---

## Error Boundaries

- **Placement**: Wrap tree sections that can fail independently (e.g. above a widget or route segment). Use `app/error.tsx` for route-level errors.
- **Client only**: Error boundaries must be Client Components (`'use client'`); they catch errors in children and lifecycle.
- **UI**: Render a fallback (message, retry button); avoid swallowing errors in production—log or report.
- **Retry**: Expose a way to retry (e.g. `reset()` from `error.tsx`) so the user can recover.

---

## Project Context (Cadence / Next.js)

- **Contact and branding**: Use `CONTACT_INFO` from `@/components/cadence/contact-info` for NAP, phone, email, Calendly URL, RealScout URL; do not hardcode.
- **IDX/MLS**: Do not modify `components/idx/*` without explicit approval; keep MLS disclaimer and attribution.
- **RealScout**: Widgets use `createElement` for custom tags (`realscout-office-listings`, etc.); script loaded once in layout.
- **Calendly**: Script and badge init live in a Client Component; use `CalendlyLink` and `CalendlyInlineWidget` from `@/components/calendly`.
- **Agent**: Dr. Jan Duffy (never "Janet"); license S.0197614.LLC; Berkshire Hathaway HomeServices Nevada Properties.

---

## Accessibility and Markup

- **Semantic HTML**: Use `<button>`, `<nav>`, `<main>`, `<article>` instead of `<div>` for roles.
- **Forms**: `<label htmlFor>`/`id`; `<fieldset>`/`legend` for groups.
- **Focus**: Interactive elements keyboard focusable; visible focus styles.
- **Images**: Concise, accurate `alt` (or `alt=""` for decorative).

---

## Anti-Patterns to Avoid

- **Inline objects/arrays in JSX props**: New reference every render; extract or `useMemo` when passed to memoized children.
- **Hooks in callbacks/conditions**: Breaks Rules of Hooks.
- **Index as key**: Only for static, non-reorderable lists; prefer stable id.
- **Large inline styles**: Prefer Tailwind/CSS classes.
- **Server Component passing handlers**: Use Client Components for scripts with `onLoad`/callbacks.

---

## Quick Checklist for New Components

- [ ] Function component with typed props
- [ ] No hooks in conditions/loops
- [ ] Correct dependency arrays in effects/callbacks
- [ ] Semantic HTML and accessible forms where relevant
- [ ] `'use client'` only if using hooks or browser APIs
- [ ] Stable, unique keys on list items
- [ ] No unnecessary `any`; events and props typed

---

## Additional Resources

- For before/after code examples, see [examples.md](examples.md).
