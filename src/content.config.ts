import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // Fills the few Starlight UI strings that its own nl/uk files leave in English.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
