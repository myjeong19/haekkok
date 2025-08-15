export const seoConfig = {
  site: {
    name: 'HAEKKOK',
    description: '안녕하세요. 프론트엔드 개발자 정민영입니다.',
    keywords: [
      '프론트엔드',
      'Frontend Development',
      'React',
      'Next.js',
      'TypeScript',
      '웹개발',
      '개발자블로그',
      'HAEKKOK',
    ],
    author: 'HAEKKOK',
    creator: 'HAEKKOK',
    publisher: 'HAEKKOK',
    category: 'Technology',
  },
  social: {
    twitter: {
      creator: '@haekkok',
      site: '@haekkok',
    },
  },
  images: {
    og: {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'HAEKKOK - 프론트엔드 개발자 블로그',
    },
    favicon: {
      ico: '/favicon.ico',
      svg: '/favicon.svg',
    },
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    author: {
      '@type': 'Person',
      alternateName: '정민영',
      jobTitle: '프론트엔드 개발자',
      knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Development'],
    },
  },
};

export const generateJsonLd = (baseUrl: string) => ({
  ...seoConfig.jsonLd,
  name: seoConfig.site.name,
  description: seoConfig.site.description,
  url: baseUrl,
  author: {
    ...seoConfig.jsonLd.author,
    name: seoConfig.site.name,
  },
  publisher: {
    '@type': 'Person',
    name: seoConfig.site.name,
    alternateName: '정민영',
  },
  mainEntity: {
    '@type': 'WebSite',
    name: seoConfig.site.name,
    url: baseUrl,
  },
});
