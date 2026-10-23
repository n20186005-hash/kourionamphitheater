import Link from 'next/link';
import type { Guide } from '@/lib/guides';
import { CATEGORY_LABELS, guideHrefByRef, GUIDES } from '@/lib/guides';

export default function GuidePage({ guide }: { guide: Guide }) {
  const categoryLabel = CATEGORY_LABELS[guide.category] ?? guide.category;
  return (
    <article className="section-padding">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }} aria-label="Breadcrumb">
          <Link href="/en" style={{ color: 'var(--accent)' }}>Home</Link>
          <span className="mx-2">/</span>
          <span>{categoryLabel}</span>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>{guide.title}</span>
        </nav>

        <h1
          className="font-display text-3xl sm:text-4xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {guide.title}
        </h1>

        <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          {guide.intro}
        </p>

        {guide.sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2
              className="font-display text-xl sm:text-2xl font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {section.heading}
            </h2>
            {section.body.map((para, j) => (
              <p key={j} className="leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                {para}
              </p>
            ))}
          </section>
        ))}

        {/* FAQ */}
        {guide.faq.length > 0 && (
          <section className="mt-10 rounded-xl p-6 sm:p-8" style={{ background: 'var(--bg-tertiary)' }}>
            <h2 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {guide.faq.map((f, i) => (
                <div key={i}>
                  <h3 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{f.question}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related */}
        {guide.related.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Related guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guide.related.map((ref, i) => (
                <Link
                  key={i}
                  href={guideHrefByRef(ref)}
                  className="block rounded-xl p-4 transition-colors"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {CATEGORY_LABELS[ref.category] ?? ref.category}
                  </span>
                  <span className="block font-medium" style={{ color: 'var(--text-primary)' }}>
                    {titleForRef(ref)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <p className="mt-10 text-xs" style={{ color: 'var(--text-secondary)' }}>
          Last updated: {guide.updated}. This is an independent, non-commercial visitor guide and is not affiliated with the Department of Antiquities of Cyprus.
        </p>
      </div>
    </article>
  );
}

function titleForRef(ref: { category: string; slug: string }): string {
  const g = GUIDES.find((x) => x.category === ref.category && x.slug === ref.slug);
  return g ? g.title : ref.slug;
}
