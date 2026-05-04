/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://professionalresumefree.com',
  generateRobotsTxt: true,
  outDir: 'public',

  exclude: [
    // All invalid links that don't exist on your website (without trailing slashes)
    '/veterinary-resume-templates',
    '/resume-tools',
    '/resume-writing-guide',
    '/free-tools',
    '/chronological-resume-example/free-resume-formatting-checker',
    '/cover-letter',
    '/cover-letter-guide',
    '/free-cover-letter-builder',
    '/html/head/title',
    '/career-resources',
    '/career-advice',
    '/blog/best-job-boards',
    '/job-search-tips',
    '/sitemap.xml'

  ],

  transform: async (config, path) => {
    // Check if the path should be excluded (without trailing slashes)
    const excludedPaths = [
      '/veterinary-resume-templates',
      '/resume-tools',
      '/resume-writing-guide',
      '/free-tools',
      '/chronological-resume-example/free-resume-formatting-checker',
      '/cover-letter',
      '/cover-letter-guide',
      '/free-cover-letter-builder',
      '/html/head/title',
      '/career-resources',
      '/career-advice',
      '/blog/best-job-boards',
      '/job-search-tips'
    ];

    // Skip excluded paths and their subpaths
    if (excludedPaths.some(excluded => path === excluded || path.startsWith(excluded + '/'))) {
      return null;
    }

    // Return default for all other paths
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
        allow: '/',
        disallow: [
          '/veterinary-resume-templates',
          '/resume-tools',
          '/resume-writing-guide',
          '/free-tools',
          '/chronological-resume-example/free-resume-formatting-checker',
          '/cover-letter',
          '/cover-letter-guide',
          '/free-cover-letter-builder',
          '/html/head/title',
          '/career-resources',
          '/career-advice',
          '/blog/best-job-boards',
          '/job-search-tips'
        ]
      }
    ],
    additionalSitemaps: [
      'https://professionalresumefree.com/sitemap.xml'
    ]
  }
};