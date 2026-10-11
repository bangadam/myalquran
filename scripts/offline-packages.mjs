import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export default function offlinePackages() {
  return {
    name: 'myalquran-offline-packages',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = [];
        async function collect(folder) {
          for (const entry of await readdir(folder, { withFileTypes: true })) {
            const full = path.join(folder, entry.name);
            if (entry.isDirectory()) await collect(full);
            else files.push(full);
          }
        }
        await collect(root);
        const resources = [];
        for (const file of files) {
          const relative = path.relative(root, file).split(path.sep).join('/');
          if (!/\.(html|css|js|woff2|ttf|png|svg)$/.test(relative) || relative === 'sw.js') continue;
          const bytes = await readFile(file);
          const url = relative.endsWith('/index.html') ? `/${relative.slice(0, -10)}` : relative === 'index.html' ? '/' : `/${relative}`;
          resources.push({ url, bytes: bytes.length, hash: createHash('sha256').update(bytes).digest('hex') });
        }
        await mkdir(path.join(root, 'packages'), { recursive: true });
        for (const locale of ['id', 'en', 'ja', 'zh-Hans']) {
          const selected = resources.filter(r => r.url.startsWith(`/${locale}/`) || r.url === '/' || r.url === '/offline/' || r.url === '/404.html' || r.url.startsWith('/_astro/') || r.url.startsWith('/icons/'));
          selected.sort((a, b) => a.url.localeCompare(b.url));
          const version = createHash('sha256').update(JSON.stringify(selected)).digest('hex').slice(0, 20);
          await writeFile(path.join(root, 'packages', `${locale}.json`), JSON.stringify({ locale, version, bytes: selected.reduce((sum, r) => sum + r.bytes, 0), resources: selected }));
        }
      }
    }
  };
}
