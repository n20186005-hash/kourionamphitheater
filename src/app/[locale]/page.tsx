import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import InfoSection from '@/components/InfoSection';
import LegendsSection from '@/components/LegendsSection';
import NearbySection from '@/components/NearbySection';
import RouteSection from '@/components/RouteSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import FAQSection from '@/components/FAQSection';
import SeasonSection from '@/components/SeasonSection';
import SourcesSection from '@/components/SourcesSection';
import Footer from '@/components/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://kourionamphitheater.com';
  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'zh': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
        'el': `${baseUrl}/el`,
        'tr': `${baseUrl}/tr`,
        'x-default': `${baseUrl}/el`,
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <FacilitiesSection />
        <InfoSection />
        <LegendsSection />
        <NearbySection />
        <RouteSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <SeasonSection />
        <SourcesSection />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
