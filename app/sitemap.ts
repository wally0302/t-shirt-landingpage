import type { MetadataRoute } from "next";

import { getAllBlogMeta } from "@/lib/blog";
import { toAbsoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: toAbsoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: toAbsoluteUrl("/blog"),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  const blogPages: MetadataRoute.Sitemap = getAllBlogMeta().map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticPages, ...blogPages];
}
