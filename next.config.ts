import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

// If deploying as https://<user>.github.io/<repo>, set repo to repository name.
// If deploying as https://<user>.github.io, leave repo empty string.
const repo = "t-shirt-landingpage";
const isProjectSite = repo.length > 0;
const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  turbopack: {
    root: projectRoot
  },
  ...(isProjectSite
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`
      }
    : {})
};

export default nextConfig;
