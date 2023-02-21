/** @type {import('next-sitemap').IConfig} */

const disallowedPath = [
  "/admin/*",
  "/comfirm/*",
  "/feed/*",
  "/groups/invite",
  "/groups/new",
  "/settings",
  "/search/*",
  "/server-sitemap.xml",
  "/404",
  "/chat",
  "/forgot-password",
  "/interests",
  "/login",
  "/notifications",
  "/privacy",
  "/register",
  "/reset-password",
  "/success-reset"
];
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: disallowedPath,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: disallowedPath
      },
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_URL}/server-sitemap.xml`
    ]
  }
};
