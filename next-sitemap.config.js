/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.professionalresumefree.com',
  generateRobotsTxt: true,
  outDir: 'public',

  exclude: [
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
};
