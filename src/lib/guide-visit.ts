import type { Guide } from './guides';

export type GuidePhotoData = {
  url: string;
  source: string;
  credit: string;
  license: string;
  licenseUrl?: string;
  caption: string;
  width: number;
  height: number;
};

export type GuideVisit = {
  place: string;
  address: string;
  mapUrl?: string;
  reviews?: boolean;
  manager?: string;
  access?: string;
  transport?: string;
  source?: string;
  rating?: { value: string; count: string; date: string; dateLabel: string };
  photo?: GuidePhotoData;
  additionalPhoto?: GuidePhotoData;
  about?: string;
};

const archaeologySource =
  'https://www.limassoltourism.com/archaeological-sites/';

const kourion: GuideVisit = {
  place: 'Kourion Archaeological Site',
  address: 'Kourion Archaeological Site entrance, B6, Episkopi, Limassol District',
  manager: 'Department of Antiquities, Cyprus',
  access: 'Ticketed archaeological site. Check current hours and admission before visiting.',
  transport: 'Use the signed entrance off the B6 west of Episkopi. For bus travel, check the return service and walking route to the entrance.',
  source: archaeologySource,
};

const features: Record<string, string> = {
  'house-of-eustolios': 'House of Eustolios',
  'early-christian-basilica': 'Early Christian Basilica',
  'house-of-achilles': 'House of Achilles',
  'house-of-the-gladiators': 'House of the Gladiators',
  'kourion-stadium': 'Ancient Stadium of Kourion',
};

const landmarks: Record<string, GuideVisit> = {
  'ancient-theatre': {
    ...kourion,
    place: 'Kourion Ancient Amphitheater',
    address: 'MV7Q+P49, Episkopi, Akrotiri and Dhekelia 4620, Cyprus',
    mapUrl: 'https://maps.app.goo.gl/KxwFywyG12yxtgsF9',
    rating: { value: '4.7', count: '6,527', date: '2026-10-23', dateLabel: 'Site record, 23 October 2026' },
  },
  'kourion-beach': {
    place: 'Kourion Beach',
    address: 'Kourion Beach seafront, Episkopi Bay, Limassol District',
    manager: 'Kourion Municipality for municipal beach services',
    source: 'https://www.limassolchamber.eu/En/articles/2185/2025/07/08/Kourion-and-Limassol-Municipalities-take-initiative-on-beach',
    access: 'Public shore. Check sea conditions and seasonal lifeguard cover.',
    transport: 'Use the signed road down to the beachfront. The archaeological plateau has a separate entrance.',
  },
  'apollo-hylates': {
    ...kourion,
    place: 'Sanctuary of Apollo Hylates',
    address: 'Sanctuary of Apollo Hylates entrance, B6 west of Kourion, Episkopi',
    transport: 'Continue west on the B6 and turn at the signed sanctuary entrance. This is a separate stop from Kourion.',
  },
  'kolossi-castle': {
    ...kourion,
    place: 'Kolossi Medieval Castle',
    address: 'Kolossi Castle, Kolossi, Limassol District',
    transport: 'Follow the signed approach into Kolossi village and walk from public parking near the entrance.',
    source: 'https://www.visitcyprus.com/wp-content/uploads/2026/02/Culture-Booklet_ENG_web.pdf',
  },
  'cyprus-wine-museum': {
    place: 'Cyprus Wine Museum',
    address: 'Cyprus Wine Museum, Pafou Street, Erimi, Limassol District',
    manager: 'Cyprus Wine Museum',
    transport: 'Use Pafou Street through Erimi and look for the museum entrance in the village.',
    access: 'Check opening and admission directly with the museum.',
  },
  'lady-mile-beach': {
    place: 'Lady’s Mile Beach',
    address: 'Lady’s Mile Beach public approach, Akrotiri Peninsula',
    transport: 'Choose the stretch you want to visit before leaving Limassol. Use the public beach approach and follow local signs.',
    access: 'Public shore. Facilities and supervised bathing areas vary along the beach.',
  },
  'akrotiri-peninsula': {
    place: 'Akrotiri Environmental Education Centre',
    address: 'Akrotiri Environmental Education Centre, Akrotiri village',
    transport: 'Drive to the village using public roads. Plan onward wetland stops from the education centre.',
    source: 'https://visitakrotiri.cy/species-habitats/habitats/',
  },
  'episkopi-village': {
    place: 'Episkopi Village',
    address: 'Episkopi village centre, Limassol District',
    manager: 'Kourion Municipality for municipal services',
    source: 'https://kourion.org/',
    transport: 'Follow village signs from the B6. Plan the museum and coastal ruins as separate stops.',
    access: 'Public streets. Check individual venues for opening.',
  },
  'commandaria-region': {
    place: 'Laneia, a stop on the Commandaria Wine Route',
    address: 'Laneia Village Centre, Limassol District',
    access: 'Public village streets. Confirm winery visits and opening times with each operator.',
    transport: 'Use Laneia as an inland starting point and plan onward stops in Monagri or Trimiklini by road.',
    source: 'https://www.visitcyprus.com/discover-cyprus/rural/wine-routes-rural/commandaria-wine-route-2/',
    reviews: false,
  },
  limassol: {
    place: 'Limassol Old Port',
    address: 'Limassol Old Port, Limassol',
    transport: 'Use the Old Port as the starting point for the waterfront and old town on foot.',
  },
};

export function guideVisit(guide: Guide): GuideVisit | undefined {
  const feature = features[guide.slug];
  if (guide.visit) return guide.visit;
  if (landmarks[guide.slug]) return landmarks[guide.slug];
  if (guide.slug === 'tavernas-episkopi-erimi' || guide.slug === 'restaurants-near-kourion') {
    return { ...landmarks['episkopi-village'], reviews: false };
  }
  if (guide.slug === 'limassol-restaurants') return { ...landmarks.limassol, reviews: false };
  if (feature) return { ...kourion, place: feature, address: `${feature}, Kourion archaeological area, Episkopi` };
  if (['visit', 'transport', 'archaeology', 'itineraries', 'experiences', 'guides'].includes(guide.category)) {
    return kourion;
  }
}

export function mapsLink(visit: GuideVisit): string {
  return visit.mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(visit.address)}`;
}

export function directionsLink(visit: GuideVisit): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(visit.address)}`;
}
