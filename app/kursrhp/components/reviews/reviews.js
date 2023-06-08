'use client';
import { register } from 'swiper/element/bundle';
import './reviews.scss';
import Image from 'next/image';
import slide1 from '@/app/kursrhp/components/reviews/images/review-one.jpg';
import slide2 from '@/app/kursrhp/components/reviews/images/review-two.jpg';
import slide3 from '@/app/kursrhp/components/reviews/images/review-three.jpg';
import slide4 from '@/app/kursrhp/components/reviews/images/review-four.jpg';
import slide5 from '@/app/kursrhp/components/reviews/images/review-five.jpg';
import slide6 from '@/app/kursrhp/components/reviews/images/review-six.jpg';
import slide7 from '@/app/kursrhp/components/reviews/images/review-seven.jpg';

export default function Reviews() {
  register();
  return (
    <section className='reviews'>
      <div className='reviews__title'>
        Відгуки
      </div>
      <div className='reviews__slider swiper-container'>
        <swiper-container navigation={true} pagination={true} loop={true}>
          <swiper-slide>
            <div className='reviews__slide'>
              <Image src={slide1} alt='Відгук 1' />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='reviews__slide'>
              <Image src={slide2} alt='Відгук 2' />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='reviews__slide'>
              <Image src={slide3} alt='Відгук 3' />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='reviews__slide'>
              <Image src={slide4} alt='Відгук 4' />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='reviews__slide'>
              <Image src={slide5} alt='Відгук 5' />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='reviews__slide'>
              <Image src={slide6} alt='Відгук 6' />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className='reviews__slide'>
              <Image src={slide7} alt='Відгук 7' />
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
);
}