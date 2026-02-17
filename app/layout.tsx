import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_TC, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { siteConfig, toAbsoluteUrl } from "@/lib/site-config";

const bodyFont = Noto_Sans_TC({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"]
});

const siteTitle = "Wardrobe / 衣櫥｜你的數位穿搭管理工具";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteTitle,
    template: `%s｜${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: toAbsoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteConfig.description,
    images: [
      {
        url: toAbsoluteUrl(siteConfig.ogImagePath),
        width: 1200,
        height: 630,
        alt: "Wardrobe / 衣櫥 Landing cover"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
    images: [toAbsoluteUrl(siteConfig.ogImagePath)]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="zh-Hant" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        {children}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
