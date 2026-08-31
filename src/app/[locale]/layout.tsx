import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

const baseUrl = 'https://kourionamphitheater.com';
const heroImage = `${baseUrl}/gallery/kourion-ancient-amphitheater-1.jpg`;
const GA_MEASUREMENT_ID = 'G-HXM22WWPKP';

const langMap: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en',
  el: 'el',
  tr: 'tr',
};

const ogLocaleMap: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  el: 'el_GR',
  tr: 'tr_TR',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  const selfUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.title,
    description: messages.meta.description,
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: 'Kourion Ancient Amphitheater',
      locale: ogLocaleMap[locale] || 'en_US',
      type: 'website',
      images: [
        {
          url: heroImage,
          width: 1200,
          height: 800,
          alt: 'Kourion Ancient Amphitheater - Main view in Episkopi, Cyprus',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [heroImage],
    },
    icons: {
      icon: [{ url: '/icons/icon.svg', type: 'image/svg+xml' }],
      apple: '/apple-icon.jpg',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={langMap[locale] || 'en'} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#234d5c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kourion Theater" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${baseUrl}/#organization`,
              name: 'Kourion Ancient Amphitheater Visitor Guide',
              url: `${baseUrl}/`,
              description:
                'Independent, non-commercial educational visitor guide to the Kourion Ancient Amphitheater in Episkopi, Limassol District, Cyprus.',
              nonprofitStatus: 'https://schema.org/NonprofitType',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${baseUrl}/#website`,
              url: `${baseUrl}/`,
              name: 'Kourion Ancient Amphitheater – Visitor Guide',
              inLanguage: ['en', 'zh', 'el', 'tr'],
              publisher: { '@id': `${baseUrl}/#organization` },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': `${selfUrl}#webpage`,
              url: selfUrl,
              inLanguage: langMap[locale] || 'en',
              name: messages.meta.title,
              description: messages.meta.description,
              isPartOf: { '@id': `${baseUrl}/#website` },
              about: { '@id': `${baseUrl}/#attraction` },
              dateModified: '2026-08-31',
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
              (function() {
                try {
                  var prefs = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
                  if (prefs.analytics) {
                    gtag('consent', 'update', { 'analytics_storage': 'granted' });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function() {});
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
