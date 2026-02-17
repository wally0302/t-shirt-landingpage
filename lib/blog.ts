import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

type BlogFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function readBlogFiles(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs.readdirSync(blogDirectory).filter((file) => file.endsWith(".mdx"));
}

function parsePostByFileName(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx$/, "");
  const absolutePath = path.join(blogDirectory, fileName);
  const rawFile = fs.readFileSync(absolutePath, "utf-8");
  const { data, content } = matter(rawFile);

  const frontmatter = data as Partial<BlogFrontmatter>;

  if (!frontmatter.title || !frontmatter.description || !frontmatter.publishedAt || !frontmatter.readingTime) {
    throw new Error(`Invalid frontmatter in ${fileName}. Required: title, description, publishedAt, readingTime`);
  }

  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    publishedAt: frontmatter.publishedAt,
    readingTime: frontmatter.readingTime,
    content
  };
}

export const getAllBlogPosts = cache((): BlogPost[] => {
  return readBlogFiles()
    .map(parsePostByFileName)
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
});

export const getAllBlogMeta = cache((): BlogPostMeta[] => {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    readingTime: post.readingTime
  }));
});

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return getAllBlogPosts().find((post) => post.slug === slug) ?? null;
}

export function getBlogSlugs(): string[] {
  return getAllBlogMeta().map((post) => post.slug);
}
