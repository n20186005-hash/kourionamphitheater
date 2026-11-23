import type { Locale } from '@/i18n/routing';
import { guideText } from '@/lib/guide-ui';
import type { ReactNode } from 'react';
import { GuidePhoto, SiteManagement } from './GuideVisitDetails';
import { directionsLink, mapsLink, type GuideVisit } from '@/lib/guide-visit';
import type { Guide, GuideSection } from '@/lib/guides';
import type { nearbyVisitorFacts } from '@/lib/nearby-visitor-facts';

type VisitorFacts = NonNullable<ReturnType<typeof nearbyVisitorFacts>>;

const linkClass = 'font-medium text-[var(--accent)] underline underline-offset-4';

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 font-display text-xl font-semibold sm:text-2xl">{title}</h2>
      <div className="space-y-3 leading-relaxed text-[var(--text-secondary)]">{children}</div>
    </section>
  );
}

function Paragraphs({ section }: { section?: GuideSection }) {
  return section?.body.map((text, index) => <p key={index}>{text}</p>);
}

export default function NearbyVisitorGuide({
  guide,
  visit,
  facts,
  locale,
}: {
  guide: Guide;
  visit: GuideVisit;
  facts: VisitorFacts;
  locale: Locale;
}) {
  const t = guideText(locale);
  const map = mapsLink(visit);
  const hours = facts.hours ?? visit.access ?? t('dateAccess');
  const source = facts.source ?? visit.source;
  const plan = guide.sections.find(({ heading }) => heading === 'Planning your visit');
  const camera = guide.sections.find(({ heading }) => heading === 'What to look for on site');
  const discovery = guide.sections.filter((part) => part !== plan && part !== camera);
  const rating = visit.rating;
  const info = [
    [t('name'), guide.title],
    [t('type'), facts.type],
    [t('address'), visit.address],
    [t('access'), facts.access],
    [t('manager'), visit.manager ?? t('individual')],
  ];

  return (
    <>
      <header className="mb-8 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 sm:p-8">
        <h1 className="mb-3 font-display text-3xl font-semibold sm:text-5xl">{guide.title}</h1>
        <p className="mb-5 text-lg text-[var(--text-secondary)]">{facts.tagline}</p>
        <div className="mb-5 flex flex-wrap gap-3 text-sm">
          <span className="rounded-lg bg-[var(--bg-tertiary)] px-3 py-2">{facts.access}</span>
          <a className={linkClass + ' self-center'} href="#opening-hours">{t('hours')}</a>
          {visit.reviews !== false && <a className={linkClass + ' self-center'} href={map}>
            {rating ? `Google Maps ${rating.value}/5 · ${rating.count} ${t('reviewUnit')}` : t('mapsReviews')}
          </a>}
          <a className={linkClass + ' self-center'} href={map}>{t('view')}</a>
        </div>
        <p className="mb-5 text-sm text-[var(--text-secondary)]">{hours}</p>
        {visit.photo && <GuidePhoto photo={visit.photo} />}
      </header>

      <Block title={`${t('discover')} · ${guide.title}`}><p>{guide.intro}</p></Block>
      <Block title={t('tips')}>
        {plan ? <Paragraphs section={plan} /> : <p>{facts.tips}</p>}
      </Block>
      <Block title={t('highlights')}>
        <ul className="list-disc space-y-1 pl-6">
          {facts.itinerary.map((stop) => <li key={stop}>{stop}</li>)}
        </ul>
      </Block>
      {visit.manager ? <SiteManagement visit={visit} locale={locale} /> : (
        <Block title={`${t('about')} · ${guide.title}`}><p>{facts.type}. {t('individual')}</p></Block>
      )}

      <section className="mb-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-5 sm:p-7">
        <h2 className="mb-3 font-display text-xl font-semibold">{t('basic')}</h2>
        <table className="w-full table-fixed border-collapse text-left text-sm sm:text-base">
          <tbody>
            {info.map(([label, value]) => (
              <tr key={label} className="border-b border-[var(--border-color)] last:border-0">
                <th scope="row" className="w-2/5 break-words py-3 pr-3 align-top font-medium">{label}</th>
                <td className="break-words py-3 align-top text-[var(--text-secondary)]">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {source && <a className={linkClass + ' mt-3 inline-block text-sm'} href={source}>{t('source')}</a>}
      </section>

      <div id="opening-hours" className="scroll-mt-20">
        <Block title={t('hours')}>
          <p>{hours}</p>
          {facts.hours && visit.access && <p>{visit.access}</p>}
        </Block>
      </div>
      <Block title={t('tickets')}>
        <p>{facts.price ?? t('checkAdmission')}</p>
        {facts.source && <a className={linkClass} href={facts.source}>{t('current')}</a>}
      </Block>
      <Block title={t('getting')}>
        <p>{visit.transport ?? visit.address}</p>
      </Block>

      <Block title={t('history')}>
        {discovery.map((part) => (
          <div key={part.heading} className="space-y-2">
            <h3 className="font-semibold text-[var(--text-primary)]">{part.heading}</h3>
            <Paragraphs section={part} />
          </div>
        ))}
      </Block>
      <Block title={t('walk')}>
        <ol className="list-decimal space-y-2 pl-6">
          {(guide.walk ?? facts.itinerary).map((step) => <li key={step}>{step}</li>)}
        </ol>
      </Block>
      <Block title={t('before')}><p>{facts.tips}</p></Block>
      <Block title={t('photo')}>
        {camera ? <Paragraphs section={camera} /> : <p>{facts.itinerary.join(' → ')}.</p>}
      </Block>
      {visit.additionalPhoto && <GuidePhoto photo={visit.additionalPhoto} />}
      <Block title={t('stay')}><p>{facts.lodging}</p></Block>
      <Block title={t('reviews')}>
        {rating && <p>Google Maps {rating.value}/5 · {rating.count} {t('reviewUnit')} · <time dateTime={rating.date}>{new Intl.DateTimeFormat(locale, {dateStyle: 'medium', timeZone: 'UTC'}).format(new Date(rating.date))}</time></p>}
        <a className={linkClass} href={map}>
          {visit.reviews === false ? t('maps') : t('mapsReviews')}
        </a>
      </Block>
      <Block title={t('addressDirections')}>
        <p>{visit.address}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a className={linkClass} href={map}>{t('maps')}</a>
          <a className={linkClass} href={directionsLink(visit)}>{t('directions')}</a>
          {visit.source && visit.source !== source && <a className={linkClass} href={visit.source}>{t('additional')}</a>}
        </div>
      </Block>
    </>
  );
}
