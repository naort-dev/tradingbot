const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://www.trality.com',
  pagesDirectory: __dirname + "/pages",
  targetDirectory : 'static/',
  sitemapFilename: 'sitemap.xml',
  nextConfigPath: __dirname + "/next.config.js",
  ignoredExtensions: [
        'png',
        'jpg',
        'svg'
  ],
});

console.log(`✅ sitemap.xml generated!`);