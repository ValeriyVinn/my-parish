/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://parish-ten.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/aid', '/calendar', '/gallery'],
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};