module.exports = {
  siteUrl: `https://${process.env.NEXT_PUBLIC_BASE_URL}`,
  generateRobotsTxt: true,
  exclude: ["/cms-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `https://${process.env.NEXT_PUBLIC_BASE_URL}/cms-sitemap.xml`
    ]
  }
};
