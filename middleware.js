// src/middleware.js
import { middleware } from "./nextlytics";

// ✅ Export the middleware with nodejs runtime
export { middleware };

// ✅ Set runtime to nodejs (fixes Vercel build error)
export const runtime = 'nodejs';

// ✅ Match all routes except static assets and API
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};