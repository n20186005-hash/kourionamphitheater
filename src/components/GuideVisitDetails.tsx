import Image from 'next/image';
import { mapsLink, type GuideVisit } from '@/lib/guide-visit';

const linkClass = 'font-medium text-[var(--accent)] underline underline-offset-4';

export function GuidePhoto({ visit }: { visit: GuideVisit }) {
  const photo = visit.photo;
  if (!photo) return null;

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

export default function GuideVisitDetails({ visit }: { visit: GuideVisit }) {
  const map = mapsLink(visit);
  return (
    <>
      {visit.manager && (
        <section className="mb-8">
          <h2 className="mb-2 font-display text-xl font-semibold">Who manages this site</h2>
          <p className="text-[var(--text-secondary)]">{visit.manager}</p>
        </section>
      )}
      <section className="mb-8 rounded-xl bg-[var(--bg-tertiary)] p-6" aria-labelledby="visitor-information">
        <h2 id="visitor-information" className="mb-4 font-display text-xl font-semibold">Visitor information</h2>
        <dl className="space-y-4 text-[var(--text-secondary)]">
          <div>
            <dt className="font-medium text-[var(--text-primary)]">Location</dt>
            <dd>{visit.address} · <a className={linkClass} href={map}>Open Google Maps</a></dd>
          </div>
          {visit.access && (
            <div>
              <dt className="font-medium text-[var(--text-primary)]">Hours and access</dt>
              <dd>{visit.access}</dd>
            </div>
          )}
          {visit.transport && (
            <div>
              <dt className="font-medium text-[var(--text-primary)]">Getting there</dt>
              <dd>{visit.transport}</dd>
            </div>
          )}
          {visit.reviews !== false && (
            <div>
              <dt className="font-medium text-[var(--text-primary)]">Visitor reviews</dt>
              <dd>
                {visit.rating && (
                  <>
                    Google Maps {visit.rating.value}/5 ({visit.rating.count} reviews)
                    {' · '}
                    <time dateTime={visit.rating.date}>{visit.rating.dateLabel}</time>
                    {' · '}
                  </>
                )}
                <a className={linkClass} href={map}>Read current reviews on Google Maps</a>
              </dd>
            </div>
          )}
          {visit.source && (
            <div>
              <dt className="font-medium text-[var(--text-primary)]">Visitor source</dt>
              <dd><a className={linkClass} href={visit.source}>Site information</a></dd>
            </div>
          )}
        </dl>
      </section>
    </>
  );
}
