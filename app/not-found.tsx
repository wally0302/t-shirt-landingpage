import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <section className={styles.card}>
        <p className={styles.code}>404</p>
        <h1>找不到這個頁面</h1>
        <p>可能是連結已變更，或你輸入了錯誤網址。</p>
        <div className={styles.actions}>
          <Link href="/">回首頁</Link>
          <Link href="/blog">看最新文章</Link>
        </div>
      </section>
    </main>
  );
}
