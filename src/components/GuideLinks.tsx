import type { Locale } from '@/i18n/routing';
import { guideText, type GuideLabel } from '@/lib/guide-ui';
import { localizedTitle } from '@/lib/localized-guides';
import Link from 'next/link';
import { allGuides } from '@/lib/guides';

const ORDER = [
  'visit',
  'transport',
  'archaeology',
  'nearby',
  'food',
  'itineraries',
  'experiences',
  'guides',
];

export default function GuideLinks({ locale }: { locale: Locale }) {
  const t = guideText(locale);
  const guides = allGuides();
  const groups = ORDER.filter((c) => guides.some((g) => g.category === c)).map((c) => ({
    category: c,
    label: t(c as GuideLabel),
    items: guides.filter((g) => g.category === c),
  }));

  return (
    <section id="more-guides" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('index')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('summary')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div key={group.category} id={group.category === 'nearby' ? 'nearby-guides' : undefined}>
              <h3
                className="font-display text-lg font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.items.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={`/${locale}/${g.category}/${g.slug}`}
                      className="text-sm hover:underline"
                      style={{ color: 'var(--accent)' }}
                    >
                      {localizedTitle(g, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
