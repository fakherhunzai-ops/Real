import path from 'node:path';
import { articles, projects, services } from '../src/data.js';

const pages = new Set([
  '/', '/services', '/how-we-work', '/case-studies', '/insights', '/about',
  '/delivery-model', '/capabilities', '/who-we-work-with', '/contact', '/book-a-call',
  '/privacy', '/terms', '/cookies',
  ...services.map(item => `/services/${item.slug}`),
  ...projects.map(item => `/case-studies/${item.slug}`),
  ...articles.map(item => `/insights/${item.slug}`),
]);
export function isPage(pathname) {
  const normalised = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pages.has(normalised);
}

// Vite can serve files in the project directory, including through its /@fs path.
// Never expose the enquiry store, even when DATA_DIR is configured inside the repo.
export function isSensitivePath(rawPath, root, dataDir) {
  let decoded = rawPath;
  try { for (let i=0; i<2; i++) { const next=decodeURIComponent(decoded); if (next===decoded) break; decoded=next; } }
  catch { return true; }
  const normalised = path.posix.normalize(decoded);
  const absoluteStore = dataDir.split(path.sep).join('/').replace(/\/$/, '');
  const absoluteRequest = normalised.startsWith('/@fs/') ? normalised.slice(4) : '';
  if (absoluteRequest === absoluteStore || absoluteRequest.startsWith(`${absoluteStore}/`)) return true;
  const relative = path.relative(root, dataDir);
  if (relative && !relative.startsWith('..') && !path.isAbsolute(relative)) {
    const relativeStore = `/${relative.split(path.sep).join('/')}`;
    if (normalised === relativeStore || normalised.startsWith(`${relativeStore}/`)) return true;
  }
  return false;
}
