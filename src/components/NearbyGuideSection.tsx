import Link from 'next/link';
import { NEARBY_PLACES } from '@/lib/nearby-places';

const copy = {
  en: { title: 'Explore near Kourion', all: 'See all nearby guides' },
  zh: { title: '库里翁周边游览', all: '查看全部周边指南（英文）' },
  el: { title: 'Εξερευνήστε την περιοχή του Κουρίου', all: 'Όλοι οι οδηγοί της περιοχής (αγγλικά)' },
  tr: { title: 'Kourion çevresini keşfedin', all: 'Tüm çevre gezi rehberleri (İngilizce)' },
} as const;

const featured = [
  'kourion-archaeological-museum',
  'limassol-castle',
  'akrotiri-salt-lake',
  'pissouri-bay',
  'omodos',
  'amathous-archaeological-site',
];

export default function NearbyGuideSection({ locale }: { locale: string }) {
  const labels = copy[locale as keyof typeof copy] ?? copy.en;

  return (
    <section id="explore-nearby" className="section-padding bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 font-display text-3xl font-semibold sm:text-4xl">{labels.title}</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" lang="en">
          {featured.map((slug) => {
            const place = NEARBY_PLACES.find((item) => item.slug === slug)!;
            return (
              <li key={place.slug}>
                <Link
                  href={`/en/nearby/${place.slug}`}
                  hrefLang="en"
                  className="block h-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-4 font-medium text-[var(--accent)] hover:underline"
                >
                  {place.title}{locale !== 'en' && ' (EN)'}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="#nearby-guides" className="mt-5 inline-block text-[var(--accent)] underline underline-offset-4">
          {labels.all}
        </Link>
      </div>
    </section>
  );
}
