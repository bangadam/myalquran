const savedKey = 'myalquran:saved-verses:v1';
const positionKey = 'myalquran:reading-position:v1';
type VerseLink = { surah: number; verse: number };

function validVerse(value: unknown): value is VerseLink {
  if (!value || typeof value !== 'object') return false;
  const item = value as Partial<VerseLink>;
  return Number.isInteger(item.surah) && item.surah! >= 1 && item.surah! <= 114 &&
    Number.isInteger(item.verse) && item.verse! >= 1 && item.verse! <= 286;
}

function verseUrl(locale: string, item: VerseLink) {
  return `/${locale}/surat/${item.surah}/#ayat-${item.verse}`;
}

let storageAvailable = false;
let saved: VerseLink[] = [];
let position: VerseLink | null = null;
try {
  const probe = 'myalquran:storage-probe';
  localStorage.setItem(probe, '1');
  localStorage.removeItem(probe);
  const stored = localStorage.getItem(savedKey);
  const entries: unknown = stored === null ? [] : JSON.parse(stored);
  const previous = localStorage.getItem(positionKey);
  const last: unknown = previous === null ? null : JSON.parse(previous);
  if (!Array.isArray(entries) || !entries.every(validVerse) || (last !== null && !validVerse(last))) throw new Error('Invalid saved reading data');
  saved = entries;
  position = last as VerseLink | null;
  storageAvailable = true;
} catch { /* Stored data is never silently reset when unavailable or malformed. */ }

const library = document.querySelector<HTMLElement>('[data-library]');
const locale = library?.dataset.locale;
if (library && locale) {
  library.hidden = false;
  const list = library.querySelector<HTMLOListElement>('[data-saved-list]');
  const empty = library.querySelector<HTMLElement>('[data-saved-empty]');
  const resume = library.querySelector<HTMLAnchorElement>('[data-resume]');
  const titles = new Map<number, { title: string; count: number }>();
  if (library.dataset.surahCatalog) {
    const catalog = JSON.parse(library.dataset.surahCatalog) as { number: number; title: string; count: number }[];
    for (const row of catalog) titles.set(row.number, row);
  }
  for (const row of document.querySelectorAll<HTMLElement>('[data-surah-row]')) {
    const number = Number(row.dataset.number), count = Number(row.dataset.count);
    if (Number.isInteger(number) && Number.isInteger(count) && row.dataset.title) titles.set(number, { title: row.dataset.title, count });
  }
  if (!storageAvailable) {
    if (empty) empty.textContent = library.dataset.unavailable ?? '';
  } else {
    if (resume && position && position.verse <= (titles.get(position.surah)?.count ?? 0)) {
      resume.href = verseUrl(locale, position);
      const label = document.createElement('span');
      label.textContent = resume.dataset.resumeLabel ?? '';
      const reading = document.createElement('span');
      reading.textContent = `${titles.get(position.surah)!.title} · ${library.dataset.verseLabel} ${position.verse} →`;
      resume.append(label, reading);
      resume.hidden = false;
    }
    for (const item of saved) {
      const title = titles.get(item.surah);
      if (!title || item.verse > title.count || !list) continue;
      const row = document.createElement('li');
      row.className = 'saved-entry';
      const heading = document.createElement('h2');
      heading.textContent = `${title.title} · ${library.dataset.verseLabel} ${item.verse}`;
      const actions = document.createElement('div');
      actions.className = 'saved-entry-actions';
      const link = document.createElement('a');
      link.href = verseUrl(locale, item);
      link.textContent = library.dataset.openLabel ?? heading.textContent;
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.textContent = library.dataset.removeLabel ?? '';
      remove.addEventListener('click', () => {
        const next = saved.filter(value => value.surah !== item.surah || value.verse !== item.verse);
        try {
          localStorage.setItem(savedKey, JSON.stringify(next)); saved = next;
          const focus = row.nextElementSibling?.querySelector('button') ?? row.previousElementSibling?.querySelector('button');
          row.remove();
          if (empty) empty.hidden = !!list.children.length;
          if (focus instanceof HTMLElement) focus.focus();
          else if (empty) { empty.tabIndex = -1; empty.focus(); }
        } catch { if (empty) { empty.hidden = false; empty.textContent = library.dataset.unavailable ?? ''; } }
      });
      actions.append(link, remove); row.append(heading, actions); list.append(row);
    }
    if (empty) empty.hidden = !list || !!list.children.length;
    const count = library.querySelector<HTMLElement>('[data-saved-count]');
    if (count) count.textContent = ` · ${saved.filter(item => item.verse <= (titles.get(item.surah)?.count ?? 0)).length}`;
  }
}

const search = document.querySelector<HTMLInputElement>('[data-surah-search]');
if (search) {
  const field = document.querySelector<HTMLElement>('[data-search-field]');
  const noResults = document.querySelector<HTMLElement>('[data-search-empty]');
  if (field) field.hidden = false;
  const rows = [...document.querySelectorAll<HTMLElement>('[data-surah-row]')];
  search.addEventListener('input', () => {
    const query = search.value.normalize('NFKD').toLocaleLowerCase().trim();
    let matches = 0;
    for (const row of rows) {
      row.hidden = !row.textContent?.normalize('NFKD').toLocaleLowerCase().includes(query);
      if (!row.hidden) matches++;
    }
    if (noResults) noResults.hidden = matches !== 0;
  });
}

const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-save-verse]')];
if (storageAvailable) {
  const updateButtons = () => {
    for (const button of buttons) {
      const item = { surah: Number(button.dataset.surah), verse: Number(button.dataset.verse) };
      const selected = saved.some(value => value.surah === item.surah && value.verse === item.verse);
      button.setAttribute('aria-pressed', String(selected));
      button.textContent = selected ? button.dataset.removeLabel ?? '' : button.dataset.saveLabel ?? '';
      const indicator = button.closest('.verse')?.querySelector('[data-bookmark-indicator]');
      if (indicator) indicator.toggleAttribute('hidden', !selected);
    }
  };
  for (const button of buttons) {
    const item = { surah: Number(button.dataset.surah), verse: Number(button.dataset.verse) };
    if (!validVerse(item)) continue;
    button.hidden = false;
    button.addEventListener('click', () => {
      const selected = saved.some(value => value.surah === item.surah && value.verse === item.verse);
      const next = selected ? saved.filter(value => value.surah !== item.surah || value.verse !== item.verse) : [...saved, item];
      try {
        localStorage.setItem(savedKey, JSON.stringify(next));
        saved = next;
        updateButtons();
      } catch { button.hidden = true; }
    });
  }
  updateButtons();

  const recordPosition = (element: Element) => {
    const button = element.querySelector<HTMLButtonElement>('[data-save-verse]');
    const item = { surah: Number(button?.dataset.surah), verse: Number(button?.dataset.verse) };
    if (!validVerse(item) || (position?.surah === item.surah && position.verse === item.verse)) return;
    try { localStorage.setItem(positionKey, JSON.stringify(item)); position = item; } catch { /* Reading remains available. */ }
  };
  const verses = [...document.querySelectorAll<HTMLElement>('.verse')];
  if (verses.length) {
    const target = () => document.getElementById(location.hash.slice(1));
    if (location.hash.startsWith('#ayat-') && target()) recordPosition(target()!);
    window.addEventListener('hashchange', () => { if (location.hash.startsWith('#ayat-') && target()) recordPosition(target()!); });
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visible[0]) recordPosition(visible[0].target);
      }, { rootMargin: '-15% 0px -70% 0px' });
      for (const verse of verses) observer.observe(verse);
    }
  }
}

for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-open-notes]')) {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    if (target instanceof HTMLDetailsElement) {
      document.documentElement.dataset.hideTranslation = 'false';
      target.open = true;
      link.closest('details')?.removeAttribute('open');
    }
  });
}
for (const details of document.querySelectorAll<HTMLDetailsElement>('.verse-actions')) {
  details.addEventListener('toggle', () => {
    if (details.open) for (const other of document.querySelectorAll<HTMLDetailsElement>('.verse-actions[open]')) if (other !== details) other.open = false;
  });
  details.addEventListener('keydown', event => {
    if (event.key === 'Escape') { details.open = false; details.querySelector('summary')?.focus(); }
  });
}
