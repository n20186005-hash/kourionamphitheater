export type GuideSection = { heading: string; body: string[] };
export type GuideFaq = { question: string; answer: string };
export type GuideRef = { category: string; slug: string };

export type Guide = {
  category: string;
  slug: string;
  priority: 'P1' | 'P2' | 'P3';
  title: string;
  metaDescription: string;
  intro: string;
  sections: GuideSection[];
  faq: GuideFaq[];
  related: GuideRef[];
  updated: string;
};

export const CATEGORY_LABELS: Record<string, string> = {
  visit: 'Plan Your Visit',
  transport: 'Getting Here',
  archaeology: 'Archaeology',
  nearby: 'Nearby',
  food: 'Food & Drink',
  itineraries: 'Itineraries & Events',
  experiences: 'Experiences',
  guides: 'Guides',
};

// P1 pages (first batch). Content is English-first; Greek and other
// locales are added in a later batch per the expansion plan.
export const GUIDES: Guide[] = [
  {
    category: 'visit',
    slug: 'kourion-archaeological-site',
    priority: 'P1',
    title: 'Kourion Archaeological Site: Complete Visitor Guide',
    metaDescription:
      'A practical guide to the Kourion (Curium) archaeological site near Limassol: what to see, the ancient theatre, mosaics, layout, and how long to spend.',
    intro:
      'The Kourion archaeological site (also written Curium) sits on a coastal cliff about 19 km west of Limassol, above the village of Episkopi. It brings together a Greco-Roman theatre, early Christian basilicas, Roman baths, and some of the finest floor mosaics in Cyprus. This guide helps you plan a focused visit.',
    sections: [
      {
        heading: 'What the site includes',
        body: [
          'Kourion is spread across a large terraced area rather than a single building. The headline monuments are the Ancient Theatre, the House of Eustolios with its bath complex and mosaics, the House of Achilles and House of the Gladiators, the Early Christian Basilica, the Roman Agora and public baths, and the nearby Kourion Stadium.',
          'Allow at least 1.5–2 hours for the core route; add more if you want to read every mosaic panel and walk the cliff edge.',
        ],
      },
      {
        heading: 'The Ancient Theatre',
        body: [
          'Built in the 2nd century BC and rebuilt in Roman times, the theatre seats roughly 3,500 and still hosts performances today. Its backdrop — the Mediterranean on one side, the Kourios River valley on the other — is part of the experience.',
        ],
      },
      {
        heading: 'Mosaics not to miss',
        body: [
          'The House of Eustolios has a threshold inscription wishing "Good Fortune" and panels of birds, fish and geometric patterns. The House of Achilles shows the hero being dressed as a girl, and the House of the Gladiators takes its name from a mosaic of armed combatants.',
          'Photography is allowed for personal use; a tripod and flash may be restricted near fragile floors, so check on site.',
        ],
      },
      {
        heading: 'Practical notes',
        body: [
          'Shade is limited and the site is exposed. Carry water, wear a hat in summer, and visit early or late in the day between June and September.',
          'The Local Archaeological Museum of Kourion in Episkopi has been temporarily closed since 1 August 2026 for upgrade works, so plan to see the mosaics in situ rather than in the museum.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long should I spend at Kourion?',
        answer:
          'Most visitors need 1.5–2 hours for the theatre, mosaics and basilica. A relaxed half-day lets you add the stadium and the cliff walk.',
      },
      {
        question: 'Is Kourion the same as Curium?',
        answer:
          'Yes. Kourion and Curium are the same site; "Curium" is the older Latin form you will still see on some maps and older references.',
      },
      {
        question: 'Can I see Kourion and the beach in one trip?',
        answer:
          'Yes. Kourion Beach (Curium Beach) is a few minutes downhill from the site entrance area; see our Kourion and Beach day-trip guide for a suggested order.',
      },
    ],
    related: [
      { category: 'visit', slug: 'tickets' },
      { category: 'visit', slug: 'opening-hours' },
      { category: 'visit', slug: 'site-map' },
      { category: 'visit', slug: 'history' },
      { category: 'archaeology', slug: 'kourion-mosaics' },
      { category: 'itineraries', slug: 'kourion-half-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'visit',
    slug: 'tickets',
    priority: 'P1',
    title: 'Kourion Tickets, Discounts & How to Pay',
    metaDescription:
      'Kourion ticket price, who goes free, and how payment works at the site entrance near Limassol, Cyprus.',
    intro:
      'Admission to the Kourion archaeological site is managed by the Cyprus Department of Antiquities. This page summarises the standard ticket and what to verify before you travel.',
    sections: [
      {
        heading: 'Standard admission',
        body: [
          'The generally published standard adult ticket is about €4.50. Children under 12 are typically admitted free. Reduced rates for students, seniors and groups exist but change, so confirm the current figure at the ticket office or via the official Visit Cyprus listing before your visit.',
        ],
      },
      {
        heading: 'How to pay',
        body: [
          'Tickets are bought at the site entrance. Card acceptance at rural sites can be inconsistent, so carry some cash as a backup. Guided tours can be arranged through the Department of Antiquities; ask at the entrance.',
        ],
      },
      {
        heading: 'Combined and seasonal notes',
        body: [
          'A single ticket usually covers the main Kourion monuments. The nearby Sanctuary of Apollo Hylates is a separate site with its own admission. Always reconfirm prices and any holiday closures close to your travel dates.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much is the Kourion entrance fee?',
        answer:
          'The standard adult ticket is published at about €4.50, with children under 12 usually free. Verify the current price on the official Visit Cyprus page before you go.',
      },
      {
        question: 'Do I need to book tickets in advance?',
        answer:
          'For general visits, no — you buy at the entrance. During peak summer evenings with performances, event tickets are sold separately by the organisers.',
      },
      {
        question: 'Are there discounts for students or seniors?',
        answer:
          'Reduced rates are offered but the exact eligibility and amount change; confirm at the ticket office or the official tourism listing.',
      },
    ],
    related: [
      { category: 'visit', slug: 'opening-hours' },
      { category: 'visit', slug: 'site-map' },
      { category: 'itineraries', slug: 'kourion-and-beach' },
      { category: 'experiences', slug: 'events-and-performances' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'visit',
    slug: 'opening-hours',
    priority: 'P1',
    title: 'Kourion Opening Hours, Last Entry & Holidays',
    metaDescription:
      'When Kourion archaeological site is open, summer and winter hours, last entry, and closure days near Limassol.',
    intro:
      'Kourion follows the standard Cyprus antiquities schedule, with longer hours in summer. Plan around last entry, which is typically 30 minutes before closing.',
    sections: [
      {
        heading: 'Summer and winter hours',
        body: [
          'Summer (roughly mid-April to mid-September): about 08:30–19:30. Winter (mid-September to mid-April): about 08:30–17:00. These are the figures published by the Cyprus tourism authorities; always reconfirm before travel.',
        ],
      },
      {
        heading: 'Last entry and pacing',
        body: [
          'Last admission is normally 30 minutes before closing. Because the site is large and exposed, arrive at least 90 minutes before closing to see the main monuments comfortably.',
        ],
      },
      {
        heading: 'Closure days',
        body: [
          'The site is generally closed on Christmas Day, New Year’s Day and Greek Orthodox Easter. Local holidays can affect hours, so check official sources if you are travelling on or near a public holiday.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are Kourion’s opening hours?',
        answer:
          'About 08:30–19:30 in summer and 08:30–17:00 in winter, with last entry around 30 minutes before closing. Confirm against the official listing for your dates.',
      },
      {
        question: 'Is Kourion open on Sundays?',
        answer:
          'Yes, the site is normally open seven days a week in season; only major public holidays such as Christmas, New Year and Orthodox Easter are closed.',
      },
      {
        question: 'When is the best time of day to visit?',
        answer:
          'Early morning or late afternoon between June and September avoids the strongest heat and the largest crowds.',
      },
    ],
    related: [
      { category: 'visit', slug: 'tickets' },
      { category: 'visit', slug: 'best-time' },
      { category: 'itineraries', slug: 'kourion-half-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'visit',
    slug: 'site-map',
    priority: 'P1',
    title: 'Kourion Site Map & Suggested Visiting Order',
    metaDescription:
      'A walking order for the Kourion archaeological site: theatre, mosaics, basilica, baths and stadium, with distances and tips.',
    intro:
      'Kourion is spread out, so a sensible order saves time and avoids backtracking. This suggested route assumes you enter at the main site gate.',
    sections: [
      {
        heading: 'Suggested order',
        body: [
          '1) Start at the Ancient Theatre for the views. 2) Walk to the House of Eustolios (baths + mosaics). 3) Continue to the House of Achilles and House of the Gladiators. 4) Visit the Early Christian Basilica. 5) Loop back past the Agora and public baths. 6) If time allows, the Kourion Stadium lies a short drive away from the main complex.',
        ],
      },
      {
        heading: 'Distances and surfaces',
        body: [
          'Monuments are linked by compacted paths and some uneven stone. The full on-site loop is roughly 1–1.5 km of walking. Allow extra time in heat, and wear sturdy shoes.',
        ],
      },
      {
        heading: 'Accessibility',
        body: [
          'Some paths are stepped or uneven, and not all areas are wheelchair-friendly. If mobility is a concern, focus on the theatre terrace and the main mosaic houses, which are the most level.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I see everything without backtracking?',
        answer:
          'Enter at the main gate, do the theatre first, then move through the mosaic houses to the basilica and baths before looping back. The stadium is separate and best reached by car.',
      },
      {
        question: 'Is the site wheelchair accessible?',
        answer:
          'Partly. The theatre terrace and some mosaic houses are relatively level, but many paths are uneven or stepped.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'visit', slug: 'opening-hours' },
      { category: 'itineraries', slug: 'kourion-half-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'transport',
    slug: 'limassol-to-kourion',
    priority: 'P1',
    title: 'From Limassol to Kourion: Drive, Taxi & Transfer',
    metaDescription:
      'How to get from Limassol to the Kourion archaeological site: distance, drive time, taxi cost guidance and where to park.',
    intro:
      'Kourion is about 19 km west of central Limassol along the B6 coast road. Driving is the most flexible option; taxis and organised transfers are alternatives.',
    sections: [
      {
        heading: 'By car',
        body: [
          'Follow the B6 west toward Paphos and watch for the Kourion / Episkopi signs. The drive is about 20–25 minutes in normal conditions. Free parking is available at the site.',
        ],
      },
      {
        heading: 'By taxi or ride',
        body: [
          'A taxi from Limassol to Kourion is a common choice for a half-day trip. Agree the fare or use a metered/app ride, and arrange a return pickup in advance, because rank taxis are not always waiting at the site.',
        ],
      },
      {
        heading: 'Why not just the bus?',
        body: [
          'Public buses serve Kourion Beach, not the site entrance directly. From the beach stop it is a further ~2 km uphill to the entrance. If you rely on buses, see our bus-to-Kourion guide and plan the last leg.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is Kourion from Limassol?',
        answer:
          'About 19 km west, a 20–25 minute drive along the B6 coast road in normal traffic.',
      },
      {
        question: 'Is there parking at Kourion?',
        answer:
          'Yes, free parking is available at the site for cars and small buses.',
      },
      {
        question: 'Can I taxi there and back easily?',
        answer:
          'Yes, but arrange the return pickup in advance, as taxis do not usually wait at the site.',
      },
    ],
    related: [
      { category: 'transport', slug: 'bus-to-kourion' },
      { category: 'transport', slug: 'paphos-to-kourion' },
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'itineraries', slug: 'kourion-and-beach' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'transport',
    slug: 'bus-to-kourion',
    priority: 'P1',
    title: 'By Bus to Kourion: Routes, Beach Stop & Return',
    metaDescription:
      'EMEL buses 16 and 18 to Kourion Beach, the walk up to the site entrance, and how to plan your return.',
    intro:
      'Public buses get you close but not all the way to the gate. Plan the final uphill leg and your return before you set off.',
    sections: [
      {
        heading: 'Which buses',
        body: [
          'EMEL bus 16 runs from Leontiou (Limassol) to Kourion Beach, and bus 18 runs from My Mall to Kourion Beach. These are the closest public transport stops to the site. Timetables change, so check the current EMEL schedule before you travel.',
        ],
      },
      {
        heading: 'The last leg to the entrance',
        body: [
          'Kourion Beach is about 2 km from the archaeological site entrance, uphill. From the beach stop you can take a taxi for the final stretch or walk, allowing extra time and water in warm months.',
        ],
      },
      {
        heading: 'Returning',
        body: [
          'Buses are less frequent in the evening and on weekends. If you plan to stay for a sunset performance, pre-arrange a taxi back, because relying on the last bus can be risky.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which bus goes to Kourion?',
        answer:
          'EMEL routes 16 (Leontiou–Kourion Beach) and 18 (My Mall–Kourion Beach) serve Kourion Beach, the nearest stop to the site.',
      },
      {
        question: 'Does the bus stop at the site entrance?',
        answer:
          'No. Buses stop at Kourion Beach; the archaeological site entrance is about 2 km uphill from there. Plan a taxi or walk for the last leg.',
      },
      {
        question: 'How do I get back in the evening?',
        answer:
          'Evening buses are limited, so for events or late visits pre-book a taxi rather than relying on the last bus.',
      },
    ],
    related: [
      { category: 'transport', slug: 'limassol-to-kourion' },
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'experiences', slug: 'events-and-performances' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'archaeology',
    slug: 'house-of-eustolios',
    priority: 'P1',
    title: 'House of Eustolios: Baths & Mosaics at Kourion',
    metaDescription:
      'What to see in the House of Eustolios at Kourion: the "Good Fortune" mosaic, bath complex and early Christian chapel.',
    intro:
      'The House of Eustolios is one of Kourion’s richest buildings, combining a late-Roman private residence, a public-style bath suite and an early Christian chapel, all decorated with mosaics.',
    sections: [
      {
        heading: 'The "Good Fortune" threshold',
        body: [
          'A mosaic at the entrance wishes "Good Fortune" (Agathe Tyche) to visitors — a rare example of a written greeting set into a floor. It sets the tone for the rest of the house.',
        ],
      },
      {
        heading: 'Baths and apodyterium',
        body: [
          'The complex includes a changing room (apodyterium), cold and warm baths, and a frigidarium with a sea-themed mosaic of fish and a personification of the sea. The house was partly a public bathing facility as well as a residence.',
        ],
      },
      {
        heading: 'Chapel and later use',
        body: [
          'An early Christian chapel was added in a later phase, showing how the building’s use changed over centuries. The geometric and floral mosaics throughout are the main draw.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the House of Eustolios known for?',
        answer:
          'Its mosaics, especially the "Good Fortune" entrance panel and the sea-themed bath mosaics, plus a combined Roman bath and early Christian chapel.',
      },
      {
        question: 'How long does it take to see?',
        answer:
          'About 20–30 minutes as part of a full Kourion visit.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'nearby', slug: 'apollo-hylates' },
      { category: 'visit', slug: 'site-map' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'nearby',
    slug: 'kourion-beach',
    priority: 'P1',
    title: 'Kourion Beach (Curium Beach): Visitor Guide',
    metaDescription:
      'Kourion Beach near Limassol: Blue Flag status, facilities, where to eat, and how it pairs with a Kourion site visit.',
    intro:
      'Kourion Beach — often written Curium Beach — is the sandy stretch below the archaeological site. It is the closest place to swim, eat and cool off after touring the ruins.',
    sections: [
      {
        heading: 'The beach',
        body: [
          'A Blue Flag beach with a mix of sand and shingle and calm-ish shallow water relative to open coast. It gets busy in July and August, quieter in the shoulders.',
        ],
      },
      {
        heading: 'Facilities and food',
        body: [
          'The beach has basic facilities and a couple of restaurants, including the well-known Chris Blue Beach and the Kourion Beach Restaurant. See our restaurants-near-Kourion guide for options and how to choose.',
        ],
      },
      {
        heading: 'Pairing with the site',
        body: [
          'Because the beach is only minutes from the site entrance area, a "ruins then swim" or "swim then ruins" order works well. Our Kourion and Beach day-trip guide suggests a sequence.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Kourion Beach sandy?',
        answer:
          'It is a Blue Flag beach with a sand-and-shingle mix; the water is generally calmer than more exposed coves.',
      },
      {
        question: 'Can I eat at Kourion Beach?',
        answer:
          'Yes — there are beach restaurants such as Chris Blue Beach and the Kourion Beach Restaurant. Booking in high summer is wise.',
      },
      {
        question: 'How far is the beach from the archaeological site?',
        answer:
          'A few minutes by road; on foot it is about 2 km uphill from the beach to the site entrance.',
      },
    ],
    related: [
      { category: 'food', slug: 'restaurants-near-kourion' },
      { category: 'itineraries', slug: 'kourion-and-beach' },
      { category: 'nearby', slug: 'apollo-hylates' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'nearby',
    slug: 'apollo-hylates',
    priority: 'P1',
    title: 'Sanctuary of Apollo Hylates: Visit Guide',
    metaDescription:
      'The Sanctuary of Apollo Hylates near Kourion: what to see, opening context, and how to combine it with the archaeological site.',
    intro:
      'The Sanctuary of Apollo Hylates lies about 3 km west of the Kourion archaeological site and was an important religious centre in the Roman period.',
    sections: [
      {
        heading: 'What remains',
        body: [
          'You can walk the sacred precinct with a restored Roman gateway, the temple area, a bath house, a palaestra (exercise court) and storage rooms. The atmosphere is quieter than the main Kourion complex.',
        ],
      },
      {
        heading: 'Visiting tips',
        body: [
          'Allow 30–45 minutes. As a separate Department of Antiquities site it has its own admission. Combine it with Kourion in a single morning or afternoon.',
        ],
      },
      {
        heading: 'How to get there',
        body: [
          'It is a short drive west of Kourion along the coast road. If using buses, plan the Kourion Beach stop plus a taxi for the final legs, as with the main site.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is Apollo Hylates from Kourion?',
        answer:
          'About 3 km west of the Kourion archaeological site; easily combined in one visit.',
      },
      {
        question: 'Is Apollo Hylates a separate ticket?',
        answer:
          'Yes, it is a separate site with its own admission managed by the Department of Antiquities.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'nearby', slug: 'kourion-beach' },
      { category: 'itineraries', slug: 'kourion-half-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'nearby',
    slug: 'kolossi-castle',
    priority: 'P1',
    title: 'Kolossi Castle: Guide & Wine-Country Link',
    metaDescription:
      'Kolossi Castle near Limassol: history, what to see, and its link to Commandaria wine, with tips for combining it with Kourion.',
    intro:
      'Kolossi Castle is a well-preserved medieval stronghold a short drive east of Kourion, tied to the history of Commandaria, one of the world’s oldest named wines.',
    sections: [
      {
        heading: 'The castle',
        body: [
          'A square 15th-century tower with three floors, a hall, a chapel and a defensive rooftop. It was the administrative centre of the surrounding sugar and wine estates held by the Order of St John and later the Knights Templar.',
        ],
      },
      {
        heading: 'Commandaria connection',
        body: [
          'The Kolossi estate gave its name to Commandaria, a sweet fortified wine produced in the region for centuries. The Cyprus Wine Museum in Erimi tells the wider story.',
        ],
      },
      {
        heading: 'Combining with Kourion',
        body: [
          'Kolossi is roughly 15–20 minutes east of Kourion by car. A "Kourion + Kolossi + wine" loop makes a strong full-day plan; see our wine-country itinerary for the route.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is Kolossi Castle from Kourion?',
        answer:
          'About 15–20 minutes by car east of the Kourion site.',
      },
      {
        question: 'Why is Kolossi linked to wine?',
        answer:
          'The castle estate was central to producing Commandaria, the historic sweet wine of Cyprus; the Cyprus Wine Museum in Erimi covers the story.',
      },
    ],
    related: [
      { category: 'food', slug: 'cyprus-wine-museum' },
      { category: 'food', slug: 'restaurants-near-kourion' },
      { category: 'itineraries', slug: 'kourion-and-beach' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'food',
    slug: 'restaurants-near-kourion',
    priority: 'P1',
    title: 'Restaurants Near Kourion: Where to Eat',
    metaDescription:
      'Where to eat near Kourion: beach restaurants, Episkopi and Erimi tavernas, and coffee stops, with how to choose.',
    intro:
      'Eating near Kourion splits into three clusters: the beach below the site, the village of Episkopi just inland, and Erimi to the east with its wine focus.',
    sections: [
      {
        heading: 'At the beach',
        body: [
          'The closest option after a site visit is the beach restaurants such as Chris Blue Beach and the Kourion Beach Restaurant, good for seafood and a cold drink with a sea view.',
        ],
      },
      {
        heading: 'Episkopi village',
        body: [
          'A few minutes inland, Episkopi has traditional Cypriot tavernas for a more local, low-key meal. Note that the Local Archaeological Museum of Kourion there is temporarily closed (since 1 August 2026), so plan a meal rather than a museum stop.',
        ],
      },
      {
        heading: 'Erimi and wine country',
        body: [
          'East toward Erimi you’ll find village tavernas, the Bucc pub-restaurant and the Cyprus Wine Museum. See our Episkopi–Erimi tavernas and wine-museum pages for specifics.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where is the closest place to eat after Kourion?',
        answer:
          'The beach restaurants below the site (e.g. Chris Blue Beach, Kourion Beach Restaurant) are the closest; Episkopi village is a few minutes inland.',
      },
      {
        question: 'Are there tavernas in Episkopi?',
        answer:
          'Yes, Episkopi has traditional Cypriot tavernas; the village museum is temporarily closed, so plan to eat rather than visit it.',
      },
    ],
    related: [
      { category: 'nearby', slug: 'kourion-beach' },
      { category: 'food', slug: 'tavernas-episkopi-erimi' },
      { category: 'food', slug: 'cyprus-wine-museum' },
      { category: 'itineraries', slug: 'kourion-and-beach' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'food',
    slug: 'cyprus-wine-museum',
    priority: 'P1',
    title: 'Cyprus Wine Museum: Tasting & Visit Guide',
    metaDescription:
      'The Cyprus Wine Museum in Erimi: what to see, tasting information, and its place in a Kourion wine-country day.',
    intro:
      'The Cyprus Wine Museum in Erimi tells the island’s winemaking story, with a focus on Commandaria, and offers tasting experiences. Confirm current opening and tasting details directly before you go.',
    sections: [
      {
        heading: 'What to expect',
        body: [
          'Exhibits cover the history of Cypriot wine from antiquity to today, with an emphasis on Commandaria. Tastings and short tours are offered, but formats and prices change, so verify with the museum.',
        ],
      },
      {
        heading: 'Getting there',
        body: [
          'Erimi is east of Kourion, on the way toward Kolossi and Limassol. It pairs naturally with Kolossi Castle on a wine-themed loop.',
        ],
      },
      {
        heading: 'Plan your visit',
        body: [
          'If you intend to taste, arrange a driver or designate a driver. Combine with Kolossi Castle and a Kourion site visit for a full day.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can you taste wine at the Cyprus Wine Museum?',
        answer:
          'Tastings are offered, but the exact format and price change — confirm directly with the museum before visiting.',
      },
      {
        question: 'How does it fit with Kourion?',
        answer:
          'Erimi is east of Kourion toward Kolossi; a Kourion + Kolossi + wine museum day works well.',
      },
    ],
    related: [
      { category: 'nearby', slug: 'kolossi-castle' },
      { category: 'food', slug: 'restaurants-near-kourion' },
      { category: 'itineraries', slug: 'kourion-and-beach' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'itineraries',
    slug: 'kourion-half-day',
    priority: 'P1',
    title: 'Kourion Half-Day Itinerary: What to Prioritise',
    metaDescription:
      'A half-day plan for Kourion: the theatre, mosaics, basilica and a beach finish, with timing and tips.',
    intro:
      'If you have half a day, focus on the headline monuments and leave the extended ruins and stadium for another trip. This plan assumes a morning or late-afternoon start.',
    sections: [
      {
        heading: 'The 2–3 hour route',
        body: [
          'Arrive, go straight to the Ancient Theatre for the views, then the House of Eustolios mosaics, the House of Achilles and Gladiators, and the Early Christian Basilica. That covers the essentials in about 2 hours.',
        ],
      },
      {
        heading: 'Add a beach or swim',
        body: [
          'If it’s warm, finish at Kourion Beach below the site for a swim and lunch. See the Kourion and Beach guide for the sequence.',
        ],
      },
      {
        heading: 'Timing tips',
        body: [
          'Buy your ticket on arrival, carry water, and start early in summer. Check the opening-hours page for last entry.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I see Kourion in half a day?',
        answer:
          'Yes — the theatre, mosaic houses and basilica fit comfortably into 2–3 hours, with time left for the beach.',
      },
      {
        question: 'What should I skip if short on time?',
        answer:
          'Prioritise the theatre and Eustolios mosaics; leave the stadium and longer cliff walk for a full-day visit.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'visit', slug: 'site-map' },
      { category: 'visit', slug: 'opening-hours' },
      { category: 'itineraries', slug: 'kourion-full-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'itineraries',
    slug: 'kourion-and-beach',
    priority: 'P1',
    title: 'Kourion + Beach Day Trip: Ruins, Swim & Lunch',
    metaDescription:
      'A full-day plan combining the Kourion archaeological site with Kourion Beach, swimming and lunch.',
    intro:
      'Kourion and its beach sit minutes apart, making a natural "culture then coast" day. This guide suggests an order that beats the midday heat.',
    sections: [
      {
        heading: 'Morning at the site',
        body: [
          'Start at the archaeological site when it opens or soon after. Do the theatre and mosaics before the heat peaks, and keep the visit to about 2–3 hours.',
        ],
      },
      {
        heading: 'Midday at the beach',
        body: [
          'Descend to Kourion Beach for a swim and lunch at a beach restaurant such as Chris Blue Beach or the Kourion Beach Restaurant. Book ahead in July–August.',
        ],
      },
      {
        heading: 'Afternoon options',
        body: [
          'Add the Sanctuary of Apollo Hylates (about 3 km west) or simply relax at the beach. If you have a car, Kolossi Castle and the Cyprus Wine Museum extend the day wine-country style.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I do Kourion and the beach in one day?',
        answer:
          'Easily — the site and beach are minutes apart. Visit the ruins in the cooler morning, then swim and lunch at the beach.',
      },
      {
        question: 'Where should I eat?',
        answer:
          'Beach restaurants like Chris Blue Beach and the Kourion Beach Restaurant are the closest; Episkopi village has quieter tavernas.',
      },
    ],
    related: [
      { category: 'nearby', slug: 'kourion-beach' },
      { category: 'food', slug: 'restaurants-near-kourion' },
      { category: 'itineraries', slug: 'kourion-half-day' },
      { category: 'itineraries', slug: 'kourion-full-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'experiences',
    slug: 'events-and-performances',
    priority: 'P1',
    title: 'Events & Performances at Kourion Theatre',
    metaDescription:
      'How to find the current Kourion theatre programme, buy event tickets, and plan transport for evening performances.',
    intro:
      'The Ancient Theatre of Kourion still hosts performances, most visibly in summer. This page explains how to find the real programme and avoid assuming a fixed schedule.',
    sections: [
      {
        heading: 'Programme is announced per season',
        body: [
          'Kourion is one of several Cypriot ancient theatres used for performances. The exact lineup — drama, music, dance — is announced by the organising bodies each year and changes, so do not rely on a fixed monthly calendar. Check official announcements and the venue/organiser listings for the current season.',
        ],
      },
      {
        heading: 'Buying tickets',
        body: [
          'Event tickets are sold separately from the site admission, usually through the organisers or official box offices. Buy in advance for July–August, when popular evenings sell out.',
        ],
      },
      {
        heading: 'Evening transport',
        body: [
          'Buses are limited in the evening. If you attend a performance, pre-arrange a taxi back, or drive and use the site parking. See the bus-to-Kourion guide for the daytime options.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is on at Kourion theatre right now?',
        answer:
          'The programme is announced each season by the organisers and changes year to year. Check official event listings for the current schedule rather than assuming a fixed show.',
      },
      {
        question: 'Are event tickets included with site entry?',
        answer:
          'No. Performance tickets are sold separately by the organisers or box office.',
      },
      {
        question: 'How do I get back after an evening show?',
        answer:
          'Pre-book a taxi; evening buses are limited.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'transport', slug: 'bus-to-kourion' },
      { category: 'visit', slug: 'tickets' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'visit',
    slug: 'best-time',
    priority: 'P2',
    title: 'Best Time to Visit Kourion: Seasons, Heat & Crowds',
    metaDescription:
      'When to visit the Kourion archaeological site near Limassol: monthly weather, peak crowds, and how to avoid the summer heat.',
    intro:
      'Kourion is open year-round, but the experience changes a lot with the season. This guide helps you pick the best window for the theatre, mosaics and the cliff-edge views.',
    sections: [
      {
        heading: 'Spring and autumn (best balance)',
        body: [
          'March–May and September–November bring warm but not punishing temperatures, lighter crowds, and good light for photography. These shoulder months are the most comfortable for walking the exposed site.',
          'Wildflowers and green hills in spring make the cliff-edge setting especially photogenic.',
        ],
      },
      {
        heading: 'Summer (hot and busy)',
        body: [
          'June–September is the peak tourist season and also the hottest. Midday temperatures on the open site can be severe, with little shade.',
          'If you visit in summer, arrive at opening (about 08:30) or late afternoon, carry water and a hat, and keep the visit to the cooler parts of the day. Evening performances make summer nights pleasant.',
        ],
      },
      {
        heading: 'Winter',
        body: [
          'December–February is mild by northern-European standards but can be wet and windy on the cliff. Hours are shorter (about 08:30–17:00) and some facilities around the site run reduced schedules.',
          'The upside is solitude — you may have the theatre almost to yourself on a clear winter morning.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best month to visit Kourion?',
        answer:
          'April–May and September–October usually offer the best mix of comfortable heat, good light and smaller crowds.',
      },
      {
        question: 'Is Kourion too hot in summer?',
        answer:
          'It can be. The site is exposed with little shade; visit early or late in the day between June and September and carry water.',
      },
      {
        question: 'When is it quietest?',
        answer:
          'Winter weekdays are the quietest, though hours are shorter and the weather is less predictable.',
      },
    ],
    related: [
      { category: 'visit', slug: 'opening-hours' },
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'itineraries', slug: 'kourion-half-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'visit',
    slug: 'history',
    priority: 'P2',
    title: 'History of Kourion: From Antiquity to Excavation',
    metaDescription:
      'A short history of Kourion (Curium): its Greek, Roman and early Christian phases, the earthquakes, and modern excavations.',
    intro:
      'Kourion occupies a dramatic cliff-top above the Kouris River valley, and has been a focus of settlement and worship for millennia. This page summarises its long story without over-claiming exact dates.',
    sections: [
      {
        heading: 'Origins and the city-kingdom',
        body: [
          'Kourion was one of the ancient city-kingdoms of Cyprus, with roots in the Late Bronze Age and a flourishing Greek and Roman period. Its position above the coast made it both defensible and scenic.',
          'The name appears in ancient sources as Kourion; "Curium" is the Latinised form still seen on older maps.',
        ],
      },
      {
        heading: 'Romans, earthquakes and the Christian era',
        body: [
          'Under Roman rule the site gained its theatre, bath complexes and fine houses with mosaics. A series of earthquakes — notably in the 4th century AD — damaged the city and reshaped its later history.',
          'An early Christian basilica and baptistery show the site’s continued importance into the Byzantine period before later decline.',
        ],
      },
      {
        heading: 'Modern excavation',
        body: [
          'Systematic excavations from the late 19th and 20th centuries uncovered the theatre, mosaic houses, basilica and stadium. Finds from the area are displayed in Cypriot museums; the on-site museum in Episkopi is currently closed for upgrade works.',
          'Because excavation and conservation continue, some areas may be roped off during your visit — follow on-site guidance.',
        ],
      },
    ],
    faq: [
      {
        question: 'How old is Kourion?',
        answer:
          'The site has Bronze Age roots and major Greek and Roman phases; the visible theatre and mosaic houses are largely classical and late-Roman.',
      },
      {
        question: 'Why is it called Curium too?',
        answer:
          'Curium is the older Latin form of Kourion, still found on some older maps and references.',
      },
      {
        question: 'What damaged Kourion?',
        answer:
          'Earthquakes — especially in the 4th century AD — caused major damage, alongside the normal cycles of abandonment and rebuilding.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'archaeology', slug: 'house-of-eustolios' },
      { category: 'archaeology', slug: 'kourion-mosaics' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'visit',
    slug: 'accessibility',
    priority: 'P2',
    title: 'Accessibility & Families at Kourion',
    metaDescription:
      'Practical accessibility notes for Kourion: paths, steps, shade, pushchairs, and tips for visiting with children or limited mobility.',
    intro:
      'Kourion is a real archaeological site, not a paved attraction, so access is mixed. This page sets expectations and offers ways to enjoy the highlights with limited mobility, children or a pushchair.',
    sections: [
      {
        heading: 'Terrain and paths',
        body: [
          'The monuments are linked by compacted earth paths and some uneven, stepped stone. The theatre terrace and the main mosaic houses are the most level and reachable.',
          'Wheelchair users and those with walking difficulties should focus on the theatre and the House of Eustolios area, which are relatively flat, and allow a companion to assist on the rougher stretches.',
        ],
      },
      {
        heading: 'With children',
        body: [
          'Older children usually enjoy the open theatre and the storytelling of the mosaics. Bring water, sun protection and snacks; there is limited shade on site.',
          'A short, focused visit (theatre + one or two mosaic houses) works better with kids than a long, hot loop.',
        ],
      },
      {
        heading: 'Facilities and comfort',
        body: [
          'Toilets and a small kiosk are near the entrance; the beach below has fuller facilities. Visit early or late in summer to avoid heat, and keep babies and toddlers out of direct midday sun.',
          'If you need specific accessibility arrangements, contact the site or the Department of Antiquities ahead of your visit to confirm current provision.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Kourion wheelchair accessible?',
        answer:
          'Partly. The theatre terrace and some mosaic houses are relatively level, but many paths are uneven or stepped; plan a shorter, companion-assisted route.',
      },
      {
        question: 'Is Kourion good with kids?',
        answer:
          'Yes for older children, if you keep the visit short, shaded and hydrated; the open theatre and mosaics are the easy wins.',
      },
      {
        question: 'Are there toilets and shade?',
        answer:
          'Basic toilets and a kiosk are by the entrance; shade is limited on the site itself, so bring protection.',
      },
    ],
    related: [
      { category: 'visit', slug: 'site-map' },
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'visit', slug: 'opening-hours' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'transport',
    slug: 'paphos-to-kourion',
    priority: 'P2',
    title: 'From Paphos to Kourion: Drive, Bus & Distance',
    metaDescription:
      'How to get from Paphos (city or airport) to the Kourion archaeological site: distance, drive time and practical tips.',
    intro:
      'Paphos is about 50–60 km west of Kourion, making it a feasible day trip if you have a car or join a tour. This page covers the practical route.',
    sections: [
      {
        heading: 'By car',
        body: [
          'Take the A6 motorway east toward Limassol, then the B6 coast road west to the Kourion / Episkopi turning. The drive is roughly 50–70 minutes depending on traffic and your exact start point in Paphos.',
          'Parking is free at the site. A car gives you the flexibility to add the Sanctuary of Apollo Hylates and Kourion Beach in the same trip.',
        ],
      },
      {
        heading: 'By bus or tour',
        body: [
          'There is no direct public bus from Paphos to the site entrance; services run along the coast but require changes and leave you at the beach, not the gate. Most visitors from Paphos drive, rent a car, or join an organised excursion.',
          'If you rely on buses, plan the Kourion Beach stop plus a taxi for the final ~2 km uphill, and check current timetables.',
        ],
      },
      {
        heading: 'From Paphos airport',
        body: [
          'Paphos International Airport is near the city, so the route above applies; budget about an hour to 90 minutes including picking up a rental car. See our dedicated airport pages if you are comparing arrivals.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is Kourion from Paphos?',
        answer:
          'Around 50–60 km east, about a 50–70 minute drive via the A6 and B6.',
      },
      {
        question: 'Can I take a bus from Paphos to Kourion?',
        answer:
          'Not directly to the gate; public buses require changes and stop at the beach. Driving or a tour is far easier from Paphos.',
      },
      {
        question: 'Is Kourion worth a day trip from Paphos?',
        answer:
          'Yes if you have a car or tour; pair it with the beach and Apollo Hylates for a full day.',
      },
    ],
    related: [
      { category: 'transport', slug: 'limassol-to-kourion' },
      { category: 'transport', slug: 'bus-to-kourion' },
      { category: 'nearby', slug: 'apollo-hylates' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'transport',
    slug: 'larnaca-airport-to-kourion',
    priority: 'P2',
    title: 'From Larnaca Airport to Kourion',
    metaDescription:
      'Getting from Larnaca International Airport to Kourion near Limassol: distance, drive time, car hire and transfer options.',
    intro:
      'Most international flights land at Larnaca, about 65 km from Kourion. This page covers the realistic ways to make the trip.',
    sections: [
      {
        heading: 'By rental car',
        body: [
          'From Larnaca Airport, take the A3 toward Limassol, then the A1/A6 and the B6 coast road west to Kourion. The drive is roughly 60–75 minutes in normal conditions.',
          'Car hire at the airport is the most flexible option and lets you combine Kourion with Limassol, the wine villages and the beach.',
        ],
      },
      {
        heading: 'By taxi or transfer',
        body: [
          'Airport taxis and pre-booked transfers cover the route; agree the fare or book a fixed-price transfer, as meters and apps vary. Allow extra time in summer peak arrivals.',
          'For a return to an evening flight, pre-arrange pickup, because rank taxis are not always waiting at the site.',
        ],
      },
      {
        heading: 'By bus',
        body: [
          'Public buses from the airport area to the site are not direct; you would change toward Limassol and then use the Kourion Beach bus plus a taxi for the final leg. Most travellers from Larnaca simply rent a car or transfer.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is Kourion from Larnaca Airport?',
        answer:
          'About 65 km, roughly a 60–75 minute drive in normal traffic.',
      },
      {
        question: 'Should I rent a car at Larnaca?',
        answer:
          'For Kourion and the surrounding sights, yes — it is the most flexible way to reach the site and explore the coast.',
      },
      {
        question: 'Is there a direct bus from the airport?',
        answer:
          'No direct public bus to the gate; driving or a transfer is the practical choice.',
      },
    ],
    related: [
      { category: 'transport', slug: 'limassol-to-kourion' },
      { category: 'transport', slug: 'paphos-airport-to-kourion' },
      { category: 'visit', slug: 'kourion-archaeological-site' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'transport',
    slug: 'paphos-airport-to-kourion',
    priority: 'P2',
    title: 'From Paphos Airport to Kourion',
    metaDescription:
      'Getting from Paphos International Airport to Kourion near Limassol: distance, drive time and the simplest route.',
    intro:
      'Paphos Airport is the closer of the two airports to Kourion, about 50 km away. This page covers the practical transfer.',
    sections: [
      {
        heading: 'By rental car',
        body: [
          'From Paphos Airport, join the A6 east toward Limassol, then the B6 coast road to the Kourion / Episkopi turning. The drive is roughly 50–70 minutes.',
          'Hiring at the airport gives you the freedom to add the beach, Apollo Hylates and Kolossi Castle on the same day.',
        ],
      },
      {
        heading: 'By taxi or transfer',
        body: [
          'Taxis and pre-booked transfers run the route; fix the price or use a metered/app ride and allow buffer time. Return pickups should be arranged in advance.',
          'If you have an evening flight, confirm your return transfer before the site closes.',
        ],
      },
      {
        heading: 'By bus',
        body: [
          'There is no direct public bus from Paphos Airport to the site entrance; you would change toward Limassol and finish with the Kourion Beach bus plus a taxi for the last ~2 km. Most visitors drive or transfer.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is Kourion from Paphos Airport?',
        answer:
          'About 50 km, roughly a 50–70 minute drive via the A6 and B6.',
      },
      {
        question: 'Is Paphos or Larnaca airport closer to Kourion?',
        answer:
          'Paphos is closer (about 50 km) than Larnaca (about 65 km), though many flights use Larnaca.',
      },
      {
        question: 'Can I bus directly from Paphos Airport?',
        answer: 'No direct bus to the gate; driving or a transfer is simplest.',
      },
    ],
    related: [
      { category: 'transport', slug: 'paphos-to-kourion' },
      { category: 'transport', slug: 'larnaca-airport-to-kourion' },
      { category: 'nearby', slug: 'kolossi-castle' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'archaeology',
    slug: 'kourion-mosaics',
    priority: 'P2',
    title: 'The Mosaics of Kourion: Houses & Panels',
    metaDescription:
      'A guide to the Kourion mosaics: the House of Eustolios, House of Achilles, House of the Gladiators and what the panels show.',
    intro:
      'Kourion’s floor mosaics are among the finest in Cyprus. This page walks through the main houses and the stories set into their floors.',
    sections: [
      {
        heading: 'House of Eustolios',
        body: [
          'The richest mosaic suite on site, with the "Good Fortune" threshold greeting, geometric and floral panels, and sea-themed bath mosaics of fish and a personification of the sea.',
          'An early Christian chapel was added later, showing how the building’s use evolved over time.',
        ],
      },
      {
        heading: 'House of Achilles and House of the Gladiators',
        body: [
          'The House of Achilles takes its name from a panel showing Achilles being dressed as a girl to hide him; the House of the Gladiators depicts armed combatants, a rare subject in Cypriot mosaics.',
          'Both houses show the late-Roman taste for narrative and mythological flooring in private villas.',
        ],
      },
      {
        heading: 'Seeing them well',
        body: [
          'Photography for personal use is allowed, but flash and tripods may be restricted near fragile floors — follow on-site signs. Visit in good light (morning or late afternoon) for the best views of the patterns.',
          'Because the Episkopi museum holding related finds is temporarily closed, the in-situ mosaics are the main way to appreciate this art on a visit.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where are the best mosaics at Kourion?',
        answer:
          'The House of Eustolios has the finest suite, with the "Good Fortune" panel and sea-themed baths; the Houses of Achilles and Gladiators add narrative scenes.',
      },
      {
        question: 'Can I take photos of the mosaics?',
        answer:
          'Personal photography is generally allowed, but flash and tripods may be restricted near fragile floors — check on site.',
      },
      {
        question: 'Why are the mosaics important?',
        answer:
          'They are among the best-preserved late-Roman floor mosaics in Cyprus and show both decorative and mythological storytelling.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'archaeology', slug: 'house-of-eustolios' },
      { category: 'visit', slug: 'accessibility' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'archaeology',
    slug: 'ancient-theatre',
    priority: 'P2',
    title: 'The Ancient Theatre of Kourion',
    metaDescription:
      'A guide to the Ancient Theatre of Kourion: its history, seating, acoustics and modern summer performances.',
    intro:
      'The theatre is the postcard image of Kourion — a semicircular auditorium on the cliff edge with the Mediterranean behind it. This page covers its past and present.',
    sections: [
      {
        heading: 'History and form',
        body: [
          'Built in the 2nd century BC and rebuilt in Roman times, the theatre seats roughly 3,500 across its semicircular cavea. Its position uses the natural slope of the cliff for the seating.',
          'Earthquakes damaged the structure over the centuries; what stands today is the reconstructed Roman-phase theatre.',
        ],
      },
      {
        heading: 'Acoustics and views',
        body: [
          'Like many ancient theatres, it has remarkable natural acoustics — a voice on the stage carries to the upper rows. The backdrop of sea and valley is a large part of the experience.',
          'Stand on the stage and look out: the open horizon is why performances here feel special.',
        ],
      },
      {
        heading: 'Performances today',
        body: [
          'The theatre still hosts events, most visibly in summer, but the programme is announced per season by the organisers and changes year to year (see our events page for how to find the current schedule).',
          'If you attend, plan evening transport in advance, as buses are limited after dark.',
        ],
      },
    ],
    faq: [
      {
        question: 'How old is the Kourion theatre?',
        answer:
          'It dates to the 2nd century BC, rebuilt in Roman times; the visible structure is the reconstructed Roman-phase theatre.',
      },
      {
        question: 'Does the theatre still host shows?',
        answer:
          'Yes, especially in summer, but the lineup is announced each season by the organisers and varies — check official listings.',
      },
      {
        question: 'How many people does it seat?',
        answer: 'Roughly 3,500 across the semicircular auditorium.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'experiences', slug: 'events-and-performances' },
      { category: 'nearby', slug: 'kourion-beach' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'nearby',
    slug: 'limassol',
    priority: 'P2',
    title: 'Limassol: Base for Visiting Kourion',
    metaDescription:
      'Using Limassol as a base for Kourion: where to stay, getting to the site, and pairing the city with the archaeological site.',
    intro:
      'Limassol is the natural base for Kourion — about 19 km east, with hotels, car hire and transport. This page helps you use the city as a launch pad.',
    sections: [
      {
        heading: 'Why base here',
        body: [
          'Limassol has the widest choice of accommodation, car hire and amenities, and is the transport hub for the south coast. Kourion is a short drive or taxi ride west along the B6.',
          'It also pairs well with wine-country trips inland and beach time on either side of the city.',
        ],
      },
      {
        heading: 'Getting to Kourion',
        body: [
          'By car it is 20–25 minutes west via the B6. Taxis are easy to arrange; public buses reach Kourion Beach but not the gate directly (see our bus guide).',
          'A hire car lets you combine Kourion with Apollo Hylates, Kolossi and the beach in one loop.',
        ],
      },
      {
        heading: 'What else nearby',
        body: [
          'The Limassol Archaeological Museum, the old town and the promenade add city culture before or after the ruins. Wine villages of the Troodos foothills are a longer but rewarding day out.',
          'For food, see our restaurants-near-Kourion guide covering beach, Episkopi and Erimi options.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Limassol a good base for Kourion?',
        answer:
          'Yes — it has the most accommodation and transport, and Kourion is only about 20–25 minutes west by car.',
      },
      {
        question: 'How do I get from Limassol to Kourion without a car?',
        answer:
          'Taxis are straightforward; public buses reach Kourion Beach but not the entrance, so plan a taxi for the last leg.',
      },
      {
        question: 'What can I combine with Kourion from Limassol?',
        answer:
          'Apollo Hylates, Kolossi Castle, the wine villages and Kourion Beach all sit within an easy loop.',
      },
    ],
    related: [
      { category: 'transport', slug: 'limassol-to-kourion' },
      { category: 'nearby', slug: 'kolossi-castle' },
      { category: 'nearby', slug: 'episkopi-village' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'nearby',
    slug: 'episkopi-village',
    priority: 'P2',
    title: 'Episkopi Village: Near Kourion',
    metaDescription:
      'Episkopi village near Kourion: tavernas, the (temporarily closed) local museum, and how to use it as a stop on your visit.',
    intro:
      'The village of Episkopi sits just inland below the Kourion cliff. It is the closest place for a traditional Cypriot meal and a quieter counterpoint to the site.',
    sections: [
      {
        heading: 'Eating and village life',
        body: [
          'Episkopi has traditional tavernas for a local, low-key meal a few minutes from the site. It is a good alternative to the beach restaurants if you want something more Cypriot.',
          'The village is also a handy point for supplies and a coffee stop on a hot day.',
        ],
      },
      {
        heading: 'The local museum (closed)',
        body: [
          'The Local Archaeological Museum of Kourion in Episkopi has been temporarily closed since 1 August 2026 for upgrade works, with no announced reopening date. Plan to see the mosaics in situ at the site rather than at the museum.',
          'This is also why we point visitors toward the on-site monuments and nearby alternatives such as the Cyprus Wine Museum in Erimi.',
        ],
      },
      {
        heading: 'Getting there',
        body: [
          'Episkopi is a short drive or taxi from the site entrance; on foot it is uphill and exposed, so a vehicle is more practical in heat.',
          'Combine a morning at Kourion with a late lunch in the village for an easy rhythm.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the Episkopi museum open?',
        answer:
          'No — the Local Archaeological Museum of Kourion has been temporarily closed since 1 August 2026 for upgrade works, with no announced reopening.',
      },
      {
        question: 'Where can I eat near Kourion besides the beach?',
        answer:
          'Episkopi village has traditional tavernas a few minutes inland from the site.',
      },
      {
        question: 'How far is Episkopi from the site?',
        answer:
          'A few minutes by car or taxi; on foot it is uphill and exposed, so drive in summer.',
      },
    ],
    related: [
      { category: 'nearby', slug: 'kourion-beach' },
      { category: 'food', slug: 'restaurants-near-kourion' },
      { category: 'food', slug: 'tavernas-episkopi-erimi' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'food',
    slug: 'tavernas-episkopi-erimi',
    priority: 'P2',
    title: 'Tavernas of Episkopi & Erimi',
    metaDescription:
      'Where to eat around Kourion: traditional tavernas in Episkopi and Erimi, what to order, and how they compare to the beach restaurants.',
    intro:
      'For a more local meal than the beachfront, the villages of Episkopi and Erimi — a few minutes from Kourion — offer Cypriot tavernas and a wine-country feel. This guide compares the options.',
    sections: [
      {
        heading: 'Episkopi tavernas',
        body: [
          'Episkopi’s tavernas serve straightforward Cypriot cooking: grilled meats, meze, halloumi, village salad and pulses. They are typically cheaper and quieter than the beach restaurants and good for a relaxed lunch.',
          'Expect a low-key, family-run atmosphere rather than sea views.',
        ],
      },
      {
        heading: 'Erimi and the wine angle',
        body: [
          'Erimi, east toward Limassol, blends village tavernas with the Cyprus Wine Museum and a wine-country mood. The Bucc pub-restaurant is a known spot for a casual meal.',
          'If you are on a Kourion + Kolossi + wine loop, Erimi is the natural lunch or tasting stop.',
        ],
      },
      {
        heading: 'Beach vs village: how to choose',
        body: [
          'Choose the beach restaurants (Chris Blue Beach, Kourion Beach Restaurant) when you want sea views and a swim-after-lunch feel. Choose Episkopi/Erimi tavernas for a more authentic, budget-friendly Cypriot meal.',
          'In July–August, book beach restaurants ahead; village tavernas are easier to walk into.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Episkopi tavernas better than the beach?',
        answer:
          'They are different: village tavernas are more local and budget-friendly, while beach restaurants offer sea views and a swim. Pick by mood.',
      },
      {
        question: 'What should I order?',
        answer:
          'Cypriot meze, grilled halloumi, souvlaki or kleftiko, and a village salad are safe, typical choices.',
      },
      {
        question: 'Is Erimi good for wine?',
        answer:
          'Yes — Erimi has the Cyprus Wine Museum and a wine-country feel, making it a natural stop on a Kourion + Kolossi day.',
      },
    ],
    related: [
      { category: 'food', slug: 'restaurants-near-kourion' },
      { category: 'nearby', slug: 'episkopi-village' },
      { category: 'food', slug: 'cyprus-wine-museum' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'itineraries',
    slug: 'kourion-full-day',
    priority: 'P2',
    title: 'Kourion Full-Day Itinerary',
    metaDescription:
      'A full-day plan around Kourion: the site, Apollo Hylates, a beach swim, Kolossi Castle and the Cyprus Wine Museum.',
    intro:
      'If you have a full day and a car, Kourion anchors a rich loop of archaeology, coast and wine. This plan balances the ruins with nearby highlights.',
    sections: [
      {
        heading: 'Morning: the site',
        body: [
          'Start at Kourion when it opens. Do the theatre, the Eustolios mosaics, the basilica and the baths in about 2–3 hours before the heat builds.',
          'Buy your ticket on arrival and carry water.',
        ],
      },
      {
        heading: 'Midday: beach and lunch',
        body: [
          'Descend to Kourion Beach for a swim and lunch at a beach restaurant, or drive a few minutes to Episkopi/Erimi for a village taverna.',
          'This breaks up the day and beats the midday sun.',
        ],
      },
      {
        heading: 'Afternoon: Apollo Hylates + Kolossi + wine',
        body: [
          'Add the Sanctuary of Apollo Hylates (about 3 km west) for a quieter ruin, then drive east to Kolossi Castle and the Cyprus Wine Museum at Erimi.',
          'If someone is tasting wine, arrange a designated driver. This loop makes a satisfying full day without rushing.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I see Kourion and Kolossi in one day?',
        answer:
          'Easily with a car — Kourion in the morning, then Apollo Hylates, Kolossi Castle and the Cyprus Wine Museum in the afternoon.',
      },
      {
        question: 'How should I split the day?',
        answer:
          'Site in the cooler morning, beach or village lunch at midday, and the western/eastern monuments in the afternoon.',
      },
      {
        question: 'Do I need a car for this loop?',
        answer:
          'Yes — the sites are spread along the coast and inland; a car (or a tour) makes the full-day loop practical.',
      },
    ],
    related: [
      { category: 'itineraries', slug: 'kourion-half-day' },
      { category: 'itineraries', slug: 'kourion-and-beach' },
      { category: 'nearby', slug: 'kolossi-castle' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'archaeology',
    slug: 'kourion-stadium',
    priority: 'P3',
    title: 'Kourion Stadium: The Roman Sports Ground',
    metaDescription:
      'The Kourion Stadium near Limassol: what it is, where it sits, how much there is to see, and how to combine it with the main archaeological site.',
    intro:
      'A short distance from the main Kourion monuments, the stadium is a reminder that this was not only a ceremonial and theatrical centre but also a place for sport and public gathering in Roman times.',
    sections: [
      {
        heading: 'What remains',
        body: [
          'The Kourion Stadium lies apart from the main theatre-and-mosaics complex, a little to the side of the cliff-top plateau. What visitors see today is a long, roughly rectangular course flanked by the traces of stone seating and starting arrangements, partly restored and partly still being studied.',
          'Because it is separated from the core monuments, many visitors miss it. If you have a car, it is an easy add-on; on foot it is a longer, exposed walk with little shade.',
        ],
      },
      {
        heading: 'How much there is to see',
        body: [
          'Do not expect a colosseum. The stadium is an open, atmospheric ruin rather than a polished attraction, and the amount open to visitors can vary with conservation work.',
          'Allow 20–30 minutes if you include it, and combine it with the theatre and mosaics in a single loop rather than treating it as a standalone stop.',
        ],
      },
      {
        heading: 'Planning your visit',
        body: [
          'The stadium is usually reached as part of a wider Kourion visit. Confirm locally whether it is open on the day you travel, as access and signage change with site management.',
          'Wear sturdy shoes; the ground is uneven and there is little shade or facilities out here.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where is the Kourion Stadium?',
        answer:
          'It sits near the Kourion archaeological area on the cliff above the Kourion (Curium) Beach, a short distance from the main theatre and mosaic houses. A car makes the connection easiest.',
      },
      {
        question: 'Is the stadium included with site entry?',
        answer:
          'The stadium is part of the wider Kourion area managed by the Department of Antiquities. Always reconfirm current admission and opening arrangements at the main ticket office before you go.',
      },
      {
        question: 'How long should I spend at the stadium?',
        answer:
          'Plan 20–30 minutes. It is best treated as a bonus stop on a half-day Kourion route rather than a destination on its own.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'visit', slug: 'site-map' },
      { category: 'itineraries', slug: 'kourion-half-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'archaeology',
    slug: 'early-christian-basilica',
    priority: 'P3',
    title: 'Early Christian Basilica at Kourion',
    metaDescription:
      'The Early Christian Basilica of Kourion: its 5th-century remains, baptistery and mosaics, and how to see it with the theatre and mosaics.',
    intro:
      'Just beyond the theatre, the Early Christian Basilica shows Kourion at a later moment in its long life, when the site became a centre of Christian worship in the Byzantine period.',
    sections: [
      {
        heading: 'The basilica and its baptistery',
        body: [
          'The basilica was built in the 5th century AD and centred on a large nave with a baptistery beside it. The baptistery, with its cruciform or rectangular font, is one of the more evocative corners of the site.',
          'Mosaic fragments and marble traces hint at a richly finished interior, much of it now conserved in situ.',
        ],
      },
      {
        heading: 'What you can see today',
        body: [
          'Visitors walk the basilica footprint and the baptistery, reading the layout from the surviving foundations and floor remains. It is a quieter, more contemplative part of Kourion than the theatre.',
          'Because the structure is open to the elements, surfaces are weathered; go with the layout in mind rather than expecting intact walls.',
        ],
      },
      {
        heading: 'Combine with the rest of Kourion',
        body: [
          'The basilica sits a short walk from the theatre and the House of Eustolios, so it fits naturally into a single visit.',
          'A suggested order is theatre first, then the mosaic houses, then the basilica and baths before looping back.',
        ],
      },
    ],
    faq: [
      {
        question: 'When was the Kourion basilica built?',
        answer:
          'In the 5th century AD, during the early Byzantine period, when Kourion shifted from a Greco-Roman city to a Christian centre.',
      },
      {
        question: 'What is the baptistery?',
        answer:
          'A detached or adjacent chamber with a font used for baptism. At Kourion it is one of the most distinctive surviving features of the basilica complex.',
      },
      {
        question: 'Is the basilica close to the theatre?',
        answer:
          'Yes, it is a short walk away, which is why most visitors see it as part of the same Kourion route rather than a separate trip.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'archaeology', slug: 'house-of-eustolios' },
      { category: 'visit', slug: 'site-map' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'archaeology',
    slug: 'house-of-achilles',
    priority: 'P3',
    title: 'House of Achilles, Kourion: The Mosaics',
    metaDescription:
      'The House of Achilles at Kourion: the late-Roman mosaic villa named for its Achilles panel, what the floors show, and how to visit.',
    intro:
      'The House of Achilles is one of the late-Roman mosaic villas at Kourion, best known for a floor panel that gives the house its name.',
    sections: [
      {
        heading: 'The naming mosaic',
        body: [
          'The house takes its name from a mosaic depicting Achilles, including the episode where the hero is hidden and dressed as a girl to keep him from the Trojan War.',
          'It is a rare narrative scene in Cypriot domestic flooring and a highlight for visitors interested in classical myth.',
        ],
      },
      {
        heading: 'The rest of the house',
        body: [
          'Like the neighbouring villas, the House of Achilles has several rooms arranged around its mosaics, with geometric and figurative panels typical of late-Roman taste.',
          'The floors are fragile, so follow on-site guidance about where you may stand and where photography is permitted.',
        ],
      },
      {
        heading: 'Seeing it well',
        body: [
          'Visit in good light, ideally morning or late afternoon, to appreciate the patterns without harsh overhead sun.',
          'Pair it with the House of Eustolios and the House of the Gladiators for a focused mosaic walk.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is it called the House of Achilles?',
        answer:
          'After a floor mosaic showing Achilles, notably the story of him being dressed as a girl to avoid the war.',
      },
      {
        question: 'Is it near the other Kourion mosaics?',
        answer:
          'Yes. The House of Achilles, House of Eustolios and House of the Gladiators sit close together and are usually visited as a group.',
      },
      {
        question: 'Can I take photos of the mosaics?',
        answer:
          'Personal photography is generally allowed, but flash and tripods may be restricted near fragile floors. Check on site.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'archaeology', slug: 'kourion-mosaics' },
      { category: 'archaeology', slug: 'house-of-eustolios' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'archaeology',
    slug: 'house-of-the-gladiators',
    priority: 'P3',
    title: 'House of the Gladiators, Kourion',
    metaDescription:
      'The House of the Gladiators at Kourion: the mosaic of armed combatants, the villa layout, and how it fits a Kourion visit.',
    intro:
      'The House of the Gladiators is another of Kourion’s late-Roman mosaic villas, named for a striking floor showing armed fighters.',
    sections: [
      {
        heading: 'The gladiator mosaic',
        body: [
          'The house is named for a mosaic panel depicting gladiators or armed combatants, a relatively unusual subject in Cypriot mosaics and a draw for visitors.',
          'As with the other villa floors, the panel is best appreciated in raking light, so aim for the morning or late afternoon.',
        ],
      },
      {
        heading: 'Layout and context',
        body: [
          'The villa follows the familiar Kourion pattern of rooms arranged around decorative floors, with geometric borders framing the figurative centre.',
          'It sits among the cluster of mosaic houses close to the theatre, making it easy to include on a single walk.',
        ],
      },
      {
        heading: 'Visiting tips',
        body: [
          'Allow 15–25 minutes for this house as part of a wider Kourion visit.',
          'Respect the ropes and any restricted areas; the mosaics are conserved in place and sensitive to wear.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the House of the Gladiators known for?',
        answer:
          'Its mosaic of armed combatants, a rare subject in Cyprus, which gives the villa its name.',
      },
      {
        question: 'How long does it take to see?',
        answer:
          'About 15–25 minutes as part of a full Kourion route that also covers the theatre and the other mosaic houses.',
      },
      {
        question: 'Where is it in relation to the theatre?',
        answer:
          'Close by, within the same mosaic-house cluster near the Kourion theatre, so it is an easy add-on.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'archaeology', slug: 'kourion-mosaics' },
      { category: 'archaeology', slug: 'house-of-achilles' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'nearby',
    slug: 'akrotiri-peninsula',
    priority: 'P3',
    title: 'Akrotiri Peninsula Near Kourion',
    metaDescription:
      'The Akrotiri Peninsula west of Limassol: what it includes around Kourion, Apollo Hylates, beaches and the salt lake, and how to plan a day.',
    intro:
      'Kourion sits on the Akrotiri Peninsula, the finger of land west of Limassol that blends archaeology, coastline and a protected natural environment.',
    sections: [
      {
        heading: 'What the peninsula holds',
        body: [
          'The peninsula packs a lot into a small area: the Kourion archaeological site and theatre, the Sanctuary of Apollo Hylates, clifftop beaches, and the wider Akrotiri area including its salt lake and birdlife.',
          'It is also where you find the villages and bases that give the region its layered, lived-in character.',
        ],
      },
      {
        heading: 'A sensible day out',
        body: [
          'A natural loop is Kourion in the cooler morning, then Apollo Hylates a few minutes west, then a beach swim and late lunch.',
          'Because distances are short, a car lets you combine ruins, coast and a taverna without backtracking.',
        ],
      },
      {
        heading: 'Nature and quiet corners',
        body: [
          'The Akrotiri salt lake draws flamingos and other birds in winter, a contrast to the ancient stone nearby.',
          'Bring binoculars if wildlife interests you, and keep to marked areas to protect the habitat.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is on the Akrotiri Peninsula?',
        answer:
          'Kourion, the Sanctuary of Apollo Hylates, clifftop beaches such as Kourion Beach, and the Akrotiri salt lake with its winter birdlife.',
      },
      {
        question: 'How far is it from Limassol?',
        answer:
          'Kourion is about 19 km west of Limassol along the B6; the rest of the peninsula is a short drive further.',
      },
      {
        question: 'Can I combine Kourion and nature in one day?',
        answer:
          'Easily. A Kourion-plus-Apollo morning followed by a beach and, in winter, a look at the salt lake makes a full, varied day.',
      },
    ],
    related: [
      { category: 'nearby', slug: 'apollo-hylates' },
      { category: 'nearby', slug: 'kourion-beach' },
      { category: 'visit', slug: 'kourion-archaeological-site' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'nearby',
    slug: 'lady-mile-beach',
    priority: 'P3',
    title: 'Lady’s Mile Beach Near Limassol',
    metaDescription:
      'Lady’s Mile Beach west of Limassol: what it is, why families like it, facilities, and how it pairs with Kourion.',
    intro:
      'Lady’s Mile is a long, shallow sandy beach on the Akrotiri Peninsula, west of Limassol and not far from Kourion, popular for calm water and easy swimming.',
    sections: [
      {
        heading: 'The beach itself',
        body: [
          'Stretching a good distance along the coast, Lady’s Mile is known for gently shelving sand and shallow water that suits families and relaxed swimmers.',
          'It gets busier in July and August and quieter in the shoulder months.',
        ],
      },
      {
        heading: 'Facilities and food',
        body: [
          'The beach has basic facilities and a handful of restaurants and kiosks along its length, with more options in Limassol and at Kourion Beach to the east.',
          'In high summer, arrive early or later in the day for parking and a good spot.',
        ],
      },
      {
        heading: 'Pairing with Kourion',
        body: [
          'Lady’s Mile is only a short drive from the Kourion area, so a ruins-then-beach or beach-then-ruins order works well.',
          'If you want a quieter alternative to the clifftop Kourion Beach, Lady’s Mile is the flatter, family-friendly choice.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Lady’s Mile good for families?',
        answer:
          'Yes. The shallow, gently shelving water and long sandy shore make it a common pick for families with children.',
      },
      {
        question: 'How far is it from Kourion?',
        answer:
          'A short drive west along the Akrotiri Peninsula; allow a little time in summer for parking near the popular sections.',
      },
      {
        question: 'Are there places to eat?',
        answer:
          'There are beach restaurants and kiosks along Lady’s Mile, with more choice in Limassol and at nearby Kourion Beach.',
      },
    ],
    related: [
      { category: 'nearby', slug: 'kourion-beach' },
      { category: 'nearby', slug: 'limassol' },
      { category: 'transport', slug: 'limassol-to-kourion' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'nearby',
    slug: 'commandaria-region',
    priority: 'P3',
    title: 'Commandaria Wine Region Near Kourion',
    metaDescription:
      'The Commandaria wine region of Cyprus: what Commandaria is, where it is made around Kolossi and Limassol, and how to taste it near Kourion.',
    intro:
      'Commandaria is one of the world’s oldest named sweet wines, produced in the foothills and villages around Limassol and Kolossi — an easy add-on to a Kourion day.',
    sections: [
      {
        heading: 'What Commandaria is',
        body: [
          'Commandaria is a sweet fortified wine made from sun-dried grapes, with a history that reaches back centuries in Cyprus.',
          'The name is tied to the Commandaria region around Kolossi, west of Limassol, where the Knights of St John and later orders held estates.',
        ],
      },
      {
        heading: 'Where to taste',
        body: [
          'The Cyprus Wine Museum in Erimi tells the wider story and offers tastings, while village tavernas and producers around Kolossi and Limassol pour local Commandaria.',
          'Always confirm tasting formats, prices and opening times directly with the venue.',
        ],
      },
      {
        heading: 'Building it into your trip',
        body: [
          'Kolossi Castle and the Cyprus Wine Museum sit east of Kourion toward Limassol, so a Kourion-plus-wine loop is a strong full-day plan.',
          'If you intend to taste, arrange a driver or designate one.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Commandaria wine?',
        answer:
          'A sweet, often fortified wine from sun-dried grapes, long associated with the Commandaria region around Kolossi and Limassol in Cyprus.',
      },
      {
        question: 'Where is Commandaria made?',
        answer:
          'In the foothill villages and estates around Kolossi and Limassol, west and east of Kourion respectively.',
      },
      {
        question: 'Can I taste Commandaria near Kourion?',
        answer:
          'Yes — the Cyprus Wine Museum at Erimi and producers around Kolossi offer tastings; confirm details with each venue.',
      },
    ],
    related: [
      { category: 'nearby', slug: 'kolossi-castle' },
      { category: 'food', slug: 'cyprus-wine-museum' },
      { category: 'itineraries', slug: 'kourion-full-day' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'food',
    slug: 'cyprus-meze',
    priority: 'P3',
    title: 'Cypriot Meze: What to Order',
    metaDescription:
      'A practical guide to Cypriot meze: what it is, classic dishes like halloumi and souvlaki, and how to order it near Kourion.',
    intro:
      'Meze is the heart of eating out in Cyprus: a spread of small dishes shared at the table, perfect for a relaxed meal after a Kourion visit.',
    sections: [
      {
        heading: 'What meze means',
        body: [
          'Meze is not a single dish but a succession of small plates brought to share — cheese, grills, dips, vegetables and sometimes seafood, depending on the taverna.',
          'Ordering meze lets you sample many flavours at once, and the pace is sociable rather than rushed.',
        ],
      },
      {
        heading: 'Dishes to look for',
        body: [
          'Expect halloumi, grilled halloumi squeaky and warm, souvlaki or sheftalia, kleftiko (slow lamb), village salad, tahini and taramasalata, and pulses in olive oil.',
          'Ask the taverna for its own meze set; many places near Kourion and Limassol offer a set number of plates at a fixed price.',
        ],
      },
      {
        heading: 'Where to try it near Kourion',
        body: [
          'Episkopi village and Erimi have traditional Cypriot tavernas a few minutes from the site, while the beach restaurants below Kourion lean seafood.',
          'For a more authentic, budget-friendly Cypriot meal, choose the village tavernas over the sea-view spots.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Cypriot meze?',
        answer:
          'A shared sequence of small dishes — cheeses, grills, dips and vegetables — that together make up a relaxed Cypriot meal.',
      },
      {
        question: 'What should I order?',
        answer:
          'Halloumi, souvlaki or sheftalia, kleftiko, village salad and a couple of dips are safe, typical choices.',
      },
      {
        question: 'Where can I eat meze near Kourion?',
        answer:
          'Episkopi and Erimi tavernas are the closest traditional options; beach restaurants below the site focus more on seafood.',
      },
    ],
    related: [
      { category: 'food', slug: 'restaurants-near-kourion' },
      { category: 'food', slug: 'tavernas-episkopi-erimi' },
      { category: 'food', slug: 'cyprus-wine-museum' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'food',
    slug: 'limassol-restaurants',
    priority: 'P3',
    title: 'Limassol Restaurants: Where to Eat',
    metaDescription:
      'Eating in Limassol near Kourion: the city’s dining scene, from tavernas to seafood, and how to split a day between ruins and a good meal.',
    intro:
      'Limassol is the natural base near Kourion and the widest choice for a proper meal, from casual tavernas to seafood and international cooking.',
    sections: [
      {
        heading: 'The dining scene',
        body: [
          'Limassol mixes Cypriot tavernas, seafood along the old port and promenade, and a growing range of international restaurants.',
          'After a morning at Kourion, the city is a 20–25 minute drive east and an easy place to land for lunch or dinner.',
        ],
      },
      {
        heading: 'What to eat',
        body: [
          'Cypriot standards — grilled meats, fresh fish, halloumi, meze — sit alongside Italian, Middle Eastern and modern spots.',
          'For seafood, the old port and waterfront are the obvious draws; for local character, try a family taverna away from the front.',
        ],
      },
      {
        heading: 'Timing your meal',
        body: [
          'If you visit Kourion in the morning, aim for a late lunch in Limassol before the afternoon heat or the crowds.',
          'In July and August, booking popular seafood restaurants ahead is wise.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Limassol good for food?',
        answer:
          'Yes — it has the broadest dining choice near Kourion, from Cypriot tavernas to seafood and international cooking.',
      },
      {
        question: 'How far is Limassol from Kourion?',
        answer: 'About 19 km and a 20–25 minute drive east along the B6 coast road.',
      },
      {
        question: 'Where should I eat seafood?',
        answer:
          'The old port and waterfront are the main seafood areas; book ahead in high summer.',
      },
    ],
    related: [
      { category: 'food', slug: 'restaurants-near-kourion' },
      { category: 'food', slug: 'tavernas-episkopi-erimi' },
      { category: 'nearby', slug: 'limassol' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'transport',
    slug: 'parking-at-kourion',
    priority: 'P3',
    title: 'Parking at Kourion Archaeological Site',
    metaDescription:
      'Parking at Kourion near Limassol: where to park, whether it is free, and tips for a smooth arrival by car.',
    intro:
      'If you drive to Kourion, parking is straightforward: there is parking at the site, and arriving by car is the most flexible way to combine the ruins with beaches and nearby sights.',
    sections: [
      {
        heading: 'Where to park',
        body: [
          'Free parking is available at the Kourion site for cars and small vehicles, close to the entrance where you buy tickets.',
          'In peak summer the spaces fill at busy times, so arriving earlier in the day makes finding a spot easier.',
        ],
      },
      {
        heading: 'Driving in',
        body: [
          'Follow the B6 west from Limassol and watch for the Kourion / Episkopi signs; the turn brings you up to the cliff-top site.',
          'The final approach is straightforward, but the site is exposed, so allow extra time in heat or wind.',
        ],
      },
      {
        heading: 'With beaches and sights',
        body: [
          'Because parking is at the site, a car lets you add Kourion Beach below, Apollo Hylates a few minutes west, or Limassol and Kolossi to the east.',
          'If you plan an evening performance at the theatre, keep your parking spot in mind and arrange any taxi return in advance.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there parking at Kourion?',
        answer:
          'Yes, free parking is available at the site for cars and small vehicles, near the entrance.',
      },
      {
        question: 'Do I need to pay to park?',
        answer:
          'Parking at the site is generally free, but always reconfirm on the day as site arrangements can change.',
      },
      {
        question: 'Is parking enough for a busy day?',
        answer:
          'It is usually adequate, though peak summer afternoons get full; arriving earlier helps.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'transport', slug: 'limassol-to-kourion' },
      { category: 'visit', slug: 'tickets' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'transport',
    slug: 'nicosia-to-kourion',
    priority: 'P3',
    title: 'From Nicosia to Kourion: Drive & Distance',
    metaDescription:
      'Getting from Nicosia to the Kourion archaeological site: distance, drive time via Limassol, and how to plan the trip.',
    intro:
      'Nicosia, the capital in the island’s interior, is the farthest of the main cities from Kourion, but the motorway makes it a feasible day trip if you have a car.',
    sections: [
      {
        heading: 'By car',
        body: [
          'Take the A1 from Nicosia toward Limassol, then the A1/B6 west to the Kourion / Episkopi turning. The drive is roughly 75–80 km and about 1 to 1.25 hours in normal traffic.',
          'A car gives you the freedom to add the beach, Apollo Hylates and Kolossi in the same trip.',
        ],
      },
      {
        heading: 'By bus or tour',
        body: [
          'There is no direct public bus from Nicosia to the site entrance; services run toward Limassol and then require a change and the Kourion Beach bus plus a taxi for the final leg.',
          'Most travellers from Nicosia drive, rent a car, or join an organised excursion.',
        ],
      },
      {
        heading: 'Making a day of it',
        body: [
          'Because the drive is over an hour each way, start early and pair Kourion with one or two nearby sights rather than rushing.',
          'Carry water and sun protection; the site is exposed and shade is limited.',
        ],
      },
    ],
    faq: [
      {
        question: 'How far is Kourion from Nicosia?',
        answer:
          'Around 75–80 km, roughly a 1 to 1.25 hour drive via the A1 and B6 in normal conditions.',
      },
      {
        question: 'Can I take a bus from Nicosia to Kourion?',
        answer:
          'Not directly to the gate; public buses require changes toward Limassol and leave you at the beach, so driving or a tour is far easier.',
      },
      {
        question: 'Is Kourion worth a day trip from Nicosia?',
        answer:
          'Yes if you have a car or tour; combine it with the beach and Apollo Hylates for a full, rewarding day.',
      },
    ],
    related: [
      { category: 'transport', slug: 'limassol-to-kourion' },
      { category: 'transport', slug: 'paphos-to-kourion' },
      { category: 'visit', slug: 'kourion-archaeological-site' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'itineraries',
    slug: 'kourion-sunset',
    priority: 'P3',
    title: 'Kourion at Sunset: Evening & Golden-Hour Visit',
    metaDescription:
      'Seeing Kourion at sunset: why the theatre glows in late light, evening performances, and how to plan a golden-hour visit.',
    intro:
      'The Kourion theatre faces the open horizon, and in the right season the late light turns a visit into something special — with summer evenings sometimes hosting performances.',
    sections: [
      {
        heading: 'Why sunset works here',
        body: [
          'The theatre’s backdrop of sea and valley means the low sun lights the stone and the water in a way midday cannot.',
          'Late afternoon to sunset is also the cooler, calmer time to walk the exposed site between June and September.',
        ],
      },
      {
        heading: 'Evening performances',
        body: [
          'The theatre still hosts events in summer, but the programme is announced per season by the organisers and changes year to year.',
          'If a performance interests you, buy event tickets separately from site entry and arrange evening transport in advance, as buses are limited after dark.',
        ],
      },
      {
        heading: 'Planning a golden-hour visit',
        body: [
          'In summer, arrive in late afternoon, see the main monuments, and stay for the light; in other seasons, check the closing time so you are not caught by last entry.',
          'Bring a layer if you stay into the evening, as the cliff top cools quickly after sunset.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Kourion good at sunset?',
        answer:
          'Yes — the theatre’s sea-and-valley backdrop makes late light especially photogenic, and summer evenings can host performances.',
      },
      {
        question: 'Are there evening events?',
        answer:
          'Sometimes, in summer, but the lineup is announced each season by the organisers. Check official listings rather than assuming a fixed show.',
      },
      {
        question: 'How do I get back after sunset?',
        answer:
          'Buses are limited in the evening, so for performances or late visits pre-book a taxi or drive and use the site parking.',
      },
    ],
    related: [
      { category: 'itineraries', slug: 'kourion-half-day' },
      { category: 'experiences', slug: 'events-and-performances' },
      { category: 'visit', slug: 'best-time' },
    ],
    updated: 'October 2026',
  },
  {
    category: 'experiences',
    slug: 'kourion-photography',
    priority: 'P3',
    title: 'Photography at Kourion: Tips & Best Spots',
    metaDescription:
      'Photographing Kourion near Limassol: best light, the theatre-with-sea frame, the mosaics, and practical rules to follow.',
    intro:
      'Kourion is one of the most photogenic sites in Cyprus, pairing ancient stone with a clifftop sea view — rewarding for everything from phone snapshots to serious cameras.',
    sections: [
      {
        heading: 'Best light and time',
        body: [
          'Early morning and late afternoon give soft, directional light and fewer crowds; midday is harsh and busy in summer.',
          'The cooler ends of the day also make walking the exposed site more comfortable.',
        ],
      },
      {
        heading: 'Key frames',
        body: [
          'The theatre with the Mediterranean behind it is the postcard shot — stand on the stage and use the rake of the seats to lead the eye to the horizon.',
          'The mosaic houses reward close, angled shots that show the patterns without flattening them in overhead sun.',
        ],
      },
      {
        heading: 'Practical rules',
        body: [
          'Personal photography is allowed, but flash and tripods may be restricted near fragile mosaics — follow on-site signs.',
          'Drones are typically not permitted without explicit authorisation at archaeological sites; check with the Department of Antiquities before flying one.',
        ],
      },
    ],
    faq: [
      {
        question: 'When is the best light at Kourion?',
        answer:
          'Early morning and late afternoon, when the sun is low and the crowds are thin.',
      },
      {
        question: 'What is the iconic photo?',
        answer:
          'The theatre framed with the sea and valley behind it, shot from the stage toward the horizon.',
      },
      {
        question: 'Can I use a drone or tripod?',
        answer:
          'Tripods and flash may be restricted near mosaics; drones are generally not allowed without prior authorisation. Follow on-site guidance.',
      },
    ],
    related: [
      { category: 'visit', slug: 'kourion-archaeological-site' },
      { category: 'archaeology', slug: 'kourion-mosaics' },
      { category: 'visit', slug: 'best-time' },
    ],
    updated: 'October 2026',
  },
];

export function getGuide(category: string, slug: string): Guide | undefined {
  return GUIDES.find((g) => g.category === category && g.slug === slug);
}

export function allGuides(): Guide[] {
  return GUIDES;
}

export function guidesByCategory(category: string): Guide[] {
  return GUIDES.filter((g) => g.category === category);
}

export function guideHref(g: Guide): string {
  return `/en/${g.category}/${g.slug}`;
}

export function guideHrefByRef(ref: GuideRef): string {
  return `/en/${ref.category}/${ref.slug}`;
}
