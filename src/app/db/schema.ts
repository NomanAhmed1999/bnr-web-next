// db/schema.ts
import { sqliteTable, text, integer,  } from "drizzle-orm/sqlite-core";
import { json } from "stream/consumers";

export const dynamicContent = sqliteTable("main_page", {
  id: integer("id").primaryKey(),
  offering: json("offering"),
  content: text("content").notNull(), // JSON string for the section content
});

interface Offering {
    title: string;
    description: string;
    icon: string;
}

interface Product {
    name: string;
    logo: string;
    description: string;
    images: string[];
    link: string;
}

interface SupportingProduct {
    title: string;
    link: string;
    color: string;
}

interface Stat {
    value: string;
    description: string;
}

interface Testimonial {
    text: string;
    author: string;
    position: string;
}

interface ApiResponse {
    heroWords: string[];
    heroColors: string[];
    currentWordIndex: number;
    offerings: Offering[];
    products: Product[];
    supportingProducts: SupportingProduct[];
    stats: Stat[];
    testimonials: Testimonial[];
}
