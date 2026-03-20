// src/nextlytics.js
import { Nextlytics } from "@nextlytics/core/server";
import { googleAnalyticsBackend } from "@nextlytics/core/backends/ga";
import { isbot } from "isbot";

export const { middleware, analytics } = Nextlytics({
  // Configure analytics backends
  backends: [
    googleAnalyticsBackend({
      measurementId: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
      // ✅ API Secret is optional - only include if env var exists
      ...(process.env.GOOGLE_ANALYTICS_API_SECRET && {
        apiSecret: process.env.GOOGLE_ANALYTICS_API_SECRET,
      }),
      debugMode: process.env.NODE_ENV === "development",
    }),
  ],

  // ✅ Callbacks for bot filtering and user identification
  callbacks: {
    /**
     * ✅ Filter bots from ANALYTICS ONLY (does NOT block site access)
     * SEO bots (Googlebot, Bingbot) → Can crawl, not counted
     * GEO/AI bots (GPTBot, CCBot) → Can access, not counted
     * Humans → Tracked in analytics
     */
    async shouldTrack(req) {
      const userAgent = req.headers.get("user-agent") || "";

      // 🤖 Detect bots using isbot package (comprehensive, updated)
      const isBotDetected = isbot(userAgent);

      // 🕷️ Additional headless/automation detection
      const headlessPatterns = [
        "HeadlessChrome",
        "headless",
        "Puppeteer",
        "Playwright",
        "PhantomJS",
        "Selenium",
        "WebDriver",
        "node-fetch",
        "axios",
        "curl",
        "wget",
      ];

      const isHeadless = headlessPatterns.some((pattern) =>
        userAgent.toLowerCase().includes(pattern.toLowerCase())
      );

      // 🤖 Generic bot/crawler/scraper regex fallback
      const genericBotPattern =
        /bot|crawler|spider|scraper|httpie|python-requests|java\//i;
      const isGenericBot = genericBotPattern.test(userAgent);

      // ✅ DECISION: Exclude from analytics but allow site access
      if (isBotDetected || isHeadless || isGenericBot) {
        // Optional: Log in development for debugging
        if (process.env.NODE_ENV === "development") {
          console.log(
            `[Nextlytics] Bot excluded from analytics: ${userAgent.substring(
              0,
              80
            )}`
          );
        }
        // ❌ Return false = Don't track in analytics
        // ✅ Bot can still access site (SEO & GEO safe)
        return false;
      }

      // ✅ Return true = Track this human visitor
      return true;
    },

    /**
     * Optional: Identify authenticated users for richer analytics
     * Return null for anonymous human tracking (default)
     */
    async getUser(req) {
      // Example with NextAuth (edge-compatible):
      // const session = await auth();
      // if (!session?.user) return null;
      // return {
      //   userId: session.user.id,
      //   traits: { email: session.user.email, name: session.user.name },
      // };

      return null; // Anonymous human tracking
    },
  },

  // ✅ Privacy-friendly options
  options: {
    captureUserAgent: true, // Required for bot detection
    captureReferrer: true,  // Track traffic sources
    hashIp: true,           // GDPR compliant (hashes IPs)
  },
});