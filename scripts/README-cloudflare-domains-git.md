# Cloudflare domains → Git repos

Creates a **local git repo** (and optionally a **GitHub repo** + `origin` remote) for every Cloudflare zone that has a website (A/AAAA/CNAME records or Pages custom domain).

## 1. Cloudflare API token

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **My Profile** → **API Tokens** → **Create Token**.
2. Use **Edit zone DNS** or a custom token with:
   - **Zone** → Zone → Read
   - **Account** → Account Settings → Read (optional, for Pages)
   - **Cloudflare Pages** → Pages → Read (optional, to treat Pages custom domains as “has website”)
3. Copy the token and set it:

```bash
export CLOUDFLARE_API_TOKEN="your_token_here"
```

## 2. Run the script

From the project root:

```bash
node scripts/cloudflare-domains-git-setup.mjs
```

**Test without API (dry run):** creates sample repos `example-com` and `test-site-org` under `scripts/.cloudflare-domains-git-test/`:

```bash
node scripts/cloudflare-domains-git-setup.mjs --dry-run
```

Repos are created under `../cloudflare-domain-repos/` by default (one folder per zone, e.g. `example-com`).

Override the output directory:

```bash
OUTPUT_DIR=/path/to/repos node scripts/cloudflare-domains-git-setup.mjs
```

## 3. Optional: create GitHub repos and add `origin`

Set a GitHub token (e.g. classic **repo** scope or fine-grained with “Contents” write):

```bash
export GITHUB_TOKEN="ghp_..."
```

Then run the script again (or run once with both `CLOUDFLARE_API_TOKEN` and `GITHUB_TOKEN`). For each domain it will:

- Create a GitHub repo (e.g. `example-com`) under your user.
- Add `origin` to the local repo pointing at that GitHub repo.

If the repo already exists, it only adds the remote if missing.

## Optional: Cloudflare account

If you have multiple accounts, restrict to one:

```bash
export CLOUDFLARE_ACCOUNT_ID="your_account_id"
```

Account ID is in the dashboard URL: `https://dash.cloudflare.com/<account_id>/...`
