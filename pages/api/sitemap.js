import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Determine base URL from request headers
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  // List of static pages to include in the sitemap
  const staticPages = ['', '/about', '/contact', '/blog'];
  const pagesXml = staticPages
    .map((page) => {
      return `<url><loc>${baseUrl}${page}</loc></url>`;
    })
    .join('');

  // Gather blog posts from content directory
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const postsXml = filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '');
      return `<url><loc>${baseUrl}/blog/${slug}</loc></url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pagesXml}${postsXml}</urlset>`;
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
