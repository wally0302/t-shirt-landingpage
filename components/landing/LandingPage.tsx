"use client";

import Link from "next/link";
import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

import styles from "./LandingPage.module.css";

const featureCards = [
  {
    title: "30 秒新增一件衣物",
    body: "支援 JPG / PNG / WEBP，上傳後自動處理顯示尺寸。"
  },
  {
    title: "搜尋、分類、排序一次搞定",
    body: "不再靠相簿硬找，出門前直接定位你要的單品。"
  },
  {
    title: "穿搭決策更直覺",
    body: "可依定位或城市查看溫度、體感、降雨與風速。"
  },
  {
    title: "每日整理習慣",
    body: "透過每日上傳額度，讓衣櫃管理維持穩定節奏。"
  }
];

const blogPreviews = [
  {
    slug: "summer-white-tee-three-ways",
    title: "夏季白 T 三種穿法",
    excerpt: "用同一件白 T，在 5 分鐘內切換休閒、簡約與通勤版本。"
  },
  {
    slug: "commuter-capsule-wardrobe",
    title: "一週通勤膠囊衣櫥建立法",
    excerpt: "先建立最常用的 12 件單品，降低每天決策負擔。"
  },
  {
    slug: "rainy-day-outfit-checklist",
    title: "下雨天穿搭與單品準備清單",
    excerpt: "從材質、外套到備用品，避免被天氣打亂節奏。"
  }
];

const faqs = [
  {
    q: "目前支援哪些登入方式？",
    a: "目前提供 Google 登入。"
  },
  {
    q: "可以上傳哪些圖片格式？",
    a: "支援 JPG / PNG / WEBP。"
  },
  {
    q: "每日上傳限制怎麼計算？",
    a: "目前為每日固定額度，隔日重置。"
  },
  {
    q: "未來會有穿搭文章嗎？",
    a: "會，將持續更新穿搭指南與整理技巧。"
  }
];

function handleFeatureKeyDown(event: React.KeyboardEvent<HTMLElement>, title: string) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    trackEvent("landing_click_feature_card", { feature_title: title });
  }
}

export default function LandingPage() {
  useEffect(() => {
    trackEvent("landing_view");
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden />
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Wardrobe / 衣櫥</div>
          <h1 className={styles.heroTitle}>把你的衣櫥，變成可搜尋的數位空間</h1>
          <p className={styles.heroSubtitle}>
            Wardrobe / 衣櫥 讓你快速上傳、整理、查找衣物，出門前還能同步查看天氣。
          </p>
          <div className={styles.heroActions}>
            <a
              className={styles.primaryButton}
              href={siteConfig.loginUrl}
              onClick={() => trackEvent("landing_click_primary_cta", { source: "hero" })}
            >
              開始整理衣櫥
            </a>
            <a
              className={styles.secondaryButton}
              href="#features"
              onClick={() => trackEvent("landing_click_secondary_cta", { source: "hero" })}
            >
              看功能亮點
            </a>
          </div>
        </div>
        <div className={styles.heroVisual} aria-hidden>
          <div className={styles.heroVisualPanel} />
          <div className={styles.heroVisualOrb} />
          <div className={`${styles.heroVisualOrb} ${styles.heroVisualOrbSecondary}`} />
        </div>
      </header>

      <section className={`${styles.section} ${styles.storySection}`} aria-labelledby="problem-solution-title">
        <h2 id="problem-solution-title" className={styles.sectionTitle}>
          先解決你每天出門前最卡的三件事
        </h2>
        <div className={styles.splitGrid}>
          <article className={styles.panel}>
            <h3>問題</h3>
            <ul>
              <li>新買的衣服拍完照，過幾天就找不到</li>
              <li>相簿很滿，但穿搭資訊很難整理</li>
              <li>出門前要在衣櫃與天氣 App 之間來回切換</li>
            </ul>
          </article>
          <article className={`${styles.panel} ${styles.panelAccent}`}>
            <h3>解法</h3>
            <ul>
              <li>上傳後立即分類，建立可查找的衣櫃</li>
              <li>用分類、顏色、備註快速篩選</li>
              <li>同頁查看天氣，減少切換成本</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="features" className={`${styles.section} ${styles.showcaseSection}`} aria-labelledby="features-title">
        <h2 id="features-title" className={styles.sectionTitle}>
          功能亮點
        </h2>
        <div className={styles.featureGrid}>
          {featureCards.map((feature, index) => (
            <article
              key={feature.title}
              className={styles.featureCard}
              role="button"
              tabIndex={0}
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => trackEvent("landing_click_feature_card", { feature_title: feature.title })}
              onKeyDown={(event) => handleFeatureKeyDown(event, feature.title)}
            >
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className={`${styles.section} ${styles.storySection}`} aria-labelledby="how-title">
        <h2 id="how-title" className={styles.sectionTitle}>
          How It Works
        </h2>
        <ol className={styles.stepList}>
          <li>
            <span className={styles.stepNumber}>1</span>
            <p>登入帳號</p>
          </li>
          <li>
            <span className={styles.stepNumber}>2</span>
            <p>上傳衣物並加上分類/備註</p>
          </li>
          <li>
            <span className={styles.stepNumber}>3</span>
            <p>出門前依天氣與搜尋快速找到要穿的衣服</p>
          </li>
        </ol>
      </section>

      <section className={`${styles.section} ${styles.valuesSection}`} aria-labelledby="content-preview-title">
        <h2 id="content-preview-title" className={styles.sectionTitle}>
          穿搭指南（即將上線）
        </h2>
        <p className={styles.sectionDescription}>
          從整理衣櫃到每日穿搭決策，我們會持續提供可直接套用的內容。
        </p>
        <div className={styles.blogGrid}>
          {blogPreviews.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.blogCard}
              onClick={() => trackEvent("landing_click_blog_preview", { source: "landing", slug: post.slug })}
            >
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span>閱讀預告</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className={`${styles.section} ${styles.faqSection}`} aria-labelledby="faq-title">
        <h2 id="faq-title" className={styles.sectionTitle}>
          FAQ
        </h2>
        <div className={styles.faqList}>
          {faqs.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.finalCta}`}>
        <h2>今天開始，讓你的衣櫥更好找</h2>
        <p>先整理，再穿搭；把每天出門前的選擇變簡單。</p>
        <a
          className={styles.primaryButton}
          href={siteConfig.loginUrl}
          onClick={() => trackEvent("landing_click_primary_cta", { source: "final_cta" })}
        >
          開始整理衣櫥
        </a>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Wardrobe / 衣櫥</strong>
          <p>你的數位穿搭管理工具</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/">首頁</Link>
          <a href="#features">功能</a>
          <Link href="/blog">部落格</Link>
          <a href={siteConfig.loginUrl}>登入</a>
        </nav>
      </footer>
    </div>
  );
}
