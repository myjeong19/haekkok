import post1 from '../notion-data/1b39c395-c2fb-80e0-acd9-ddca37330616.json';

const posts = [
  {
    title: '나는 왜 SSGOI-X를 개발하는가?',
    slug: 'why-i-develop-ssgoi-x',
    content: post1,
    date: '2025-03-10',
    description:
      '페이지 전환 애니메이션이 사용자 경험에 미치는 영향을 바탕으로, SSGOI-X라는 라이브러리를 개발한 이유와 그 비전을 공유합니다. SSGOI-X는 React와 Next.js 환경에서 페이지 전환을 자연스럽게 이어주어 몰입감을 높이는 데 중점을 두고 있습니다.',
    image: undefined,
    hashtag: ['Page Transition Animation', 'SSGOI-X', 'Web Development'],
  },
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
  hashtag: string[];
};
