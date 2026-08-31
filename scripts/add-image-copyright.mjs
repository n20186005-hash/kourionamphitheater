// Adds the image copyright statement to the four locale JSON files:
//   footer.imageCopyright  (full-site statement in the footer)
//   gallery.credit        (short note under the photo gallery)
// Run: node scripts/add-image-copyright.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const msgDir = path.resolve(__dirname, '../src/messages');
const langs = ['en', 'zh', 'el', 'tr'];

const imageCopyright = {
  en: 'All images shown on this website are the property of their respective photographers and are protected by copyright.',
  zh: '本网站所展示的所有图片产权及版权均归原摄影者所有。',
  el: 'Όλες οι εικόνες που εμφανίζονται σε αυτόν τον ιστότοπο αποτελούν ιδιοκτησία των αντίστοιχων φωτογράφων και προστατεύονται από πνευματικά δικαιώματα.',
  tr: 'Bu web sitesinde gösterilen tüm görseller ilgili fotoğrafçıların mülkiyetindedir ve telif hakkı ile korunmaktadır.',
};

const galleryCredit = {
  en: 'All photos are the property of their respective photographers. Copyright reserved to the original photographers.',
  zh: '所有照片产权及版权均归原摄影者所有。',
  el: 'Όλες οι φωτογραφίες ανήκουν στους αντίστοιχους φωτογράφους. Τα πνευματικά δικαιώματα ανήκουν στους αρχικούς φωτογράφους.',
  tr: 'Tüm fotoğraflar ilgili fotoğrafçıların mülkiyetindedir. Telif hakkı orijinal fotoğrafçılara aittir.',
};

for (const l of langs) {
  const file = path.join(msgDir, `${l}.json`);
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));

  // footer.imageCopyright after rights
  {
    const {
      brandName, brandSubtitle, rights, privacy, terms, cookies,
      officialResourcesTitle, officialLinks, disclaimer, lastUpdated,
    } = d.footer;
    d.footer = {
      brandName, brandSubtitle, rights,
      imageCopyright: imageCopyright[l],
      privacy, terms, cookies,
      officialResourcesTitle, officialLinks, disclaimer, lastUpdated,
    };
  }

  // gallery.credit after subtitle
  {
    const { title, subtitle, captions, viewAll, showAll, showLess } = d.gallery;
    d.gallery = {
      title, subtitle,
      credit: galleryCredit[l],
      captions, viewAll, showAll, showLess,
    };
  }

  fs.writeFileSync(file, JSON.stringify(d, null, 2) + '\n', 'utf8');
  console.log(`${l}: footer.imageCopyright + gallery.credit added`);
}
