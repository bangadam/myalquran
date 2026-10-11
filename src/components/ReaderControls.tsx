import { useEffect, useRef, useState } from 'react';
import { SlidersHorizontal, ChevronUp, Type, ListOrdered, Bookmark, Minus, Plus } from 'lucide-react';
import { Button } from './ui/button';
import ThemeControls from './ThemeControls';
import { interfaceLabels } from '../lib/interface-labels';
import type { Labels, Locale } from '../lib/content';

type Display = { arabic: number; translation: number; line: number; latin: boolean; translationVisible: boolean };
export default function ReaderControls({ labels, locale, verseCount }: { labels: Labels; locale: Locale; verseCount?: number }) {
  const ui = interfaceLabels[locale];
  const reader = ui.reader;
  const [visibleRange, setVisibleRange] = useState<[number, number] | null>(null);
  const [scale, setScale] = useState(1);
  const [display, setDisplay] = useState<Display>({ arabic: 38, translation: 19, line: 1.65, latin: false, translationVisible: true });
  const [error, setError] = useState('');
  const [dockOpen, setDockOpen] = useState(() => typeof document !== 'undefined' && document.querySelector<HTMLDetailsElement>('.reader-dock > details')?.open === true);
  const dock = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const root = document.documentElement;
    const current = Number(root.style.getPropertyValue('--reading-scale'));
    if ([1, 1.25, 1.5].includes(current)) setScale(current);
    const style = getComputedStyle(root);
    setDisplay({ arabic: parseFloat(style.getPropertyValue('--arabic-size')), translation: parseFloat(style.getPropertyValue('--translation-size')), line: parseFloat(style.getPropertyValue('--reading-line')), latin: root.dataset.hideLatin !== 'true', translationVisible: root.dataset.hideTranslation !== 'true' });
  }, []);
  useEffect(() => {
    if (!verseCount || verseCount <= 20) return;
    const verses = document.querySelectorAll<HTMLElement>('.verse[id^="ayat-"]');
    const visible = new Set<number>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const number = Number((entry.target as HTMLElement).id.slice(5));
        if (entry.isIntersecting) visible.add(number);
        else visible.delete(number);
      }
      if (visible.size) setVisibleRange([Math.min(...visible), Math.max(...visible)]);
    }, { rootMargin: '0px 0px -184px 0px' });
    verses.forEach(verse => observer.observe(verse));
    return () => observer.disconnect();
  }, [verseCount]);
  function changeDisplay(next: Display) {
    setDisplay(next);
    const root = document.documentElement;
    root.style.setProperty('--arabic-size', `${next.arabic}px`);
    root.style.setProperty('--translation-size', `${next.translation}px`);
    root.style.setProperty('--reading-line', String(next.line));
    root.dataset.hideLatin = String(!next.latin);
    root.dataset.hideTranslation = String(!next.translationVisible);
    try { localStorage.setItem('myalquran:reading-display:v1', JSON.stringify(next)); } catch { /* Current page remains adjustable. */ }
  }
  return <><div className="reader-dock">
    {verseCount && verseCount > 20 && <p className="reader-range" data-verse-range aria-live="off">{visibleRange ? `${reader.verseRange} ${visibleRange[0]}–${visibleRange[1]} ${reader.of} ${verseCount}` : `${verseCount} ${reader.allVerses}`}</p>}
    <details ref={dock} open={dockOpen} onToggle={event => setDockOpen(event.currentTarget.open)} onKeyDown={event => {
    if (event.key === 'Escape' && dock.current) { event.preventDefault(); dock.current.open = false; setDockOpen(false); dock.current.querySelector('summary')?.focus(); }
  }}>
    <summary><SlidersHorizontal size={20} aria-hidden="true" />{ui.controls}<ChevronUp className="dock-chevron" size={16} aria-hidden="true" /></summary>
    <div className="reader-panel">
      <details><summary><Type size={20} aria-hidden="true" />{ui.display}</summary>
        <h2>{ui.reading}</h2><ThemeControls locale={locale} />
        {([{ key: 'arabic', label: ui.arabicSize, min: 26, max: 60, step: 2 }, { key: 'translation', label: ui.translationSize, min: 15, max: 30, step: 1 }, { key: 'line', label: ui.lineSpacing, min: 1.5, max: 2.3, step: .1 }] as const).map(({ key, label, min, max, step }) => <div className="size-control" key={key}><span>{label}</span><div className="size-stepper">
          <button type="button" aria-label={`${ui.smaller} · ${label}`} disabled={display[key] <= min} onClick={() => changeDisplay({ ...display, [key]: Math.max(min, Math.round((display[key] - step) * 100) / 100) })}><Minus size={16} className="mx-auto" aria-hidden="true" /></button>
          <output aria-label={label}>{display[key]}{key === 'line' ? '' : ' px'}</output>
          <button type="button" aria-label={`${ui.larger} · ${label}`} disabled={display[key] >= max} onClick={() => changeDisplay({ ...display, [key]: Math.min(max, Math.round((display[key] + step) * 100) / 100) })}><Plus size={16} className="mx-auto" aria-hidden="true" /></button>
        </div></div>)}
        <fieldset className="reader-controls"><legend>{reader.scale}</legend><div className="control-options">
          {[1, 1.25, 1.5].map(value => <Button key={value} type="button" variant={scale === value ? 'default' : 'outline'} aria-pressed={scale === value} onClick={() => {
            setScale(value); document.documentElement.style.setProperty('--reading-scale', String(value));
            try { localStorage.setItem('reading-scale', String(value)); } catch { /* Current page still applies. */ }
          }}>{value * 100}%</Button>)}
        </div></fieldset>
        <div className="preference-toggle"><span>{labels.transliteration}</span><button type="button" aria-label={labels.transliteration} aria-pressed={display.latin} onClick={() => changeDisplay({ ...display, latin: !display.latin })}><span aria-hidden="true" /></button></div>
        <div className="preference-toggle"><span>{labels.translation}</span><button type="button" aria-label={labels.translation} aria-pressed={display.translationVisible} onClick={() => changeDisplay({ ...display, translationVisible: !display.translationVisible })}><span aria-hidden="true" /></button></div>
      </details>
      {verseCount && <details><summary><ListOrdered size={20} aria-hidden="true" />{ui.jump}</summary><form className="jump-form" noValidate onSubmit={event => {
        event.preventDefault();
        const raw = new FormData(event.currentTarget).get('verse');
        const number = Number(raw);
        if (typeof raw !== 'string' || !/^\d+$/.test(raw.trim()) || number < 1 || number > verseCount) { setError(`${ui.invalid} 1–${verseCount}.`); return; }
        const target = document.getElementById(`ayat-${number}`);
        if (!target) return;
        setError(''); if (dock.current) dock.current.open = false;
        location.hash = `ayat-${number}`;
        target.tabIndex = -1; target.focus({ preventScroll: true }); target.scrollIntoView();
      }}><label htmlFor="jump-verse">{ui.range} · 1–{verseCount}</label><input id="jump-verse" name="verse" type="text" inputMode="numeric" aria-invalid={!!error} aria-describedby={error ? 'jump-error' : undefined} />{error && <p id="jump-error" role="alert">{error}</p>}<Button type="submit">{ui.openVerse}</Button></form></details>}
      <a className="panel-link" href={`/${locale}/tersimpan/`}><Bookmark size={20} aria-hidden="true" />{reader.savedVerses}</a>
    </div>
  </details></div></>;
}
