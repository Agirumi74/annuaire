// src/lib/config.ts
// Site configuration constants

export const SITE_CONFIG = {
  // Main category IDs for the site structure
  MAGAZINE_CATEGORY_ID: 'd20b7566-105a-47f3-947f-dab773bef43e',
  HEBERGEMENTS_CATEGORY_ID: 'ad66f5d9-5f9f-4e2d-8d1f-6d2e5d5f6f5f',
  
  // Default language
  DEFAULT_LANGUAGE: 'fr' as const,
  
  // Supported languages
  SUPPORTED_LANGUAGES: ['fr', 'en', 'es'] as const,
  
  // Route names (static)
  ROUTES: {
    MAGAZINE: 'magazine',
    HEBERGEMENTS: 'hebergements',
    AUTHORS: 'auteurs'
  } as const,
  
  // API configuration
  PLACEHOLDER_API: '/api/placeholder' // Internal placeholder API
} as const;

export type Language = typeof SITE_CONFIG.SUPPORTED_LANGUAGES[number];
export type RouteKey = keyof typeof SITE_CONFIG.ROUTES;