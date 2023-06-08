import './course-for.scss';
import { BulIcon } from '@/app/tools/icons/icons';
import Image from 'next/image';
import dashaHarchenkoCourseFor from './images/dasha-harchenko-course-for.jpeg';

export default function CourseFor() {
  return (
    <section className='course-for' id='course-for'>
      <div className='course-for__title'>
        Для кого курс
      </div>
      <div className='course-for-container'>
        <div className='course-for__text'>
          <div className='course-for__text__container'>
            <div className='text__container__title'>
              Для тих хто хоче:
            </div>
            <div className='text__container__item'>
              <div className='text__container__item--icon'>
                <BulIcon />
              </div>
              <div className='text__container__item--text'>
                налагодити стосунки з їжею та власним тілом
              </div>
            </div>
            <div className='text__container__item'>
              <div className='text__container__item--icon'>
                <BulIcon />
              </div>
              <div className='text__container__item--text'>
                вийти із замкнутого кола дієта - зрив
              </div>
            </div>
            <div className='text__container__item'>
              <div className='text__container__item--icon'>
                <BulIcon />
              </div>
              <div className='text__container__item--text'>
                повернути природне відчуття голоду та насичення
              </div>
            </div>
            <div className='text__container__item'>
              <div className='text__container__item--icon'>
                <BulIcon />
              </div>
              <div className='text__container__item--text'>
                змінити фокус з обмежень на проявленість
              </div>
            </div>
            <div className='text__container__item'>
              <div className='text__container__item--icon'>
                <BulIcon />
              </div>
              <div className='text__container__item--text'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                позбавитись від нав'язливих думок про їжу та схуднення
              </div>
            </div>
          </div>
        </div>
        <div className='course-for__photo'>
          <Image src={dashaHarchenkoCourseFor}
                 placeholder='blur'
                 sizes='(max-width: 767px) 100%'
                 quality={100} alt='Для кого курс' width={312} height={400} />
        </div>
      </div>
    </section>
  );
};