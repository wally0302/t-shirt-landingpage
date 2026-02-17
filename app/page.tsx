import type { Metadata } from "next";

import LandingPage from "@/components/landing/LandingPage";
import { siteConfig, toAbsoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Wardrobe / 衣櫥｜你的數位穿搭管理工具",
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Wardrobe / 衣櫥｜你的數位穿搭管理工具",
    description: siteConfig.description,
    url: toAbsoluteUrl("/")
  }
};

export default function HomePage() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
