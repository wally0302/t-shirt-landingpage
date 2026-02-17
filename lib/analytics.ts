export type AnalyticsEventName =
  | "landing_view"
  | "landing_click_primary_cta"
  | "landing_click_secondary_cta"
  | "landing_click_feature_card"
  | "landing_click_blog_preview";

type AnalyticsPayload = {
  source?: string;
  locale?: string;
  device_type?: "mobile" | "tablet" | "desktop";
  timestamp?: string;
  [key: string]: string | number | undefined;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function getDeviceType(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") {
    return "desktop";
  }

  if (window.innerWidth < 768) {
    return "mobile";
  }

  if (window.innerWidth < 1100) {
    return "tablet";
  }

  return "desktop";
}

export function trackEvent(event: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") {
    return;
  }

  const enrichedPayload = {
    source: payload.source ?? "landing",
    locale: payload.locale ?? "zh-TW",
    device_type: payload.device_type ?? getDeviceType(),
    timestamp: payload.timestamp ?? new Date().toISOString(),
    ...payload
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    ...enrichedPayload
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, enrichedPayload);
  }
}
