import post1 from '../notion-data/5번의-복붙-지옥에서-1번의-명령어로-notionpresso-cli-개선기.json';

const posts = [
  {
    title: '5번의 복붙 지옥에서 1번의 명령어로: NotionPresso CLI 개선기',
    slug: 'notionpresso-cli-improvement',
    content: post1,
    date: '2025-08-14',
    description: 'NotionPresso CLI 개선기: 복잡한 5단계 설정을 1줄 명령어로 바꾼 이야기',
    image: undefined,
    hashtag: ['NotionPresso', 'TypeScript'],
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
