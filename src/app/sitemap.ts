import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/pt`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: `${process.env.BASE_URL}/en`,
        },
      },
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          pt: `${process.env.BASE_URL}/pt`,
        },
      },
      priority: 1,
    },
  ]
}
