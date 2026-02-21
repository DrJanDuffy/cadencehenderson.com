# Markdown for AI Agents Worker

Serves markdown to clients that send `Accept: text/markdown` by converting origin HTML with Workers AI `env.AI.toMarkdown()`. All other requests are proxied unchanged. One Worker can be attached to multiple domains (Free plan compatible).

## Repo / project

| Item | Path |
|------|------|
| Project root | `c:\Users\geneb\cadencehenderson.com-1` |
| Worker entry | `src/index.ts` |
| Wrangler config | `wrangler.toml` (at project root) |
| Worker name | `markdown-for-agents` |

## 1. Run Wrangler dev (first terminal)

```bash
cd c:\Users\geneb\cadencehenderson.com-1
npx wrangler dev
```

Log in via browser when prompted. Leave this terminal running; it will listen on http://localhost:8787/ once ready.

## 2. Test locally (second terminal)

```bash
curl -H "Accept: text/markdown" http://localhost:8787/
```

This hits the dev Worker. The Worker will:

- Detect `Accept: text/markdown`
- Fetch the origin HTML
- Run `env.AI.toMarkdown()` and return markdown

## 3. Test against a real domain (after adding a route)

In **Cloudflare Dashboard**:

1. Go to **Workers & Pages** → **markdown-for-agents** → **Settings** → **Routes**
2. Add a route:
   - **Route:** `*cadencehenderson.com/*` (or `cadencehenderson.com/*` depending on your DNS setup)
   - **Zone:** cadencehenderson.com

Then from a terminal:

```bash
curl -H "Accept: text/markdown" https://cadencehenderson.com/
```

This hits the deployed Worker on your real domain and returns markdown to agents that send that header.

## 4. Non-interactive / CI (token-based auth)

```bash
cd c:\Users\geneb\cadencehenderson.com-1
$env:CLOUDFLARE_API_TOKEN = "your_token_here"
npx wrangler dev
```

Use a token created in Cloudflare with at least:

- **Account** → **Workers Scripts:** Edit
- **Workers AI:** Read

This lets Wrangler and the AI binding authenticate in remote mode without interactive login.

## Wrangler config (AI binding)

In [wrangler.toml](../wrangler.toml) at project root:

```toml
[ai]
binding = "AI"
```

That exposes `env.AI` in the Worker so `env.AI.toMarkdown()` is available. Routes for multiple hostnames can be added in the Dashboard (Workers & Pages → markdown-for-agents → Settings → Routes) or via the `routes` array in wrangler.toml (see comments in that file).

## Worker logic

For the full Worker implementation see [index.ts](index.ts).

---

## Verification & rollout

### 1. Confirm primary domain (cadencehenderson.com)

- **Dashboard:** Workers & Pages → markdown-for-agents → **Routes**. Confirm route: `cadencehenderson.com/*` (or `*cadencehenderson.com/*` if your zone needs the wildcard).
- **Test:** `curl -H "Accept: text/markdown" https://cadencehenderson.com/`
- **Compare:** Open https://cadencehenderson.com/ in a browser (HTML), then inspect the curl output to confirm clean markdown.

### 2. Attach to 2–3 priority domains

For each additional zone (e.g. Summerlin, North Las Vegas, 55+):

- In Cloudflare Dashboard, add a route pointing to **markdown-for-agents**, e.g. `summerlin-domain.com/*`.
- Test: `curl -H "Accept: text/markdown" https://your-next-domain.com/`

### 3. Verify real-agent behavior

- In an LLM or script that lets you set headers, call your URLs with `Accept: text/markdown` and confirm the response is markdown, not HTML.
- Check **Cloudflare Analytics → Workers** for traffic to markdown-for-agents; keep errors at 0 or near-zero.

### 4. Safety and usage

- The Worker already sets **Cache-Control: public, max-age=300** (5 minutes) on markdown responses so Workers AI is not hit on every request.
- Monitor **Workers AI** usage in the Cloudflare Dashboard and stay within the free tier if desired.

### 5. Bulk rollout (follow-on)

Once cadencehenderson.com and 2–3 flagship sites are stable, use a rollout sheet: list remaining domains, the exact route to add for each, and a yes/no column for "markdown verified" after testing.

### Bulk rollout sheet (recommended)

Track multiple community or neighborhood domains in one place. Use the table below (or copy it into a spreadsheet) and fill a row per domain.

| Domain                | Cloudflare Zone        | Worker Route                | Route Added? (Y/N) | curl Test OK? (Y/N) | Agent Test OK? (Y/N) | Notes        |
|-----------------------|------------------------|-----------------------------|--------------------|---------------------|----------------------|--------------|
| cadencehenderson.com | cadencehenderson.com   | *cadencehenderson.com/*    | Y                  | Y                   | Y                    | Primary site |
|                       |                        |                             |                    |                     |                      |              |
|                       |                        |                             |                    |                     |                      |              |
|                       |                        |                             |                    |                     |                      |              |

- **Add each new domain as a row** — fill Domain and Cloudflare Zone (the zone that owns the domain in your Cloudflare account).
- **Add a route in the Dashboard** — Workers & Pages → markdown-for-agents → Settings → Routes. Use the Worker Route value (e.g. `*domain.com/*` or `domain.com/*`) for that zone, then set Route Added? to Y.
- **Test and mark status** — run `curl -H "Accept: text/markdown" https://<domain>/` and optionally test with an LLM/agent; set curl Test OK? and Agent Test OK? to Y when verified, and use Notes for any issues.
