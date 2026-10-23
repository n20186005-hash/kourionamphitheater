import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { allGuides } from '@/lib/guides';

const BASE_URL = 'https://www.kourionamphitheater.com';
const LASTMOD = new Date('2026-10-20');

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const pages = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];
  for (const locale of routing.locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: LASTMOD,
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.5,
      });
    }
  }

  // Guide pages: English-first batch. Other languages are added in a later
  // phase; until then these URLs publish only an English + x-default signal.
  for (const g of allGuides()) {
    const url = `${BASE_URL}/en/${g.category}/${g.slug}`;
    entries.push({
      url,
      lastModified: LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: { en: url, 'x-default': url },
      },
    });
  }

  return entries;
}
