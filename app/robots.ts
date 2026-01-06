import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/', 
        '/admin/', 
        '/_next/',
        '/private/',
      ],
    },
    // Pastikan URL sitemap mengarah ke domain asli Anda
    sitemap: 'https://toko.guidify.app/sitemap.xml',
  };
}