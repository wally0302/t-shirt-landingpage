import type { Metadata } from "next";
import Link from "next/link";

import { getAllBlogMeta } from "@/lib/blog";
import { siteConfig, toAbsoluteUrl } from "@/lib/site-config";

import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "穿搭指南與整理技巧",
  description: "從整理衣櫃到每日穿搭決策，持續更新可直接套用的實戰內容。",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Wardrobe Blog｜穿搭指南與整理技巧",
    description: "從整理衣櫃到每日穿搭決策，持續更新可直接套用的實戰內容。",
    url: toAbsoluteUrl("/blog")
  }
};

function formatPublishedDate(rawDate: string): string {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(rawDate));
}

export default function BlogIndexPage() {
  const posts = getAllBlogMeta();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Wardrobe Content</p>
        <h1>穿搭指南 / 最新文章</h1>
        <p>從整理衣櫃到每日穿搭決策，我們會持續提供可直接套用的內容。</p>
        <a className={styles.cta} href={siteConfig.loginUrl}>
          開始整理衣櫥
        </a>
      </header>

      <section className={styles.grid} aria-label="Blog post list">
        {posts.map((post) => (
          <article key={post.slug} className={styles.card}>
            <div className={styles.cardMeta}>
              <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
              <span>{post.readingTime}</span>
            </div>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
            <Link className={styles.cardLink} href={`/blog/${post.slug}`}>
              讀這篇
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
