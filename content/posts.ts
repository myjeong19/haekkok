import post1 from '../notion-data/5번의-복붙-지옥에서-1번의-명령어로-notionpresso-cli.json';

export const posts = [
  {
    title: '5번의 복붙 지옥에서 1번의 명령어로: NotionPresso CLI',
    slug: 'notionpresso-cli-improvement',
    content: post1,
    date: '2025-08-14',
    description: '반복될 수 있는 명령어를 한 줄로 바꾼 이야기',
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
