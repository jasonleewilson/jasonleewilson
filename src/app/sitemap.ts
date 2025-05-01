import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://jasonleewilson.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: baseUrl + '/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
        url: baseUrl + '/faq',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: baseUrl + '/skills',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: baseUrl + '/work',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      // {
      //   url: baseUrl + '/work/details-luckycatfund',
      //   lastModified: new Date(),
      //   changeFrequency: 'monthly',
      //   priority: 0.3,
      // },
      // {
      //   url: baseUrl + '/work/details-pressonthese',
      //   lastModified: new Date(),
      //   changeFrequency: 'monthly',
      //   priority: 0.4,
      // },
  ]
}