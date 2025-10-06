// next.config.js
import cloudflare from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' — it kills SSR!
  // Add other config only if needed (e.g., images, env)
};

export default cloudflare(nextConfig);