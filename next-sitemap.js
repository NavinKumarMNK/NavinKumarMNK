/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://megnav.me',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  },
  sitemapSize: 10000
}
