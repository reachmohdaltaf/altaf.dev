import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

// Create a list of your URLs (add the URLs that should be in your sitemap)
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.7 },
  // Add other pages here...
];

// Initialize SitemapStream
const sitemapStream = new SitemapStream({ hostname: 'https://altaf-portfolio-omega.vercel.app' });

// Create the sitemap and write to file in public folder
async function generateSitemap() {
  const publicDir = path.resolve('public', 'sitemap.xml');
  const writeStream = fs.createWriteStream(publicDir);

  sitemapStream.pipe(writeStream);
  urls.forEach(url => sitemapStream.write(url));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log('Sitemap generated successfully in the public folder!');
}

generateSitemap();
