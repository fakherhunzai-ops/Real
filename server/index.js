import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { saveEnquiry, validateEnquiry } from './enquiries.js';
import { isPage, isSensitivePath } from './routes.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const app = express();
const production = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT || 5173);
const dataDir = path.resolve(process.env.DATA_DIR || path.join(root, '.data'));
const requests = new Map();
const isWithin = (parent, child) => { const rel = path.relative(parent, child); return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel)); };
if (dataDir === root || isWithin(path.join(root, 'public'), dataDir) || isWithin(path.join(root, 'dist'), dataDir)) {
  throw new Error('DATA_DIR must not be the project root or be inside public or dist.');
}
app.disable('x-powered-by');
// Keep private submission files out of both production static hosting and Vite's dev file server.
app.use((req, res, next) => isSensitivePath(req.path, root, dataDir) ? res.status(404).end() : next());
app.use(express.json({ limit:'20kb' }));
app.post('/api/enquiries', async (req,res) => {
  // Modest in-memory abuse protection; production deployments can add edge rate limiting.
  const key = req.ip || 'unknown', now = Date.now(), recent = (requests.get(key) || []).filter(time => now - time < 10 * 60 * 1000);
  if (recent.length >= 20) return res.status(429).json({error:'Too many requests. Please try again later.'});
  recent.push(now); requests.set(key, recent);
  const result = validateEnquiry(req.body);
  if (result.error) return res.status(400).json({ error:result.error });
  if (result.spam) return res.status(200).json({ ok:true });
  try { await saveEnquiry(dataDir,result.value); return res.status(201).json({ ok:true }); }
  catch (error) { console.error('Could not save enquiry:', error.message); return res.status(503).json({ error:'We could not save your enquiry. Please try again.' }); }
});
app.use('/api', (_req,res) => res.status(404).json({error:'Not found'}));
if (production) {
  app.use(express.static(path.join(root,'dist')));
  app.use((req,res) => res.status(isPage(req.path) ? 200 : 404).sendFile(path.join(root,'dist','index.html')));
} else {
  const { createServer } = await import('vite');
  const vite = await createServer({ root, server:{ middlewareMode:true, allowedHosts:true }, appType:'spa' });
  app.use(vite.middlewares);
}
app.listen(port, '0.0.0.0', () => console.log(`Horizon website listening on 0.0.0.0:${port}`));
