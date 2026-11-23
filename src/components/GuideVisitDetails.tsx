import type { Locale } from '@/i18n/routing';
import { guideText } from '@/lib/guide-ui';
import Image from 'next/image';
import { directionsLink, mapsLink, type GuidePhotoData, type GuideVisit } from '@/lib/guide-visit';

const linkClass = 'font-medium text-[var(--accent)] underline underline-offset-4';

export function GuidePhoto({ photo }: { photo: GuidePhotoData }) {
  return (
    <figure className="mb-8">
      <Image
        src={photo.url}
        alt={photo.caption}
        width={photo.width}
        height={photo.height}
        unoptimized
        className="h-auto max-h-[32rem] w-full rounded-xl object-contain bg-[var(--bg-tertiary)]"
      />
      <figcaption className="mt-2 text-sm text-[var(--text-secondary)]">
        {photo.caption} · <a href={photo.source} className={linkClass}>{photo.credit}</a>
        {' · '}
        {photo.licenseUrl ? <a href={photo.licenseUrl} className={linkClass}>{photo.license}</a> : photo.license}
      </figcaption>
    </figure>
  );
}

export function SiteManagement({ visit, locale }: { visit: GuideVisit; locale: Locale }) {
  const t = guideText(locale);
  if (!visit.manager) return null;

  return (
    <section className="mb-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 sm:p-8">
      <h2 className="mb-3 font-display text-xl font-semibold">
        {visit.about ? `${t('about')} · ${visit.place}` : t('manages')}
      </h2>
      <p className="text-[var(--text-secondary)]">{visit.about ?? visit.manager}</p>
      {visit.source && <a href={visit.source} className={`mt-3 inline-block text-sm ${linkClass}`}>{t('source')}</a>}
    </section>
  );
}

export default function GuideVisitDetails({ visit, locale }: { visit: GuideVisit; locale: Locale }) {
  const t = guideText(locale);
  const map = mapsLink(visit);
  return (
    <section className="mb-8 rounded-xl bg-[var(--bg-tertiary)] p-6" aria-labelledby="visitor-information">
      <h2 id="visitor-information" className="mb-4 font-display text-xl font-semibold">{t('info')}</h2>
      <dl className="space-y-4 text-[var(--text-secondary)]">
        <div>
          <dt className="font-medium text-[var(--text-primary)]">{t('address')}</dt>
          <dd>{visit.address}</dd>
          <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <a className={linkClass} href={map}>{t('maps')}</a>
            {visit.about && <a className={linkClass} href={directionsLink(visit)}>{t('directions')}</a>}
          </dd>
        </div>
        {visit.access && (
          <div>
            <dt className="font-medium text-[var(--text-primary)]">{t('hours')}</dt>
            <dd>{visit.access}</dd>
          </div>
        )}
        {visit.transport && (
          <div>
            <dt className="font-medium text-[var(--text-primary)]">{t('getting')}</dt>
            <dd>{visit.transport}</dd>
          </div>
        )}
        {visit.reviews !== false && (
          <div>
            <dt className="font-medium text-[var(--text-primary)]">{t('reviews')}</dt>
            <dd>
              {visit.rating && (
                <>
                  Google Maps {visit.rating.value}/5 ({visit.rating.count} {t('reviewUnit')})
                  {' · '}
                  <time dateTime={visit.rating.date}>{new Intl.DateTimeFormat(locale, {dateStyle: 'medium', timeZone: 'UTC'}).format(new Date(visit.rating.date))}</time>
                  {' · '}
                </>
              )}
              <a className={linkClass} href={map}>{t('mapsReviews')}</a>
            </dd>
          </div>
        )}
        {visit.source && (
          <div>
            <dt className="font-medium text-[var(--text-primary)]">{t('source')}</dt>
            <dd><a className={linkClass} href={visit.source}>{t('additional')}</a></dd>
          </div>
        )}
      </dl>
    </section>
  );
}
