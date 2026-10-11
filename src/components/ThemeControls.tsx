import { useEffect, useState } from 'react';
import { Sun, Moon, Check } from 'lucide-react';
import { interfaceLabels } from '../lib/interface-labels';
import type { Locale } from '../lib/content';

export default function ThemeControls({ locale }: { locale: Locale }) {
  const ui = interfaceLabels[locale];
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => setTheme(document.documentElement.dataset.theme || (media.matches ? 'dark' : 'light'));
    sync();
    media.addEventListener('change', sync);
    window.addEventListener('theme-change', sync);
    return () => { media.removeEventListener('change', sync); window.removeEventListener('theme-change', sync); };
  }, []);
  return <div className="theme-options" role="group" aria-label={ui.theme}>
    {(['light', 'dark'] as const).map(value => {
      const Icon = value === 'light' ? Sun : Moon;
      return <button key={value} type="button" aria-pressed={theme === value} onClick={() => {
        document.documentElement.dataset.theme = value;
        try { localStorage.setItem('myalquran:theme:v1', value); } catch { /* Apply for this page without storage. */ }
        window.dispatchEvent(new Event('theme-change'));
      }}><Icon size={18} aria-hidden="true" />{ui[value]}{theme === value && <Check size={16} aria-hidden="true" />}</button>;
    })}
  </div>;
}
