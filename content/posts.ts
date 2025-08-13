import post1 from '../notion-data/5번의-복붙-지옥에서-1번의-명령어로-notionpresso-cli-개선기.json';

const posts = [
  {
    title: '5번의 복붙 지옥에서 1번의 명령어로: NotionPresso CLI 개선기',
    slug: 'notionpresso-cli-improvement',
    content: post1,
    date: '2025-08-14',
    description:
      '취준생이 오픈소스 기여를 통해 배운 것들. NotionPresso CLI의 5번 반복 명령어를 1번으로 줄이는 과정에서 마주한 기술적 도전과 사용자 중심 사고의 중요성을 공유합니다. 간단해 보이는 기능 뒤에 숨은 복잡성과 실무 개발의 현실을 솔직하게 담았습니다.',
    image: undefined,
    hashtag: [
      'NotionPresso',
      'CLI Development',
      'Open Source',
      'TypeScript',
      'Developer Experience',
    ],
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
