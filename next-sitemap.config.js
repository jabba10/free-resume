/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.professionalresumefree.com',
  generateRobotsTxt: true,
  outDir: 'public',

  exclude: [
    // All invalid links that don't exist on your website
    '/veterinary-resume-templates',
    '/veterinary-resume-templates/',
    '/resume-tools',
    '/resume-tools/',
    '/resume-writing-guide',
    '/resume-writing-guide/',
    '/free-tools',
    '/free-tools/',
    '/chronological-resume-example/free-resume-formatting-checker',
    '/chronological-resume-example/free-resume-formatting-checker/',
    '/cover-letter',
    '/cover-letter/',
    '/cover-letter-guide',
    '/cover-letter-guide/',
    '/free-cover-letter-builder',
    '/free-cover-letter-builder/',
    '/html/head/title',
    '/html/head/title/',
    '/career-resources',
    '/career-resources/',
    '/career-advice',
    '/career-advice/',
    '/blog/best-job-boards',
    '/blog/best-job-boards/',
    '/job-search-tips',
    '/job-search-tips/'
  ],

  transform: async (config, path) => {
    // Check if the path should be excluded
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

    // Skip excluded paths and their trailing slash variants
    if (excludedPaths.some(excluded => 
      path === excluded || 
      path === `${excluded}/` || 
      path.startsWith(excluded + '/')
    )) {
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
          '/veterinary-resume-templates/',
          '/resume-tools',
          '/resume-tools/',
          '/resume-writing-guide',
          '/resume-writing-guide/',
          '/free-tools',
          '/free-tools/',
          '/chronological-resume-example/free-resume-formatting-checker',
          '/chronological-resume-example/free-resume-formatting-checker/',
          '/cover-letter',
          '/cover-letter/',
          '/cover-letter-guide',
          '/cover-letter-guide/',
          '/free-cover-letter-builder',
          '/free-cover-letter-builder/',
          '/html/head/title',
          '/html/head/title/',
          '/career-resources',
          '/career-resources/',
          '/career-advice',
          '/career-advice/',
          '/blog/best-job-boards',
          '/blog/best-job-boards/',
          '/job-search-tips',
          '/job-search-tips/'
        ]
      }
    ],
    additionalSitemaps: [
      'https://www.professionalresumefree.com/sitemap.xml'
    ]
  }
};