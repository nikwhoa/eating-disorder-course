import Link from 'next/link';

export default function Home() {
  return (
    // <main className="flex h-screen flex-col items-center justify-between p-24">
    <main className="flex flex-col items-center justify-between">
      <div className="lg:max-w-lg test-container">
        <div className="p-5">
          <h1 className="">Тест ставлення до прийому їжі</h1>
        </div>
        <div className="p-7 pt-1">
          <div className="test-info">
            <p className="text-base leading-7 text-gray-700 md:text-lg md:leading-9 test-welcome-text">
              Розлади харчової поведінки - це не просто проблеми зі столовою ложкою чи вагами. Це серйозні, часто приховані, психологічні та фізіологічні лиха, що подібні до крижаних айсбергів в океані життя. Немов невидимі ланцюги, вони утримують людей у полоні страху і самовіддачі, отруюючи їхнє
              ставлення до власного тіла і свого здоров&apos;я. Руйнування цих ланцюгів важливе, щоб повернути людям їхню внутрішню свободу і дозволити їм повністю насолоджуватися життям.
            </p>
          </div>
        </div>
        <div className="p-5 text-center">
          <button className="start-test-btn">
            <Link href="/test/questions" style={{ width: '100%', display: 'inline-block' }}>
              Почати тест
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
