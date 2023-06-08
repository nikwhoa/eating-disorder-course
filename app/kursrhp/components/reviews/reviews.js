'use client';
import { register } from 'swiper/element/bundle';
import './reviews.scss';
import Image from 'next/image';
import slide1 from './images/1.JPG';
import slide2 from './images/2.JPG';
import slide3 from './images/3.JPG';
import slide4 from './images/4.JPG';
import slide5 from './images/5.JPG';
import slide6 from './images/6.JPG';
import slide7 from './images/7.JPG';

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