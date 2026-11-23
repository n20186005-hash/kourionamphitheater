import type { Guide, GuideRef } from './guides';
import { NEARBY_EDITORIAL } from './nearby-editorial';
import { ADDITIONAL_NEARBY_PHOTOS } from './nearby-photos';
import { NEARBY_PLACES } from './nearby-places';

const kourion: GuideRef = { category: 'visit', slug: 'kourion-archaeological-site' };
const limassol: GuideRef = { category: 'nearby', slug: 'limassol' };

const groups = [
  ['kourion-archaeological-museum'],
  ['limassol-castle', 'limassol-marina', 'limassol-old-port', 'molos-seafront-sculpture-park', 'agia-napa-cathedral', 'limassol-archaeological-museum', 'limassol-zoo'],
  ['akrotiri-village', 'akrotiri-salt-lake', 'st-nicholas-of-the-cats', 'fasouri-watermania', 'cyprus-classic-motor-museum'],
  ['amathous-archaeological-site', 'agios-tychonas', 'monagroulli', 'governors-beach'],
  ['kalavasos-tenta', 'choirokoitia', 'tochni', 'maroni'],
  ['monagri', 'lofou', 'omodos', 'koilani', 'pachna', 'trimiklini', 'laneia'],
  ['anogyra', 'pissouri', 'pissouri-bay', 'avdimou', 'petra-tou-romiou', 'sanctuary-of-aphrodite-palaipafos'],
  ['pano-platres', 'caledonia-waterfalls'],
];

const published = new Set(NEARBY_PLACES.map((place) => place.slug));

export const nearbyGuides: Guide[] = NEARBY_PLACES.map((place) => {
  const editorial = NEARBY_EDITORIAL[place.slug];
  const neighbors = groups.find((group) => group.includes(place.slug)) ?? [];
  const related = neighbors
    .filter((slug) => slug !== place.slug && published.has(slug))
    .slice(0, 2)
    .map((slug) => ({ category: 'nearby', slug }));

  return {
    category: 'nearby',
    slug: place.slug,
    priority: 'P2',
    title: place.title,
    metaDescription: `Plan a visit to ${place.title}. See what to look for, how to get there and how to check current access.`,
    intro: place.feature,
    sections: [
      { heading: 'Planning your visit', body: [place.plan] },
      { heading: 'History and features', body: [editorial.history] },
      { heading: 'What to look for on site', body: [place.observation] },
    ],
    walk: editorial.walk,
    faq: [editorial.faq],
    related: [...related, kourion, limassol],
    updated: 'November 2026',
    modified: '2026-11-23',
    visit: {
      place: place.title,
      address: place.address,
      manager: place.manager,
      about: editorial.about,
      access: place.access,
      transport: place.transport,
      source: place.source,
      photo: place.photo,
      additionalPhoto: ADDITIONAL_NEARBY_PHOTOS[place.slug],
    },
  };
});
