
import Link from 'next/link';

export default function Page() {
  return (
    <div className="lg:max-w-lg">
      <p className="text-base font-semibold leading-7 text-indigo-600">Розбираємося з РПП</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Тест ставлення до прийому їжі</h1>
      <p className="mt-6 text-base leading-7 text-gray-700 md:text-lg md:leading-9 test-welcome-text">
        Розлади харчової поведінки - це не просто проблеми зі столовою ложкою чи вагами. Це серйозні, часто приховані, психологічні та фізіологічні лиха, що подібні до крижаних айсбергів в океані життя. Немов невидимі ланцюги, вони утримують людей у полоні страху і самовіддачі, отруюючи їхнє
        ставлення до власного тіла і свого здоров&apos;я. Руйнування цих ланцюгів важливе, щоб повернути людям їхню внутрішню свободу і дозволити їм повністю насолоджуватися життям.
      </p>
      <button className="mt-8 w-full px-4 py-2 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-3 md:text-lg md:px-8">
        <Link href="/test/questions" style={{ width: '100%', display: 'inline-block' }}>
          Почати тест
        </Link>
      </button>
    </div>
  );
}
