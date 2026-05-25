/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://professionalresumefree.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'public',

  exclude: [],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString()
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    additionalSitemaps: [
      'https://professionalresumefree.com/sitemap.xml',
      'https://professionalresumefree.com/ai-sitemap.xml'
    ]
  }
};