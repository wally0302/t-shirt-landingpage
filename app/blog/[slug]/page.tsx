import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import mdxComponents from "@/components/blog/mdx-components";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";
import { toAbsoluteUrl } from "@/lib/site-config";

import styles from "./post.module.css";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatPublishedDate(rawDate: string): string {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(rawDate));
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "文章不存在"
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: toAbsoluteUrl(`/blog/${post.slug}`)
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/blog" className={styles.backLink}>
            回到文章列表
          </Link>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
            <span>{post.readingTime}</span>
          </div>
          <p>{post.description}</p>
        </header>

        <div className={styles.content}>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}
