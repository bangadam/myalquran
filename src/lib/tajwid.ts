import { z } from 'zod';
import rulesArchive from '../../data/qari/tajwid/rules.json' with { type: 'json' };
import categoriesArchive from '../../data/qari/tajwid/categories.json' with { type: 'json' };
import audioArchive from '../../data/qari/tajwid/audio-examples.json' with { type: 'json' };

const ruleSchema = z.object({
  id: z.string().length(1), nameArabic: z.string().min(1), nameId: z.string().min(1),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/), className: z.string().min(1),
  description: z.string().min(1), category: z.string().min(1),
});
const categorySchema = z.object({ id: z.string().min(1), label: z.string().min(1) });
const exampleSchema = z.object({ url: z.string().url(), ayahRef: z.string().min(1), textExample: z.string().min(1) });

export type TajwidRule = z.infer<typeof ruleSchema>;
export type TajwidCategory = z.infer<typeof categorySchema>;
export type TajwidAudioExample = z.infer<typeof exampleSchema>;

export const tajwidRules: readonly TajwidRule[] = z.array(ruleSchema).length(17).parse(rulesArchive.data);
export const tajwidCategories: readonly TajwidCategory[] = z.array(categorySchema).parse(categoriesArchive.data);
export const tajwidAudioExamples: Readonly<Record<string, TajwidAudioExample>> = z.record(z.string(), exampleSchema).parse(audioArchive.data);
const ruleByCode: Record<string, TajwidRule> = Object.fromEntries(tajwidRules.map(rule => [rule.id, rule]));
if (Object.keys(ruleByCode).length !== tajwidRules.length || tajwidRules.some(rule => !tajwidCategories.some(category => category.id === rule.category))) {
  throw new Error('Invalid tajwid rule codes or categories');
}
if (Object.keys(tajwidAudioExamples).some(code => !Object.hasOwn(ruleByCode, code))) throw new Error('Unknown tajwid audio example code');

export function tajwidRuleByCode(code: string): TajwidRule | undefined {
  return Object.hasOwn(ruleByCode, code) ? ruleByCode[code] : undefined;
}
