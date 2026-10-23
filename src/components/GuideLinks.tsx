import Link from 'next/link';
import { allGuides, CATEGORY_LABELS } from '@/lib/guides';

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

export default function GuideLinks() {
  const guides = allGuides();
  const groups = ORDER.filter((c) => guides.some((g) => g.category === c)).map((c) => ({
    category: c,
    label: CATEGORY_LABELS[c] ?? c,
    items: guides.filter((g) => g.category === c),
  }));

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          More Kourion guides
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
          In-depth pages on tickets, opening hours, transport, the mosaics, nearby beaches, food and
          ready-made itineraries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group) => (
            <div key={group.category}>
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
                      href={`/en/${g.category}/${g.slug}`}
                      className="text-sm hover:underline"
                      style={{ color: 'var(--accent)' }}
                    >
                      {g.title}
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
