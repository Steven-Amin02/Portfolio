import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

async function postbuild() {
  const distDir = path.resolve('dist');
  const docsDir = path.resolve('docs');
  const indexPath = path.join(distDir, 'index.html');
  const sitemapPath = path.join(distDir, 'sitemap.xml');

  // 1. Pre-render React <App /> into dist/index.html for SEO crawlers & instant FCP
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error'
  });

  try {
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
    const appHtml = renderToString(React.createElement(App));
    const indexHtml = fs.readFileSync(indexPath, 'utf-8');
    const hydratedHtml = indexHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    fs.writeFileSync(indexPath, hydratedHtml, 'utf-8');
    console.log(`✓ Pre-rendered <App /> into dist/index.html (${(appHtml.length / 1024).toFixed(1)} kB HTML)`);
  } finally {
    await vite.close();
  }

  // 2. Stamp today's build date into dist/sitemap.xml <lastmod>
  if (fs.existsSync(sitemapPath)) {
    const today = new Date().toISOString().split('T')[0];
    const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8').replace(
      /<lastmod>.*?<\/lastmod>/g,
      `<lastmod>${today}</lastmod>`
    );
    fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
    console.log(`✓ Updated dist/sitemap.xml <lastmod> to ${today}`);
  }

  // 3. Cleanly mirror dist/ -> docs/ without accumulating stale hashed bundles
  fs.rmSync(docsDir, { recursive: true, force: true });
  fs.cpSync(distDir, docsDir, { recursive: true });
  console.log('✓ Synced clean production build to docs/');
}

postbuild().catch((err) => {
  console.error('Post-build failed:', err);
  process.exit(1);
});
