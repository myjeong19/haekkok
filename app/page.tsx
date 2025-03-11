import Image from 'next/image';
import { BlogPosts } from 'components/posts';

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src="/profile.jpeg"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4 object-cover w-[100px] h-[100px]"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">HEAKKOK JEONG</h1>
      </div>
      <p className="mb-4 leading-8">
        {`작은 디테일의 차이를 민감하게 파악하고 사용자 경험을 개선하는 프론트엔드 개발자 정민영입니다.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
