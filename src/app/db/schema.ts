// db/schema.ts
import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';

export const dynamicContent = sqliteTable('dynamic_content', {
  id: integer('id').primaryKey(),
  section: text('section').notNull(), // Section identifier (e.g., 'hero', 'features', 'products')
  content: text('content').notNull(), // HTML content for the section
});
