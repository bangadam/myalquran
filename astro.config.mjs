import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import pwa from './scripts/pwa.mjs';
import offlinePackages from './scripts/offline-packages.mjs';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    {
      name: 'myalquran-vite-cache',
      hooks: {
        'astro:config:setup': ({ command, updateConfig }) => {
          // astro check uses production optimization during sync; never overwrite live dev dependencies.
          updateConfig({ vite: { cacheDir: new URL(`./node_modules/.vite/${command}`, import.meta.url).pathname } });
        }
      }
    },
    react(),
    offlinePackages(),
    pwa({
      strategies: 'injectManifest', srcDir: 'src', filename: 'sw.ts', injectRegister: false,
      registerType: 'prompt',
      manifest: { name: 'MyAlQuran', short_name: 'MyAlQuran', description: 'A quiet space for Quran reading', start_url: '/', scope: '/', display: 'standalone', background_color: '#ffffff', theme_color: '#1e5546',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }] },
      injectManifest: { globPatterns: ['index.html', 'offline/index.html', '404.html', '_astro/*.{js,css,woff2,ttf}', 'icons/*.{png,svg}', 'manifest.webmanifest'], maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        manifestTransforms: [async entries => ({ manifest: entries.map(entry => ({ ...entry, url: entry.url === 'index.html' ? '/' : entry.url === 'offline/index.html' ? '/offline/' : `/${entry.url}` })), warnings: [] })] },
      devOptions: { enabled: true, type: 'module' }
    })
  ],
  vite: { plugins: [tailwind()], resolve: { alias: { 'lottie-react': new URL('./node_modules/lottie-react/build/index.es.js', import.meta.url).pathname } }, ssr: { external: ['node:sqlite'] } }
});
