import '@/app/kursrhp/styles.scss';
import '@/app/test/styles/globals.scss'
import image from '@/app/kursrhp/images/IMG_0898 Large (1).jpeg'
import Main from '@/app/kursrhp/components/main/main';
import CourseFor from '@/app/kursrhp/components/course-for/course-for';
import CourseFormat from '@/app/kursrhp/components/course-format/course-format';
import Benefits from '@/app/kursrhp/components/benefits/benefits';
import Reviews from '@/app/kursrhp/components/reviews/reviews';
import CourseStructure from '@/app/kursrhp/components/course-structure/course-structure';
import Prices from '@/app/kursrhp/components/prices/prices';
import Faq from '@/app/kursrhp/components/faq/faq';
import Support from './components/support/support';
import Footer from './components/footer/footer';
import Link from 'next/link.js';
import { TelegramButton } from '@/app/tools/icons/icons.js';

export default function KursRHPPage() {
  return (
    <div  className='bg-gray-600 bg-opacity-30 h-screen w-full flex flex-col justify-end pb-52 items-end px-4'>
      <img className={'background-image'} src={image.src} alt={'background'} />
      {/*<div className='h-screen flex justify-end pb-52 flex-col' style={{*/}
      {/*  backgroundImage: `url('${image.src}')`,*/}
      {/*  backgroundPosition: 'center',*/}
      {/*  backgroundRepeat: 'no-repeat',*/}
      {/*  backgroundSize: 'cover'*/}
      {/*}}>*/}
        <div className='text-xl md:text-6xl font-extrabold text-white pt-7 mt-10 md:mt-36 w-full text-center'>
          Курс ReLife вже стартував
        </div>
        <div className='text-base md:text-5xl font-semibold text-white pt-3 pb-7 w-full text-center'>
          <div className='w-10/12 md:w-[300px] mx-auto my-3'>
            <a className='btn text-base py-[1rem]' target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSfPQkQjCeSue2TEZlz9Z4sTQhLXzE7HMDH0NlCkITyPA__cIQ/viewform'>
              Дізнатись про наступний
            </a>
          </div>
        </div>

      {/*</div>*/}
    </div>
  );
}
