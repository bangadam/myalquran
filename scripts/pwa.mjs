import { VitePWA } from 'vite-plugin-pwa';

export default function pwa(options) {
  let api;
  return {
    name: 'myalquran-pwa',
    hooks: {
      'astro:config:setup': ({ command, updateConfig }) => {
        if (command === 'sync' || command === 'preview') return;
        const plugins = VitePWA(options).filter(plugin => plugin.name !== 'vite-plugin-pwa:build');
        plugins.push({
          name: 'myalquran-pwa-client-manifest',
          applyToEnvironment(environment) { return environment.name === 'client'; },
          configResolved(config) { if (!config.build.ssr) api = config.plugins.find(plugin => plugin.name === 'vite-plugin-pwa')?.api; },
          generateBundle(_, bundle) { api?.generateBundle(bundle, this); }
        });
        updateConfig({ vite: { plugins } });
      },
      'astro:build:done': async () => { await api?.generateSW(); }
    }
  };
}
