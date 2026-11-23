import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { allGuides } from '@/lib/guides';
import { guideAlternates } from '@/lib/localized-guides';

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

  for (const g of allGuides()) {
    const languages = guideAlternates(BASE_URL, g.category, g.slug);
    for (const locale of routing.locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/${g.category}/${g.slug}`,
        lastModified: g.modified ? new Date(g.modified) : LASTMOD,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
