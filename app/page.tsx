import Image from 'next/image';
import { BlogPosts } from 'components/posts';

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src="/profile.jpg"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4 object-cover w-[100px] h-[100px]"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">HEAKKOK JEONG</h1>
      </div>
      <p className="mb-4 leading-8">
        {`새로운 문제를 해결하는 과정을 즐깁니다. 오픈소스 프로젝트 NotionPresso와 SSGOI에 기여한 경험이 있습니다.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
