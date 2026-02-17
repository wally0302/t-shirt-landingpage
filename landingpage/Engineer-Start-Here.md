# 給工程師：Landing Page 開發啟動說明

請依以下順序閱讀並執行：

1. `/Users/oaowally123/Downloads/tshirt-web/landingpage/LandingPage-Engineer-Handbook-v1.md`
2. `/Users/oaowally123/Downloads/tshirt-web/landingpage/LandingPage-Design-Spec-v1.md`
3. `/Users/oaowally123/Downloads/tshirt-web/landingpage/LandingPage-CopyDeck-v1.md`

## 開發框架與技術要求
- Framework：`Next.js 16`（App Router）
- Language：`TypeScript`
- Styling：`CSS Modules + design tokens`
- Content：`MDX`（用於 `/blog` 與 `/blog/[slug]` 靜態內容）
- Deployment：`GitHub Pages + GitHub Actions`

## 重要限制（GitHub Pages）
- 必須使用靜態輸出：`output: 'export'`
- 不可使用：`SSR / ISR / Middleware / Server Actions`
- 需設定：`images.unoptimized = true`
- 若是 project site（`username.github.io/repo`），需設定 `basePath` 與 `assetPrefix`

## 你要完成的最小交付
1. `/` Landing page
2. `/blog` 文章列表頁
3. `/blog/[slug]` 文章頁（靜態產出）
4. CTA 正確導向主產品 login URL（透過環境變數）
5. GitHub Pages workflow 部署成功

## 請直接參照範本
- `next.config` 範本：`/Users/oaowally123/Downloads/tshirt-web/landingpage/templates/next.config.ts.example`
- deploy workflow 範本：`/Users/oaowally123/Downloads/tshirt-web/landingpage/templates/deploy-github-pages.yml.example`

## 環境變數（前端公開）
- `NEXT_PUBLIC_APP_LOGIN_URL`
- `NEXT_PUBLIC_APP_SIGNUP_URL`（可選）
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`（可選）

以上請以 `LandingPage-Engineer-Handbook-v1.md` 為唯一工程主文件執行。
