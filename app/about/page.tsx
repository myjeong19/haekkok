import Image from 'next/image';
import { Metadata } from 'next';
import { baseUrl } from '../sitemap';
import { seoConfig } from 'lib/seo';

export const metadata: Metadata = {
  title: 'About | HAEKKOK - 프론트엔드 개발자',
  description:
    'About | 프론트엔드 개발자 HAEKKOK – 불편을 문제로 남기지 않고, 해결 과정에서 얻은 배움을 프로젝트와 글로 이어갑니다.',
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: 'About | HAEKKOK - 프론트엔드 개발자',
    description:
      'About | 프론트엔드 개발자 HAEKKOK – 불편을 문제로 남기지 않고, 해결 과정에서 얻은 배움을 프로젝트와 글로 이어갑니다.',
    url: `${baseUrl}/about`,
    siteName: seoConfig.site.name,
    locale: 'ko_KR',
    type: 'profile',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent(
          'About | 프론트엔드 개발자 HAEKKOK – 불편을 문제로 남기지 않고, 해결 과정에서 얻은 배움을 프로젝트와 글로 이어갑니다.'
        )}`,
        width: 1200,
        height: 630,
        alt: 'HAEKKOK - 프론트엔드 개발자 소개',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | HAEKKOK - 프론트엔드 개발자',
    description: '프론트엔드 개발자 HAEKKOK',
    images: [`${baseUrl}/og?title=${encodeURIComponent('About | HAEKKOK - 프론트엔드 개발자')}`],
    creator: seoConfig.social.twitter.creator,
    site: seoConfig.social.twitter.site,
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'HAEKKOK',
    jobTitle: '프론트엔드 개발자',
    description:
      '안녕하세요. 프론트엔드 개발자 HAEKKOK입니다. 불편을 문제로 남기지 않고, 해결 과정에서 얻은 배움을 프로젝트와 글로 이어갑니다.',
    url: `${baseUrl}/about`,
    sameAs: [
      'https://www.linkedin.com/in/minyeong-jeong-a93a01271/',
      'https://github.com/myjeong19',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="flex flex-col gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/favicon.svg"
            width={500}
            height={500}
            alt="HAEKKOK - 프론트엔드 개발자 프로필 이미지"
            className="w-72 h-72 mb-3 rounded-full overflow-hidden"
          />

          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold tracking-tighter text-nowrap">HAEKKOK</h1>
            <span className="text-gray-400">|</span>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-nowrap">
              Frontend Developer
            </p>
            <nav className="flex text-sm">
              <a
                className="text-blue-400 hover:text-blue-300 transition-all delay-100"
                href="https://www.linkedin.com/in/minyeong-jeong-a93a01271/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn 프로필 열기"
              >
                Linkedin
              </a>
              <span className="text-gray-400 mx-3">·</span>
              <a
                className="text-blue-400 hover:text-blue-300 transition-all delay-100"
                href="https://github.com/myjeong19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub 프로필 열기"
              >
                Github
              </a>
            </nav>
          </div>
        </div>

        <hr className="my-5 lg:my-10" />

        <p className="mb-4 leading-8 px-5 lg:px-10">
          작은 불편도 그냥 넘기지 않습니다. 스크롤 위치를 잃는 이미지 뷰어나 번거로운 CLI 명령 같은
          문제를 직접 마주하며, 더 편리하고 안정적인 방향을 찾아갑니다. 해결 과정에서 배운 것들은
          다음 글과 프로젝트에 자연스럽게 녹여 공유합니다.
        </p>
      </section>
    </>
  );
}
