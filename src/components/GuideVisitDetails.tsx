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

export function SiteManagement({ visit }: { visit: GuideVisit }) {
  if (!visit.manager) return null;

  return (
    <section className="mb-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 sm:p-8">
      <h2 className="mb-3 font-display text-xl font-semibold">
        {visit.about ? `About ${visit.place}` : 'Who manages this site'}
      </h2>
      <p className="text-[var(--text-secondary)]">{visit.about ?? visit.manager}</p>
      {visit.source && <a href={visit.source} className={`mt-3 inline-block text-sm ${linkClass}`}>Visitor information source</a>}
    </section>
  );
}

export default function GuideVisitDetails({ visit }: { visit: GuideVisit }) {
  const map = mapsLink(visit);
  return (
    <section className="mb-8 rounded-xl bg-[var(--bg-tertiary)] p-6" aria-labelledby="visitor-information">
      <h2 id="visitor-information" className="mb-4 font-display text-xl font-semibold">Visitor information</h2>
      <dl className="space-y-4 text-[var(--text-secondary)]">
        <div>
          <dt className="font-medium text-[var(--text-primary)]">Location</dt>
          <dd>{visit.address}</dd>
          <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <a className={linkClass} href={map}>Open Google Maps</a>
            {visit.about && <a className={linkClass} href={directionsLink(visit)}>Get directions</a>}
          </dd>
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
  );
}
