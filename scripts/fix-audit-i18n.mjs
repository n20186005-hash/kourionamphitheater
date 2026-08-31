// One-time audit fix script for the four locale JSON files.
// Aligns tickets / hours / FAQ / knowledge / sources / cookieSettings across en, zh, el, tr.
// Run: node scripts/fix-audit-i18n.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const msgDir = path.resolve(__dirname, '../src/messages');
const langs = ['en', 'zh', 'el', 'tr'];

const data = {};
for (const l of langs) {
  data[l] = JSON.parse(fs.readFileSync(path.join(msgDir, `${l}.json`), 'utf8'));
}

// ---------------------------------------------------------------
// 1) tickets: make zh structurally identical to en/el/tr
//    (card 1 = site admission, card 2 = parking, note = tours)
// ---------------------------------------------------------------
data.zh.tickets = {
  title: '门票信息',
  park: '遗址参观',
  parkPrice: '成人 €4.50，12 岁以下儿童免费',
  parking: '停车',
  parkingPrice: '遗址内提供免费停车',
  guided: '导览',
  guidedPrice: '由古物局提供（可现场咨询）',
};

// ---------------------------------------------------------------
// 2) hours: add explicit season date ranges + holiday closures
//    to en / el / tr (zh already has both)
// ---------------------------------------------------------------
data.en.hours.parkTime = 'Winter (Sep 16 – Apr 15): 8:30–17:00 · Summer (Apr 16 – Sep 15): 8:30–19:30';
data.en.hours.tip =
  'Allow 1-2 hours for a full visit. Bring water and sun protection. The site is closed on Christmas, New Year\'s Day and Greek Orthodox Easter.';

data.el.hours.parkTime = 'Χειμώνας (16 Σεπ – 15 Απρ): 8:30–17:00 · Καλοκαίρι (16 Απρ – 15 Σεπ): 8:30–19:30';
data.el.hours.tip =
  'Επιτρέψτε 1-2 ώρες για πλήρη επίσκεψη. Πάρτε νερό και προστασία από τον ήλιο. Ο χώρος είναι κλειστός τα Χριστούγεννα, την Πρωτοχρονιά και το Ορθόδοξο Πάσχα.';

data.tr.hours.parkTime = 'Kış (16 Eyl – 15 Nis): 08:30–17:00 · Yaz (16 Nis – 15 Eyl): 08:30–19:30';
data.tr.hours.tip =
  'Tam bir ziyaret için 1-2 saat ayırın. Su ve güneş koruyucu getirin. Site, Noel, Yılbaşı ve Rum Ortodoks Paskalyası günlerinde kapalıdır.';

// ---------------------------------------------------------------
// 3) FAQ item #1 (entrance fee): unify the four languages so the
//    same facts (fee / children / EU seniors / groups / site passes)
//    are stated consistently everywhere.
// ---------------------------------------------------------------
const feeAnswers = {
  en: 'Yes, there is an entrance fee of €4.50 for adults. Children under 12 enter free, and EU seniors (65+) are eligible for reduced tickets. Groups of 10 or more receive a 20% discount. The Department of Antiquities also offers site passes valid at all its monuments and museums: €8.50 for one day, €17.00 for three days and €25.00 for seven days.',
  zh: '是的，成人门票 4.50 欧元，12 岁以下儿童免费，欧盟 65 岁以上老人可享优惠票价。10 人以上团体享 20% 折扣。古物局还发行覆盖其所有遗址与博物馆的特惠通票：一日票 8.50 欧元，三日票 17.00 欧元，七日票 25.00 欧元。',
  el: 'Ναι, το εισιτήριο εισόδου είναι €4,50 για ενήλικες. Παιδιά κάτω των 12 ετών εισέρχονται δωρεάν και οι πολίτες ΕΕ άνω των 65 ετών δικαιούνται μειωμένο εισιτήριο. Ομάδες 10 ατόμων και άνω λαμβάνουν έκπτωση 20%. Το Τμήμα Αρχαιοτήτων εκδίδει επίσης εισιτήρια που ισχύουν σε όλα τα μνημεία και μουσεία του: €8,50 για μία ημέρα, €17,00 για τρεις ημέρες και €25,00 για επτά ημέρες.',
  tr: 'Evet, yetişkinler için 4,50 € giriş ücreti vardır. 12 yaş altı çocuklar ücretsizdir ve AB 65 yaş üstü ziyaretçiler indirimli bilet hakkına sahiptir. 10 veya daha fazla kişilik gruplar %20 indirim alır. Eski Eserler Dairesi ayrıca tüm anıtlarında ve müzelerinde geçerli site geçiş biletleri düzenler: bir gün 8,50 €, üç gün 17,00 € ve yedi gün 25,00 €.',
};
for (const l of langs) {
  data[l].faq.items[1].answer = feeAnswers[l];
}

// ---------------------------------------------------------------
// 4) knowledge: align zh to the same 4 sections and order as
//    en/el/tr (history, geography, architecture, protection).
//    Excavation facts are merged into the history section.
// ---------------------------------------------------------------
const zh = data.zh.knowledge.sections;
const zhById = Object.fromEntries(zh.map((s) => [s.id, s]));
zhById.history.content =
  zhById.history.content +
  '考古发掘始于 1933 年宾夕法尼亚大学，此后多支大学考古队与塞浦路斯古物局相继参与发掘。';
zhById.protection = {
  id: 'protection',
  title: '保护与管理',
  content:
    '该遗址由塞浦路斯古物局管理，受塞浦路斯遗产法律保护。持续的保护工程确保剧场结构稳固并保持其真实性。如今，这里也是许多文化活动和戏剧表演的举办地，尤其是在夏季。',
};
data.zh.knowledge.sections = ['history', 'geography', 'architecture', 'protection'].map(
  (id) => zhById[id]
);

// ---------------------------------------------------------------
// 5) sources: replace the mixed list (duplicated Visit Cyprus,
//    Wikipedia) with the same 5 official links used in the footer.
// ---------------------------------------------------------------
const officialSources = {
  en: [
    { name: 'Department of Antiquities of Cyprus (Deputy Ministry of Culture)', url: 'https://www.culture.gov.cy/dmculture/da/da.nsf/DMLindex_gr/DMLindex_gr?OpenDocument' },
    { name: 'Visit Cyprus — Kourion Archaeological Site', url: 'https://www.visitcyprus.com/en/discovercyprus/culture/sites-monuments/240-kourion-archaeological-site' },
    { name: 'Limassol Tourism Board', url: 'https://www.limassoltourism.com/' },
    { name: 'Kourion Municipality', url: 'https://kourion.org/' },
    { name: 'Europeana — Cyprus Antiquities Digital Collection', url: 'https://www.europeana.eu/' },
  ],
  zh: [
    { name: '塞浦路斯文化副部 - 古物局', url: 'https://www.culture.gov.cy/dmculture/da/da.nsf/DMLindex_gr/DMLindex_gr?OpenDocument' },
    { name: 'Visit Cyprus — 库里翁考古遗址专页', url: 'https://www.visitcyprus.com/en/discovercyprus/culture/sites-monuments/240-kourion-archaeological-site' },
    { name: '利马索尔大区官方旅游局', url: 'https://www.limassoltourism.com/' },
    { name: '库里翁市政府', url: 'https://kourion.org/' },
    { name: 'Europeana — 塞浦路斯古物数字化馆藏', url: 'https://www.europeana.eu/' },
  ],
  el: [
    { name: 'Τμήμα Αρχαιοτήτων Κύπρου (Υφυπουργείο Πολιτισμού)', url: 'https://www.culture.gov.cy/dmculture/da/da.nsf/DMLindex_gr/DMLindex_gr?OpenDocument' },
    { name: 'Visit Cyprus — Αρχαιολογικός Χώρος Κουρίου', url: 'https://www.visitcyprus.com/en/discovercyprus/culture/sites-monuments/240-kourion-archaeological-site' },
    { name: 'Επίσημος Τουρισμός Λεμεσού', url: 'https://www.limassoltourism.com/' },
    { name: 'Δήμος Κουρίου', url: 'https://kourion.org/' },
    { name: 'Europeana — Ψηφιακή Συλλογή Κυπριακών Αρχαιοτήτων', url: 'https://www.europeana.eu/' },
  ],
  tr: [
    { name: 'Kıbrıs Eski Eserler Dairesi (Kültür Bakan Yardımcılığı)', url: 'https://www.culture.gov.cy/dmculture/da/da.nsf/DMLindex_gr/DMLindex_gr?OpenDocument' },
    { name: 'Visit Cyprus — Kourion Arkeolojik Alanı', url: 'https://www.visitcyprus.com/en/discovercyprus/culture/sites-monuments/240-kourion-archaeological-site' },
    { name: 'Limasol Turizm Kurulu', url: 'https://www.limassoltourism.com/' },
    { name: 'Kourion Belediyesi', url: 'https://kourion.org/' },
    { name: 'Europeana — Kıbrıs Eski Eserler Dijital Koleksiyonu', url: 'https://www.europeana.eu/' },
  ],
};
for (const l of langs) {
  data[l].sources.items = officialSources[l];
}

// ---------------------------------------------------------------
// 6) cookieSettings.marketing: complete the el description so all
//    four languages mention personalised advertising consistently.
// ---------------------------------------------------------------
data.el.cookieSettings.marketing.description =
  'Χρησιμοποιούνται για παρακολούθηση μεταξύ ιστότοπων και προβολή εξατομικευμένων διαφημίσεων.';

// ---------------------------------------------------------------
// Write back with the same 2-space indentation used by the repo.
// ---------------------------------------------------------------
for (const l of langs) {
  fs.writeFileSync(path.join(msgDir, `${l}.json`), JSON.stringify(data[l], null, 2) + '\n', 'utf8');
}

console.log('Fixed en / zh / el / tr successfully.');
console.log('zh knowledge sections:', data.zh.knowledge.sections.map((s) => s.id).join(', '));
console.log('sources count per lang:', langs.map((l) => `${l}:${data[l].sources.items.length}`).join(' '));
console.log('faq items per lang:', langs.map((l) => `${l}:${data[l].faq.items.length}`).join(' '));
