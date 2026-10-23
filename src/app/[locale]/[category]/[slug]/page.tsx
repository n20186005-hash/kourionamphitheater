import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';
import GuidePage from '@/components/GuidePage';
import { allGuides, getGuide, CATEGORY_LABELS } from '@/lib/guides';

const SITE_URL = 'https://www.kourionamphitheater.com';

type Params = { locale: string; category: string; slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return allGuides().map((g) => ({ locale: 'en', category: g.category, slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const guide = getGuide(category, slug);
  if (!guide) return {};
  const url = `${SITE_URL}/en/${category}/${slug}`;
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: url,
      languages: { en: url, 'x-default': url },
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url,
      type: 'article',
    },
  };
}

export default async function GuideRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale);
  const guide = getGuide(category, slug);
  if (!guide) notFound();

  const url = `${SITE_URL}/en/${category}/${slug}`;
  const categoryLabel = CATEGORY_LABELS[guide.category] ?? guide.category;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: guide.title,
        description: guide.metaDescription,
        inLanguage: 'en',
        dateModified: '2026-10-20',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/en` },
          { '@type': 'ListItem', position: 2, name: categoryLabel, item: `${SITE_URL}/en` },
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
      <GuidePage guide={guide} />
      <JsonLd data={jsonLd} />
    </>
  );
}
