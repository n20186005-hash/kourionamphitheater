import Link from 'next/link';
import { getGuide } from '@/lib/guides';
import { localizedTitle } from '@/lib/localized-guides';
import { guideText } from '@/lib/guide-ui';
import type { Locale } from '@/i18n/routing';

const featured = [
  'kourion-archaeological-museum',
  'limassol-castle',
  'akrotiri-salt-lake',
  'pissouri-bay',
  'omodos',
  'amathous-archaeological-site',
];

export default function NearbyGuideSection({ locale }: { locale: Locale }) {
  const t = guideText(locale);

  return (
    <section id="explore-nearby" className="section-padding bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 font-display text-3xl font-semibold sm:text-4xl">{t('nearbyIndex')}</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((slug) => {
            const place = getGuide('nearby', slug)!;
            return (
              <li key={place.slug}>
                <Link
                  href={`/${locale}/nearby/${place.slug}`}
                  hrefLang={locale}
                  className="block h-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-4 font-medium text-[var(--accent)] hover:underline"
                >
                  {localizedTitle(place, locale)}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="#nearby-guides" className="mt-5 inline-block text-[var(--accent)] underline underline-offset-4">
          {t('allNearby')}
        </Link>
      </div>
    </section>
  );
}
