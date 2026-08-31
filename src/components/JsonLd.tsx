const SITE = {
  domain: 'https://kourionamphitheater.com',
  fullName: 'Kourion Ancient Amphitheater',
  shortName: 'Kourion',
  city: 'Episkopi',
  region: 'Limassol District',
  country: 'Cyprus',
  countryCode: 'CY',
  postalCode: '4620',
  latitude: 34.6642914,
  longitude: 32.8878555,
  mapsShareUrl: 'https://maps.app.goo.gl/KxwFywyG12yxtgsF9',
  govtTourismUrl:
    'https://www.visitcyprus.com/en/discovercyprus/culture/sites-monuments/240-kourion-archaeological-site',
  telephone: '+35725934250',
  heroImage:
    'https://kourionamphitheater.com/gallery/kourion-ancient-amphitheater-1.jpg',
};

const allDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default async function JsonLd({ locale }: { locale: string }) {
  const messages = (await import(`@/messages/${locale}.json`)).default as any;

  const faqItems: Array<{ question: string; answer: string }> =
    messages?.faq?.items || [];

  const description =
    messages?.meta?.description ||
    `Comprehensive visitor guide to ${SITE.fullName} in ${SITE.city}, ${SITE.region}, ${SITE.country}.`;

  const touristAttraction = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${SITE.domain}/#attraction`,
    name: SITE.fullName,
    alternateName: [
      SITE.shortName,
      `${SITE.city} ${SITE.fullName}`,
      'Αρχαίο Θέατρο Κουρίου',
    ],
    description,
    url: `${SITE.domain}/${locale}`,
    image: [SITE.heroImage],
    isAccessibleForFree: false,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.fullName,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.latitude,
      longitude: SITE.longitude,
    },
    telephone: SITE.telephone,
    hasMap: SITE.mapsShareUrl,
    sameAs: [SITE.mapsShareUrl, SITE.govtTourismUrl],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: allDays,
        opens: '08:30',
        closes: '17:00',
        validFrom: '2026-09-16',
        validThrough: '2026-12-31',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: allDays,
        opens: '08:30',
        closes: '19:30',
        validFrom: '2026-04-16',
        validThrough: '2026-09-15',
      },
    ],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttraction) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
