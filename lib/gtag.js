// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Log page views (called on route changes)
export const pageview = (url) => {
  // Check if both gtag and tracking ID exist
  if (typeof window.gtag !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      anonymize_ip: true, // Privacy feature
      send_page_view: false // Don't send duplicate
    })
  }
}

// Log custom events (optional - for future use)
export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}