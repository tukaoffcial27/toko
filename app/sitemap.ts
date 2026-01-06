import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Baca file secara manual (Server Side Only) agar tidak crash
  const filePath = path.join(process.cwd(), 'data-seo.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const dataSeo = JSON.parse(fileContent);
  
  const BASE_URL = 'https://toko.guidify.app';

  // 2. Map data ke format sitemap
  return dataSeo.map((item: any) => ({
    url: `${BASE_URL}/id/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}