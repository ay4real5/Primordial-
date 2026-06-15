"use client";

import Script from "next/script";

/**
 * Analytics component - placeholder for GA4 or other analytics
 * 
 * To enable analytics:
 * 1. Set NEXT_PUBLIC_GA_ID environment variable with your GA4 Measurement ID
 * 2. The component will automatically load the Google Analytics script
 * 
 * Example: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}
