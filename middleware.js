// src/middleware.js
import { middleware } from "./nextlytics";

// ✅ Export the middleware
// This runs analytics tracking but does NOT block any traffic
export { middleware };

// ✅ Match all routes except static assets and API
// IMPORTANT: We do NOT block bot paths here
// All crawlers can access your pages (SEO & GEO safe)
// Bot filtering happens in analytics layer only (nextlytics.js)
export const config = {
  matcher: [
    /*
     * Track all pages EXCEPT:
     * - API routes (/api/*)
     * - Static files (/images/*, /fonts/*, etc.)
     * - Next.js internals (_next/*)
     * - Favicon and standard files
     *
     * CRITICAL: Do NOT add bot-specific paths here
     * That would block SEO/GEO crawlers from accessing content
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};