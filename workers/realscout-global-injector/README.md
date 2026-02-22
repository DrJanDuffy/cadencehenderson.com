# RealScout Global Injector

Cloudflare Worker that injects the RealScout widget script into HTML responses. Use for static or legacy sites that cannot add the script via layout.

## Deploy

```bash
cd workers/realscout-global-injector
npx wrangler deploy
```

## Optional: Embed ID

To inject the agent-specific embed script, add a secret:

```bash
npx wrangler secret put REALSCOUT_EMBED_ID
# Enter your embed ID when prompted
```

## Routes

Attach the Worker to your domain(s) in Cloudflare Dashboard:

1. Workers & Pages → realscout-global-injector → Settings → Routes
2. Add route: `*yourdomain.com/*`
