const fallbackSiteUrl = "https://username.github.io/t-shirt-landingpage";

export const siteConfig = {
  name: "Wardrobe / 衣櫥",
  description: "管理衣物、快速搜尋、結合天氣資訊的線上衣櫃。",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
  loginUrl: process.env.NEXT_PUBLIC_APP_LOGIN_URL ?? "https://app.example.com/login",
  signupUrl: process.env.NEXT_PUBLIC_APP_SIGNUP_URL,
  ogImagePath: "/og/wardrobe-landing-cover.svg"
};

export function toAbsoluteUrl(pathname: string): string {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
