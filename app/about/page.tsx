import Image from 'next/image';

export default function () {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col ">
        <Image
          src="/favicon.svg"
          width={500}
          height={500}
          alt="Picture of the author "
          className="w-72 h-72 mb-3 rounded-full overflow-hidden"
        />

        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold tracking-tighter">정민영</h1>
          <span className="text-gray-400">|</span>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Frontend Developer</p>
          <nav className="flex text-sm">
            <a
              className="text-blue-400 hover:text-blue-300 transition-all delay-100"
              href="https://www.linkedin.com/in/minyeong-jeong-a93a01271/"
            >
              Linkedin
            </a>
            <span className="text-gray-400 mx-3">·</span>
            <a
              className="text-blue-400 hover:text-blue-300 transition-all delay-100"
              href="https://github.com/myjeong19"
            >
              Github
            </a>
          </nav>
        </div>
      </div>

      <hr className="my-8" />

      <p className="mb-4 leading-8 px-10">
        작은 불편도 그냥 넘기지 않습니다. 스크롤 위치를 잃는 이미지 뷰어나 번거로운 CLI 명령 같은
        문제를 직접 마주하며, 더 편리하고 안정적인 방향을 찾아갑니다. 해결 과정에서 배운 것들은 다음
        글과 프로젝트에 자연스럽게 녹여 공유합니다.
      </p>
    </section>
  );
}
