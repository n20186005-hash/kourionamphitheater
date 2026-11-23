import type { GuideFaq } from './guides';

type NearbyEditorial = {
  history: string;
  about: string;
  walk: readonly [string, string, string];
  faq: GuideFaq;
};

export const NEARBY_EDITORIAL: Readonly<Record<string, NearbyEditorial>> = {
  "limassol-castle": {
    history: "The fortress served defensive and later administrative uses, and now houses the Cyprus Medieval Museum. The courtyard and thick stone walls provide a setting for the tombstones and ceramics displayed inside.",
    about: "The Department of Antiquities, Cyprus, manages the castle and the Cyprus Medieval Museum inside it. Castle Square can be visited independently of the museum.",
    walk: [
      "Start in Castle Square and walk around the accessible exterior.",
      "Enter the museum and compare the carved tombstones with the surviving stonework around them.",
      "Return to the square and continue towards the Old Port via the pedestrian streets.",
    ],
    faq: { question: "Can I visit the square when the museum is closed?", answer: "Yes. The square and public streets are a separate visit from the ticketed museum." },
  },
  "limassol-marina": {
    history: "The modern marina extended visitor activity west of the Old Port. Compare the engineered basin and breakwaters with the compact historic harbour next door.",
    about: "Limassol Marina management operates the yacht basin and its visitor facilities. The public promenade can be explored on foot, while access to berths is controlled separately.",
    walk: [
      "Cross from the Old Port into the public marina promenade.",
      "Follow the shore around the basin, keeping clear of private berth gates.",
      "Turn back at a public viewing point and take the waterfront route towards Castle Square.",
    ],
    faq: { question: "Can visitors walk out onto the yacht pontoons?", answer: "Use the public promenade. Access to individual pontoons may be restricted." },
  },
  "limassol-old-port": {
    history: "Built in the 1950s, the harbour later acquired a leisure and commercial role. Its enclosed basin and low quays retain the scale of the earlier harbour despite the newer terraces and buildings.",
    about: "Cyprus Ports Authority oversees port premises and licences. Individual venues set their own opening hours.",
    walk: [
      "Walk from Castle Square to the harbour opening.",
      "Follow the public quay and look back across the basin before crossing to the opposite side if open.",
      "Continue east to Molos or west to the yacht marina.",
    ],
    faq: { question: "Is the Old Port the same place as Limassol Marina?", answer: "They are adjoining waterfront stops. The Old Port is the compact basin next to Molos, with the yacht marina farther west." },
  },
  "molos-seafront-sculpture-park": {
    history: "The redesigned central waterfront turned the embankment into a pedestrian public space. The promenade layers sculptures, planted areas and decks between the city street and the sea.",
    about: "Limassol Municipality maintains the city’s public seafront park.",
    walk: [
      "Enter from the Old Port and take the promenade away from the harbour.",
      "Stop at the open-air sculpture displays and take a short detour onto a public deck.",
      "Return along the planted inner paths and exit at a marked city crossing.",
    ],
    faq: { question: "Do I need to cross the main road to follow the waterfront?", answer: "The seafront path runs along the water. Use a marked crossing when entering or leaving for the city." },
  },
  "agia-napa-cathedral": {
    history: "The Orthodox cathedral anchors the old-town walk along Agiou Andreou. Its paired bell towers frame a symmetrical façade, while the dome is easier to see from farther along the street.",
    about: "The Holy Metropolis of Limassol oversees the cathedral as an active place of worship.",
    walk: [
      "Walk from the Old Port into Agiou Andreou.",
      "Stop on the public street for the full façade. Enter quietly if visitor access is available.",
      "Continue along the old-town pedestrian streets towards Castle Square.",
    ],
    faq: { question: "When can I see the interior?", answer: "Visitor access depends on the cathedral’s schedule and services. The façade is visible from the street." },
  },
  "limassol-archaeological-museum": {
    history: "The district collection brings together objects removed from their excavation contexts. Cases of ceramics and sculpture make it possible to compare periods that are harder to distinguish at outdoor sites.",
    about: "The Department of Antiquities, Cyprus, operates the museum and cares for its archaeological collection.",
    walk: [
      "Start at the Vyronos Street entrance after crossing from the Municipal Gardens.",
      "Read the introductory chronology before looking at ceramics, sculpture and inscriptions.",
      "Finish with a short walk back to the seafront rather than retracing the entire old-town route.",
    ],
    faq: { question: "Is this the same museum as the one inside Limassol Castle?", answer: "The district museum is on Vyronos Street. The castle houses the Cyprus Medieval Museum." },
  },
  "cyprus-classic-motor-museum": {
    history: "The collection follows changes in road transport through surviving vehicles. Comparing upright early bodies with later profiles makes the design history easier to read than examining each car in isolation.",
    about: "The Cyprus Historic and Classic Motor Museum operates the collection and visitor facilities.",
    walk: [
      "Start with the oldest vehicles indicated by the exhibition labels.",
      "Walk the aisles and compare passenger cars with the larger working vehicles on display.",
      "Return to a favourite display to read its full vehicle history before leaving.",
    ],
    faq: { question: "Can I walk here from the old-town waterfront?", answer: "The museum is in the western industrial area. A taxi or car is more practical for most visits." },
  },
  "limassol-zoo": {
    history: "The zoo is a separate attraction inside the Municipal Gardens. Its inner visitor paths form a compact circuit within the larger public park.",
    about: "Limassol Municipality operates the zoo. The zoo and Municipal Gardens have separate access arrangements.",
    walk: [
      "Enter the Municipal Gardens from the seafront side and locate the zoo gate.",
      "Follow the signed enclosure paths and pause only where there is room for others.",
      "Finish in the gardens for shade before returning to the promenade.",
    ],
    faq: { question: "Does visiting the Municipal Gardens include zoo entry?", answer: "The gardens and zoo are separate visits. Check the zoo’s current admission at the gate." },
  },
  "akrotiri-salt-lake": {
    history: "Seasonal flooding and drying shape this Ramsar wetland. The open basin, salt margins and reed habitats elsewhere on the peninsula support different species and change with the water level.",
    about: "The Sovereign Base Areas Administration oversees environmental protection and access rules in the Akrotiri wetland.",
    walk: [
      "Check viewing conditions at the environmental centre or through a current local notice.",
      "Drive to a permitted viewpoint and scan the margins with binoculars.",
      "If waterbirds are distant, stay at the viewpoint and continue on public roads to another stop.",
    ],
    faq: { question: "Can I cross the dry lakebed in summer?", answer: "Stay on authorised roads and viewing areas. A dry surface does not make the protected lakebed a public route." },
  },
  "st-nicholas-of-the-cats": {
    history: "The monastery’s association with cats belongs to local tradition. The courtyard and simple stone volumes reward a quiet visit focused on the working religious setting.",
    about: "The resident monastic community governs visitor access and conduct on the grounds.",
    walk: [
      "Approach the monastery from the public road and read the entrance notices.",
      "Visit only the areas the community has opened, pausing at the courtyard threshold.",
      "Leave time for a separate stop in Akrotiri village if the monastery is closed.",
    ],
    faq: { question: "Is the monastery a stop on a public wetland trail?", answer: "Use the signed road approach. The monastery and wetland viewpoints have their own access arrangements." },
  },
  "akrotiri-village": {
    history: "The village stands on a narrow peninsula between wetland habitats and the coast. Low houses and junctions in the centre show the human scale of a landscape often visited only for wildlife.",
    about: "The Sovereign Base Areas Administration governs the area. Observe local notices for village facilities and military boundaries.",
    walk: [
      "Begin at the village centre and walk the public lanes.",
      "Stop at the Environmental Education Centre if open to check wetland viewing conditions.",
      "Return to the centre before driving to a signed wetland viewpoint.",
    ],
    faq: { question: "Can I continue past military entrance signs?", answer: "Use public village roads and obey posted access controls. Plan wetland stops before setting out." },
  },
  "fasouri-watermania": {
    history: "The park is a modern planned recreation site. Its outdoor pools, tall slide structures and shaded rest areas make the layout more useful for planning than a single headline attraction.",
    about: "Fasouri Watermania operates the park and sets seasonal access, ticketing and ride requirements.",
    walk: [
      "Check the visitor map at the entrance and choose a meeting point.",
      "Start with a zone suited to the group’s swimming ability and height requirements.",
      "Move to a shaded rest area before crossing to activities farther from the entrance.",
    ],
    faq: { question: "Are all rides suitable for younger children?", answer: "Eligibility varies by ride. Consult posted height and supervision requirements before queuing." },
  },
  "amathous-archaeological-site": {
    history: "Amathous was an ancient city-kingdom built between the coast and an acropolis. In the lower site, the surviving wall lines and building platforms help explain the division between civic space and hillside.",
    about: "The Department of Antiquities, Cyprus, protects the ruins and manages archaeological-site access.",
    walk: [
      "Begin at the signed coastal entrance and explore the lower remains.",
      "Look uphill from the lower route to read the position of the acropolis.",
      "Continue uphill only on the open visitor route, then return the same way.",
    ],
    faq: { question: "Can I visit without climbing to the acropolis?", answer: "Yes. The lower remains form a useful standalone visit, especially in hot weather." },
  },
  "agios-tychonas": {
    history: "The older village developed above the modern coastal strip. Narrow climbing streets and retaining walls show how the hillside shaped the settlement.",
    about: "Agios Tychonas is a municipal district of the Municipality of Amathounta, which handles municipal public-space services.",
    walk: [
      "Navigate to the inland village centre, leaving the vehicle at an appropriate public spot.",
      "Walk one uphill lane for a wider coastal view, then take a public lane back towards the centre.",
      "Visit the coastal strip or the Amathous ruins as a separate stop.",
    ],
    faq: { question: "Will the beachfront destination take me to the old village?", answer: "Choose the village centre in the map. The hotel strip and beach are downhill, outside the old centre." },
  },
  "monagroulli": {
    history: "The village sits inland above the eastern coast. Its small cluster of buildings, garden plots and surrounding farmland give context to the nearby coastal resort landscape.",
    about: "Ask the Monagroulli local authority about public-space access. Farm tracks and courtyards may be private.",
    walk: [
      "Begin at the village centre and follow the public lane towards the outer houses.",
      "Pause where the public road opens onto a view of the cultivated slopes.",
      "Return through the centre before taking the highway towards the coast.",
    ],
    faq: { question: "Can I follow the minor farm tracks for a longer walk?", answer: "Stay on public village roads unless a route is signed for public access." },
  },
  "governors-beach": {
    history: "Pale coastal rock and darker sand define this stretch near Pentakomo. The pale headlands divide the coast into several smaller bathing areas with separate approaches.",
    about: "Governor’s Beach is listed under Pentakomo in the Cyprus beach directory. Use the notices at your chosen access for local beach services and restrictions.",
    walk: [
      "Choose a signed beach access and check conditions before descending.",
      "Walk along the accessible shore towards a safe view of the pale headlands.",
      "Return to the same access rather than trying to link coves under the cliffs.",
    ],
    faq: { question: "Are all coves reached from the same parking area?", answer: "Access varies by cove. Follow signs at the approach you have chosen and return by that route." },
  },
  "kalavasos-tenta": {
    history: "The Neolithic settlement preserves round building outlines beneath a large protective canopy. The canopy’s shape is modern and is useful for spotting the archaeological entrance from a distance.",
    about: "The Department of Antiquities, Cyprus, protects and manages the archaeological site.",
    walk: [
      "Use the signed entrance at the canopy rather than navigating to Kalavasos village centre.",
      "Walk the viewing perimeter and identify several circular plans before examining individual walls.",
      "Return along the marked access and continue to Choirokoitia only if its opening schedule allows.",
    ],
    faq: { question: "Is the canopy a reconstruction of a Neolithic house?", answer: "It is a protective shelter. The much smaller foundation circles underneath are the archaeological remains to compare." },
  },
  "choirokoitia": {
    history: "This UNESCO-listed Neolithic settlement follows a hillside, where the rounded dwellings and enclosure walls are easier to read from different heights. The reconstructions near the entrance illustrate how the foundations may have supported complete buildings.",
    about: "The Department of Antiquities, Cyprus, oversees the archaeological site and visitor access.",
    walk: [
      "Compare the reconstructed houses near the entry.",
      "Follow the signed slope to view the original foundation circles and enclosing walls.",
      "Descend the same path before continuing to the village or highway.",
    ],
    faq: { question: "Which remains can I see without walking all the way uphill?", answer: "The reconstructed dwellings are near the entrance. The remains higher on the slope require a longer climb." },
  },
  "tochni": {
    history: "Stone houses on opposite sides of a valley are central to Tochni’s character. Retaining walls and small changes in elevation make the building pattern clearer from the lanes than from the through road.",
    about: "The village’s local authority handles public-space access. Guesthouses and worship sites have their own operators.",
    walk: [
      "Begin on one side of the centre and look across before descending.",
      "Follow public lanes into the valley and climb a short way up the opposite side.",
      "Return to the starting side, allowing extra time on the slope.",
    ],
    faq: { question: "Is the village suitable for a level stroll?", answer: "The central lanes are sloped. Choose a short same-side walk if you need to avoid the climb." },
  },
  "monagri": {
    history: "Monagri sits on the official Commandaria Wine Route. Stone walls and lanes climbing the valley edge show the relationship between the settlement and the agricultural landscape.",
    about: "Monagri’s local authority is the contact for village public spaces. Individual venues manage their own access.",
    walk: [
      "Start in the village centre and walk uphill on public lanes.",
      "Look back over the rooflines towards the valley before retracing your steps.",
      "Continue by road to Laneia or Trimiklini if you are following the wine route.",
    ],
    faq: { question: "Do wineries on the route accept walk-ins?", answer: "Opening and tasting arrangements vary by producer. Confirm any specific visit before travelling." },
  },
  "lofou": {
    history: "Lofou is one of the Limassol wine villages. The closely spaced stone houses and stepped cobbled lanes show how a compact settlement fits the slope.",
    about: "The local community authority is the point of contact for public village space. Private houses and courtyards remain under their own owners.",
    walk: [
      "Use public parking at the village edge and enter on foot.",
      "Walk a short loop through the stone lanes, comparing doors, lintels and courtyards from the street.",
      "Return before the paving becomes difficult in low light or rain.",
    ],
    faq: { question: "Can I see the old centre without entering private houses?", answer: "The public lanes give a good view of façades and streets. Enter only premises that welcome visitors." },
  },
  "omodos": {
    history: "Omodos developed as a wine village around a broad square and the Monastery of the Holy Cross. The shift from the open square to narrower lanes is a useful way to read the village layout.",
    about: "Local authorities oversee the public square and streets. The monastery’s custodians manage worship areas and interior access.",
    walk: [
      "Enter from signed village parking and walk into the square.",
      "Approach the monastery through the square and enter only open areas.",
      "Take a side lane on the way back to see the stone houses beyond the main approach.",
    ],
    faq: { question: "Does access to the square depend on monastery hours?", answer: "The public square and lanes are a separate visit. Check the monastery’s own schedule for interiors." },
  },
  "koilani": {
    history: "Koilani belongs to the wine villages of Limassol. Its stone walls and the vineyards around the centre link the built settlement to the slopes that support its wine production.",
    about: "Ask the local authority about public streets and facilities. Wineries and exhibition spaces manage their own opening hours.",
    walk: [
      "Park at an appropriate public area and walk into the sloping centre.",
      "Follow a public lane towards a view of the cultivated hills.",
      "Retrace the walk and allow time for any tasting you have arranged off the main route.",
    ],
    faq: { question: "Is a winery visit included in a village walk?", answer: "The street walk is independent. Book or confirm your chosen winery separately." },
  },
  "pachna": {
    history: "Pachna is on the western Limassol wine route. The ridge and its cultivated sides show how a village can sit above the productive land while retaining views in several directions.",
    about: "The local community authority is the contact for village public spaces. Farms and businesses set their own visitor arrangements.",
    walk: [
      "Begin in the centre and follow a public route out towards the ridge edge.",
      "Pause at a safe point where both the houses and vines are in view.",
      "Return to the centre before driving towards Anogyra.",
    ],
    faq: { question: "Can I visit a farm or workshop without arranging it?", answer: "Confirm a specific business before setting out. The village streets and views can be explored independently." },
  },
  "anogyra": {
    history: "Carob growing and processing helped shape Anogyra’s rural economy. The tradition of making pastelli from carob syrup gives the village lanes and former work spaces a clear local context.",
    about: "The local community authority oversees public village access. Workshops and museums manage their own visitor arrangements.",
    walk: [
      "Begin in the village centre and explore its stone streets on foot.",
      "Visit a carob or pastelli venue if you have confirmed opening in advance.",
      "Continue along a public lane to see the agricultural setting before returning.",
    ],
    faq: { question: "Where can I learn how pastelli is made?", answer: "Check with a local carob museum or producer before arriving. Demonstrations depend on the venue." },
  },
  "pissouri": {
    history: "The hillside settlement and the bay played different roles. Visit Cyprus connects the area’s history to carob exports and notes surviving stone warehouses that were adapted for newer uses.",
    about: "The Pissouri Community Council is the local point of contact for village public facilities.",
    walk: [
      "Start at the upper village square and follow one lane towards an open view.",
      "Return via public streets through the historic centre.",
      "Drive separately to the bay if you have planned time at the shore.",
    ],
    faq: { question: "Is the photograph of the hillside village taken at the beach?", answer: "The village view is inland and uphill. Use the separate Pissouri Bay guide for the beachfront." },
  },
  "pissouri-bay": {
    history: "The bay developed as a coastal visitor stop below the older village. Cape Aspro and the curving shoreline define the setting more clearly than the individual beachfront businesses.",
    about: "The Pissouri Community Council is the local contact for beach services. Check posted information for bathing conditions and lifeguard cover.",
    walk: [
      "Start at the signed beach entrance and identify the public access and bathing notices.",
      "Walk the public shore path until you can see the full arc of the bay.",
      "Return along the path, keeping clear of any marked nesting areas.",
    ],
    faq: { question: "Which map destination should I use for a beach visit?", answer: "Use Pissouri Bay Beach. The upper village square is a separate destination." },
  },
  "avdimou": {
    history: "Avdimou is a village stop on the western Limassol wine route. Its low houses, agricultural fields and inland position contrast with the shore reached by another road.",
    about: "Ask the Avdimou local authority about public village facilities. Respect private land at the settlement edge.",
    walk: [
      "Enter the village centre from the signed junction.",
      "Walk a public lane to the edge of the settlement for the field-side view.",
      "Return to the centre before taking the separate coastal approach if visiting the beach.",
    ],
    faq: { question: "Is Avdimou village on the beach?", answer: "The village is inland. Plan the shore as a separate stop with its own approach." },
  },
  "petra-tou-romiou": {
    history: "Tradition associates this coast with Aphrodite’s birth. The sea stacks and pale headland explain how the story became anchored to a distinct piece of shoreline.",
    about: "Petra tou Romiou is a publicly managed coastal stop in Kouklia, Paphos District. Cyprus’s Department of Environment is the national authority listed for the bathing waters. Follow on-site notices for visitor access and parking.",
    walk: [
      "Park at the designated visitor area and follow the signed pedestrian approach.",
      "View the sea stacks in profile from the shore without climbing them.",
      "Return through the signed pedestrian access rather than crossing the road at random.",
    ],
    faq: { question: "Can I step onto the rock formations?", answer: "Plan to view them from the beach. Waves and slippery rock can make approaches unsafe." },
  },
  "pano-platres": {
    history: "Platres developed as a mountain resort in a pine-covered setting. The upper village’s visitor buildings and changes in street elevation distinguish it from the warmer coastal towns.",
    about: "The local community authority is the contact for village public facilities. Forest trail access is managed separately.",
    walk: [
      "Start in the upper village centre and take a public uphill street for a view across the roofs.",
      "Return through the built-up centre and choose a place for a break.",
      "If adding a waterfall, drive or walk to the designated trailhead and treat it as a separate outing.",
    ],
    faq: { question: "Does a walk through central Platres include the waterfall?", answer: "The village walk and waterfall trail are separate. Set aside additional time and check the trailhead and conditions." },
  },
  "caledonia-waterfalls": {
    history: "The cascade sits in a wooded stream valley near Platres. Changes in vegetation, the stream bed and the trail’s crossings show how different this part of Troodos is from the coast.",
    about: "The Cyprus Forestry Department is responsible for the forest trail. Follow posted closures and trail notices.",
    walk: [
      "Choose a signed trailhead and check the latest conditions at the entrance.",
      "Follow waymarks along the stream, allowing time at steps and crossings.",
      "View the cascade from the signed path and return by the route planned at the trailhead.",
    ],
    faq: { question: "Is the walk from both trailheads the same length?", answer: "The walking distance depends on the approach. Confirm your trailhead and return route before setting off." },
  },
  "trimiklini": {
    history: "Trimiklini belongs to the Kouris valley corridor and appears on the Commandaria route. Its position on the ascent towards Troodos helps explain the changing landscape around the village.",
    about: "Trimiklini Community Council is the point of contact for village public facilities.",
    walk: [
      "Use a public parking spot near the centre away from the main traffic lane.",
      "Walk one quieter public lane for a view along the valley.",
      "Return to the centre before continuing towards Platres or Laneia.",
    ],
    faq: { question: "Is the through road suitable for a leisurely walk?", answer: "Use public side lanes for the walking portion and avoid stopping or walking along narrow traffic sections." },
  },
  "laneia": {
    history: "Laneia combines stone domestic architecture with a history of wine production. The restored press and outdoor historical photographs help link the buildings to their earlier uses.",
    about: "Ask the Laneia local authority about public village facilities. Owners and custodians manage individual interiors.",
    walk: [
      "Begin in the village centre and follow the public lanes with outdoor photographs.",
      "Compare the historic views with the façades visible today, then look for the restored press.",
      "Return along another public lane if the paving and gradients are suitable.",
    ],
    faq: { question: "Can I see the village’s historic photographs when indoor venues are closed?", answer: "The outdoor displays are visible where posted on public streets. Interior access depends on the venue." },
  },
  "kourion-archaeological-museum": {
    history: "The village museum occupies the former home of George McFadden, who led excavations at Kourion in the twentieth century. Its domestic scale contrasts with the open-air site whose finds it interprets.",
    about: "The Department of Antiquities, Cyprus, manages the museum and has announced its temporary closure for upgrade works.",
    walk: [
      "Check the official reopening notice before choosing this as a stop.",
      "After reopening, approach from Episkopi village and start with the introductory displays.",
      "Allow a separate drive or transfer to the archaeological plateau before or after the museum.",
    ],
    faq: { question: "Is the museum included in a walk around the archaeological plateau?", answer: "It is in Episkopi village. The plateau has a separate entrance, and the museum is currently closed for upgrades." },
  },
  "sanctuary-of-aphrodite-palaipafos": {
    history: "The sanctuary preserves traces of worship at ancient Palaipafos. Low masonry includes more than one phase, so the site is best read alongside the nearby museum and interpretation panels.",
    about: "The Department of Antiquities, Cyprus, oversees the sanctuary and its archaeological collection.",
    walk: [
      "Use the signed archaeological entrance in Kouklia village.",
      "Follow the approved visitor paths through the sanctuary remains and read the phase descriptions.",
      "Continue to the associated museum if open before returning to the village streets.",
    ],
    faq: { question: "Is this the same destination as Aphrodite’s Rock?", answer: "The sanctuary is an archaeological site in Kouklia. Petra tou Romiou is a separate coastal stop." },
  },
};
