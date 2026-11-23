import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import GuidePage from '@/components/GuidePage';
import { guideAlternates, guideParams, localizedGuide } from '@/lib/localized-guides';
import { guideText, isGuideLocale, type GuideLabel } from '@/lib/guide-ui';
import Footer from '@/components/Footer';

const SITE_URL = 'https://www.kourionamphitheater.com';

type Params = { locale: string; category: string; slug: string };

export const dynamic = 'force-static';

export function generateStaticParams(): Params[] {
  return guideParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, category, slug } = await params;
  if (!isGuideLocale(locale)) notFound();
  const data = localizedGuide(category, slug, locale);
  if (!data) return {};
  const { guide, visit } = data;
  const url = `${SITE_URL}/${locale}/${category}/${slug}`;
  const photo = visit?.photo;
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: url,
      languages: guideAlternates(SITE_URL, category, slug),
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url,
      type: 'article',
      images: photo ? [{ url: photo.url, width: photo.width, height: photo.height, alt: photo.caption }] : undefined,
    },
  };
}

export default async function GuideRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, category, slug } = await params;
  if (!isGuideLocale(locale)) notFound();
  setRequestLocale(locale);
  const data = localizedGuide(category, slug, locale);
  if (!data) notFound();
  const { guide } = data;
  const t = guideText(locale);

  const url = `${SITE_URL}/${locale}/${category}/${slug}`;
  const categoryLabel = t(guide.category as GuideLabel);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: guide.title,
        description: guide.metaDescription,
        inLanguage: locale,
        dateModified: guide.modified ?? '2026-10-20',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('home'), item: `${SITE_URL}/${locale}` },
          { '@type': 'ListItem', position: 2, name: categoryLabel, item: `${SITE_URL}/${locale}#more-guides` },
          { '@type': 'ListItem', position: 3, name: guide.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <main><GuidePage {...data} locale={locale} /></main>
      <Footer />
      <JsonLd data={jsonLd} />
    </>
  );
}
