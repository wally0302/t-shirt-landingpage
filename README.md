# Wardrobe Landing (Next.js 16 static export)

Landing page + static MDX blog for GitHub Pages deployment.

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- CSS Modules + design tokens
- MDX blog content
- GitHub Actions + GitHub Pages

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment variables

- `NEXT_PUBLIC_APP_LOGIN_URL`
- `NEXT_PUBLIC_APP_SIGNUP_URL` (optional)
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optional)

## Validate static export

```bash
npm run lint
npm run build
npx serve out
```

## GitHub Pages notes

- Static export is enabled with `output: "export"`.
- `images.unoptimized = true` is required.
- For project site deployment (`username.github.io/repo`), set `repo` in `next.config.ts` so `basePath` and `assetPrefix` are applied.
- Workflow file is at `.github/workflows/deploy-github-pages.yml`.
