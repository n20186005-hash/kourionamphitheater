import { guideVisit, type GuideVisit } from './guide-visit';
import { allGuides, getGuide, type Guide } from './guides';
import { nearbyVisitorFacts } from './nearby-visitor-facts';
import { guideLocales } from './guide-ui';
import type { Locale } from '@/i18n/routing';
import zh from './guide-translations/zh.json';
import el from './guide-translations/el.json';
import tr from './guide-translations/tr.json';

type Facts = NonNullable<ReturnType<typeof nearbyVisitorFacts>>;
type Translation = Pick<Guide, 'title' | 'metaDescription' | 'intro' | 'sections' | 'faq' | 'walk'> & {
  visit?: Pick<GuideVisit, 'place' | 'address' | 'manager' | 'about' | 'access' | 'transport'> & {
    photoCaption?: string;
    additionalPhotoCaption?: string;
  };
  facts?: Partial<Facts>;
};

const translations: Record<Exclude<Locale, 'en'>, Record<string, Translation>> = { zh, el, tr };

export function localizedGuide(category: string, slug: string, locale: Locale) {
  const original = getGuide(category, slug);
  if (!original) return;
  const visit = guideVisit(original);
  const facts = nearbyVisitorFacts(original);

  if (locale === 'en') return { guide: original, visit, facts };
  const localized = translations[locale][slug];
  if (!localized) return;
  const { visit: localizedVisit, facts: localizedFacts, ...content } = localized;
  const guide = { ...original, ...content };
  const localizedDetails = visit && localizedVisit ? {
    ...visit,
    place: localizedVisit.place,
    address: localizedVisit.address,
    mapAddress: visit.address,
    manager: localizedVisit.manager,
    about: localizedVisit.about,
    access: localizedVisit.access,
    transport: localizedVisit.transport,
    photo: visit.photo && { ...visit.photo, caption: localizedVisit.photoCaption ?? visit.photo.caption },
    additionalPhoto: visit.additionalPhoto && {
      ...visit.additionalPhoto,
      caption: localizedVisit.additionalPhotoCaption ?? visit.additionalPhoto.caption,
    },
  } : visit;

  return { guide, visit: localizedDetails, facts: facts && { ...facts, ...localizedFacts } };
}

export function localizedTitle(guide: Guide, locale: Locale) {
  return locale === 'en' ? guide.title : translations[locale][guide.slug]?.title ?? guide.title;
}

export function guideAlternates(base: string, category: string, slug: string) {
  return {
    ...Object.fromEntries(guideLocales.map((locale) => [locale, `${base}/${locale}/${category}/${slug}`])),
    'x-default': `${base}/en/${category}/${slug}`,
  };
}

export function guideParams() {
  return allGuides().flatMap(({ category, slug }) => guideLocales.map((locale) => ({ locale, category, slug })));
}
