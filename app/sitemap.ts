import type { MetadataRoute } from 'next'
const BASE = 'https://wonderhall.live'
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-28')
  return [
    { url: `${BASE}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/perform`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/small`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
