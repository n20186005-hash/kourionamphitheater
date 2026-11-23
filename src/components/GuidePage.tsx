import type { Locale } from '@/i18n/routing';
import { guideLocales, guideText, languageNames, type GuideLabel } from '@/lib/guide-ui';
import { localizedTitle, type localizedGuide } from '@/lib/localized-guides';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import NearbyVisitorGuide from './NearbyVisitorGuide';
import { nearbyVisitorFacts } from '@/lib/nearby-visitor-facts';
import GuideVisitDetails, { GuidePhoto, SiteManagement } from './GuideVisitDetails';
import { mapsLink } from '@/lib/guide-visit';
import { GUIDES } from '@/lib/guides';

type GuidePageProps = NonNullable<ReturnType<typeof localizedGuide>> & { locale: Locale };

export default function GuidePage({ guide, visit, facts, locale }: GuidePageProps) {
  const t = guideText(locale);
  const categoryLabel = t(guide.category as GuideLabel);
  return (
    <article className="section-padding">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 sm:px-6">
          <nav aria-label={t('breadcrumb')} className="flex flex-wrap items-center gap-2 text-sm">
            <Link href={`/${locale}`} className="font-medium text-[var(--accent)]">{t('home')}</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/${locale}#more-guides`} className="text-[var(--accent)]">{categoryLabel}</Link>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <nav aria-label={t('language')} className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
              {guideLocales.map((language) => (
                <Link key={language} href={`/${language}/${guide.category}/${guide.slug}`} hrefLang={language}
                  lang={language} aria-current={language === locale ? 'page' : undefined}
                  className={language === locale ? 'font-semibold text-[var(--text-primary)]' : 'text-[var(--accent)] hover:underline'}>
                  {languageNames[language]}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          {facts && visit ? (
            <NearbyVisitorGuide guide={guide} visit={visit} facts={facts} locale={locale} />
          ) : (
            <>
              <header className="mb-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 sm:p-8">
                <h1 className="mb-4 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-5xl">
                  {guide.title}
                </h1>
                <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{guide.intro}</p>
              </header>

              {visit && (
                <>
                  <p className="mb-6 text-sm">
                    <a href={mapsLink(visit)} className="text-[var(--accent)] underline underline-offset-4">
                      {visit.place} · {t('maps')}
                    </a>
                  </p>
                  {visit.photo && <GuidePhoto photo={visit.photo} />}
                  <SiteManagement visit={visit} locale={locale} />
                  <GuideVisitDetails visit={visit} locale={locale} />
                </>
              )}

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

              {guide.walk && (
                <section className="mb-8">
                  <h2 className="mb-3 font-display text-xl font-semibold sm:text-2xl">{t('walk')}</h2>
                  <ol className="list-decimal space-y-3 pl-6 text-[var(--text-secondary)]">
                    {guide.walk.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </section>
              )}

              {visit?.additionalPhoto && <GuidePhoto photo={visit.additionalPhoto} />}

            </>
          )}

          {/* FAQ */}
          {guide.faq.length > 0 && (
            <section className="mt-10 rounded-xl p-6 sm:p-8" style={{ background: 'var(--bg-tertiary)' }}>
              <h2 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {t('faq')}
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
                {t('related')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {guide.related.map((ref, i) => (
                  <Link
                    key={i}
                    href={`/${locale}/${ref.category}/${ref.slug}`}
                    className="block rounded-xl p-4 transition-colors"
                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                  >
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {t(ref.category as GuideLabel)}
                    </span>
                    <span className="block font-medium" style={{ color: 'var(--text-primary)' }}>
                      {titleForRef(ref, locale)}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <p className="mt-10 text-xs" style={{ color: 'var(--text-secondary)' }}>
            {t('updated')} · {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(guide.modified ?? '2026-10-20'))}
          </p>
        </div>
      </div>
    </article>
  );
}

function titleForRef(ref: { category: string; slug: string }, locale: Locale): string {
  const g = GUIDES.find((x) => x.category === ref.category && x.slug === ref.slug);
  return g ? localizedTitle(g, locale) : ref.slug;
}
