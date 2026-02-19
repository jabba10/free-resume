export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Sends a pageview event to GA
export const pageview = (url) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}