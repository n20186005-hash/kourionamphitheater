import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kourion Ancient Amphitheater – Visitor Guide',
    short_name: 'Kourion Theater',
    description:
      'Visitor guide to the Kourion Ancient Amphitheater in Episkopi, Limassol District, Cyprus.',
    id: '/el',
    start_url: '/el',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#faf8f4',
    theme_color: '#234d5c',
    lang: 'el',
    dir: 'ltr',
    categories: ['travel', 'education'],
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/gallery/kourion-ancient-amphitheater-1.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: '/gallery/kourion-ancient-amphitheater-1.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
  };
}
