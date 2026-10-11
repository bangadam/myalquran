import { releaseMissing } from '../src/lib/content.ts';
const missing = releaseMissing();
if (missing.length) {
  console.error(`Release blocked: ${missing.length} verified religious-content documents missing from SQLite.`);
  console.error(missing.slice(0, 12).join('\n'));
  process.exitCode = 1;
} else console.log('All four locales have complete content. Verify usage rights before publication.');
