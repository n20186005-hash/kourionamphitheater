import Link from 'next/link';
import { useTranslations } from 'next-intl';

const MAPS_LINK = 'https://maps.app.goo.gl/KxwFywyG12yxtgsF9';

type ItemKey = 'hours' | 'tickets' | 'navigation' | 'route';

const ITEMS: { key: ItemKey; href: string; external: boolean }[] = [
  { key: 'hours', href: '/en/visit/opening-hours', external: false },
  { key: 'tickets', href: '/en/visit/tickets', external: false },
  { key: 'navigation', href: MAPS_LINK, external: true },
  { key: 'route', href: '/en/visit/site-map', external: false },
];

function iconFor(key: ItemKey) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (key) {
    case 'hours':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 14" />
        </svg>
      );
    case 'tickets':
      return (
        <svg {...common}>
          <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
          <line x1="13" y1="6" x2="13" y2="18" />
        </svg>
      );
    case 'navigation':
      return (
        <svg {...common}>
          <polygon points="12 2 19 21 12 17 5 21 12 2" />
        </svg>
      );
    case 'route':
      return (
        <svg {...common}>
          <circle cx="6" cy="19" r="2" />
          <circle cx="18" cy="5" r="2" />
          <path d="M6 17V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v7" />
        </svg>
      );
  }
}

export default function QuickLinks() {
  const t = useTranslations('quickLinks');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-2xl sm:text-3xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ITEMS.map((it) => {
            const inner = (
              <>
                <span className="mb-2 text-[var(--accent)]">{iconFor(it.key)}</span>
                <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                  {t(it.key)}
                </span>
              </>
            );
            const className =
              'group flex flex-col items-center justify-center gap-1 rounded-2xl border border-[var(--border-color)] p-4 transition-colors hover:border-[var(--accent)]';
            const style = { background: 'var(--bg-primary)' };
            return it.external ? (
              <a
                key={it.key}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={style}
              >
                {inner}
              </a>
            ) : (
              <Link key={it.key} href={it.href} className={className} style={style}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
