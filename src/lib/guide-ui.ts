import type { Locale } from '@/i18n/routing';

const labels = {
  home: ['Home', '首页', 'Αρχική', 'Ana sayfa'],
  index: ['More Kourion guides', '库里翁游览指南', 'Περισσότεροι οδηγοί για το Κούριο', 'Diğer Kourion gezi rehberleri'],
  summary: ['Guides to tickets, hours, transport, archaeology, nearby sights and itineraries.', '查看门票、开放时间、交通、考古遗址、周边景点和行程。', 'Οδηγοί για εισιτήρια, ωράρια, μετακίνηση, αρχαιολογία, κοντινά αξιοθέατα και διαδρομές.', 'Biletler, saatler, ulaşım, arkeoloji, çevredeki yerler ve gezi rotaları.'],
  nearbyIndex: ['Explore near Kourion', '库里翁周边游览', 'Εξερευνήστε γύρω από το Κούριο', 'Kourion çevresini keşfedin'],
  allNearby: ['See all nearby guides', '查看全部周边指南', 'Όλοι οι οδηγοί της περιοχής', 'Tüm çevre gezi rehberleri'],
  visit: ['Plan Your Visit', '游览规划', 'Οργάνωση επίσκεψης', 'Ziyaret planı'],
  transport: ['Getting Here', '如何前往', 'Πρόσβαση', 'Ulaşım'],
  archaeology: ['Archaeology', '考古与遗址', 'Αρχαιολογία', 'Arkeoloji'],
  nearby: ['Nearby', '周边景点', 'Κοντινά αξιοθέατα', 'Yakındaki yerler'],
  food: ['Food & Drink', '餐饮', 'Φαγητό και ποτό', 'Yeme içme'],
  itineraries: ['Itineraries & Events', '行程与活动', 'Διαδρομές και εκδηλώσεις', 'Rotalar ve etkinlikler'],
  experiences: ['Experiences', '游览体验', 'Εμπειρίες', 'Deneyimler'],
  guides: ['Guides', '指南', 'Οδηγοί', 'Rehberler'],
  breadcrumb: ['Breadcrumb', '面包屑导航', 'Διαδρομή πλοήγησης', 'Gezinme yolu'],
  theme: ['Toggle theme', '切换明暗主题', 'Εναλλαγή θέματος', 'Temayı değiştir'],
  language: ['Language', '语言', 'Γλώσσα', 'Dil'],
  discover: ['Discover', '探索', 'Ανακαλύψτε', 'Keşfedin'],
  tips: ['Visit tips', '游览建议', 'Συμβουλές επίσκεψης', 'Ziyaret önerileri'],
  highlights: ['Highlights', '景点特色', 'Τι αξίζει να δείτε', 'Öne çıkanlar'],
  about: ['About', '关于', 'Σχετικά με', 'Hakkında'],
  manages: ['Who manages this site', '景点管理单位', 'Φορέας διαχείρισης', 'Yönetim kurumu'],
  basic: ['Basic information', '基础信息', 'Βασικές πληροφορίες', 'Temel bilgiler'],
  info: ['Visitor information', '访客信息', 'Πληροφορίες επισκεπτών', 'Ziyaretçi bilgileri'],
  name: ['Name', '名称', 'Ονομασία', 'Ad'],
  type: ['Type', '类型', 'Τύπος', 'Tür'],
  address: ['Address or starting point', '地址或出发点', 'Διεύθυνση ή σημείο εκκίνησης', 'Adres veya başlangıç noktası'],
  access: ['Access', '参观方式', 'Πρόσβαση', 'Erişim'],
  manager: ['Management', '管理单位', 'Διαχείριση', 'Yönetim'],
  source: ['Visitor information source', '游览资料来源', 'Πηγή για τους επισκέπτες', 'Ziyaretçi bilgi kaynağı'],
  additional: ['Additional site information', '更多景点资料', 'Πρόσθετες πληροφορίες', 'Ek yer bilgileri'],
  hours: ['Opening hours', '开放时间', 'Ώρες λειτουργίας', 'Açılış saatleri'],
  tickets: ['Ticket prices', '门票价格', 'Τιμές εισιτηρίων', 'Bilet fiyatları'],
  current: ['Check current hours and admission', '查询当前时间及票价', 'Ελέγξτε το ισχύον ωράριο και το εισιτήριο', 'Güncel saatleri ve giriş ücretini kontrol edin'],
  getting: ['How to get here', '交通方式', 'Πώς θα φτάσετε', 'Nasıl gidilir'],
  history: ['History, architecture and local character', '历史、建筑与当地特色', 'Ιστορία, αρχιτεκτονική και τοπικός χαρακτήρας', 'Tarih, mimari ve yerel özellikler'],
  walk: ['Suggested walk', '建议游览路线', 'Προτεινόμενη διαδρομή', 'Önerilen yürüyüş'],
  before: ['Before you go', '游览须知', 'Πριν ξεκινήσετε', 'Gitmeden önce'],
  photo: ['What to look for on site', '现场看点与拍照', 'Τι να παρατηρήσετε στον χώρο', 'Yerinde görülecekler'],
  stay: ['Where to stay', '住宿建议', 'Πού να μείνετε', 'Nerede kalınır'],
  reviews: ['Visitor reviews', '游客评价', 'Κριτικές επισκεπτών', 'Ziyaretçi yorumları'],
  mapsReviews: ['Read current reviews on Google Maps', '查看 Google 地图上的最新评价', 'Διαβάστε τις πρόσφατες κριτικές στους Χάρτες Google', 'Google Haritalar’daki güncel yorumları okuyun'],
  reviewUnit: ['reviews', '条评价', 'κριτικές', 'yorum'],
  view: ['View location', '查看位置', 'Προβολή τοποθεσίας', 'Konumu görüntüle'],
  maps: ['Open Google Maps', '打开 Google 地图', 'Άνοιγμα στους Χάρτες Google', 'Google Haritalar’da aç'],
  directions: ['Get directions', '获取路线', 'Οδηγίες μετάβασης', 'Yol tarifi al'],
  addressDirections: ['Address and directions', '地址与导航', 'Διεύθυνση και οδηγίες', 'Adres ve yol tarifi'],
  faq: ['Frequently asked questions', '常见问答', 'Συχνές ερωτήσεις', 'Sık sorulan sorular'],
  related: ['Related guides', '相关指南', 'Σχετικοί οδηγοί', 'İlgili rehberler'],
  updated: ['Last updated', '最后更新', 'Τελευταία ενημέρωση', 'Son güncelleme'],
  individual: ['Check the visitor information for individual venues and facilities.', '请分别查询各景点和设施的访客信息。', 'Ελέγξτε τις πληροφορίες κάθε χώρου και εγκατάστασης.', 'Her mekânın ve tesisin ziyaretçi bilgilerini ayrı ayrı kontrol edin.'],
  dateAccess: ['Check access for your date before setting out.', '出发前请核实当天的开放安排。', 'Ελέγξτε την πρόσβαση για την ημέρα της επίσκεψης.', 'Yola çıkmadan önce ziyaret gününüzdeki erişimi kontrol edin.'],
  checkAdmission: ['Check admission and reservations before travelling.', '出发前请核实票价和预约要求。', 'Ελέγξτε το εισιτήριο και τυχόν κρατήσεις πριν ταξιδέψετε.', 'Yola çıkmadan önce giriş ücretini ve rezervasyon koşullarını kontrol edin.'],
} as const;

export type GuideLabel = keyof typeof labels;

const order: Record<Locale, number> = { en: 0, zh: 1, el: 2, tr: 3 };

export function guideText(locale: Locale) {
  return (key: GuideLabel) => labels[key][order[locale]];
}

export const guideLocales: readonly Locale[] = ['zh', 'en', 'el', 'tr'];

export function isGuideLocale(locale: string): locale is Locale {
  return guideLocales.some((value) => value === locale);
}

export const languageNames: Record<Locale, string> = { zh: '中文', en: 'English', el: 'Ελληνικά', tr: 'Türkçe' };
