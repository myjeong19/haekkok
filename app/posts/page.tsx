import { BlogPosts } from 'components/posts';

export const metadata = {
  title: 'Posts',
  description: '프론트엔드 개발자 정해꼭의 개발 블로그.',
};

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  );
}
