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
        작은 불편도 그냥 지나치지 않습니다. 스크롤 위치를 잃는 이미지 뷰어부터 번거로운 CLI
        명령까지, 직접 부딪혀 더 편리하고 안정적인 방향으로 개선합니다. 문제 해결 그 자체뿐 아니라,
        그 과정에서 얻은 배움을 다음 작업에 이어가는 것을 중요하게 생각합니다.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
