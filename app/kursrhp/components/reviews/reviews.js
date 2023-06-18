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
import { useEffect } from 'react';
import { SliderNextBtn, SliderPrevBtn } from '@/app/tools/icons/icons';

export default function Reviews() {
  register();

  useEffect(() => {
    // swiper element
    const swiperEl = document.querySelector('swiper-container');
    const nextBtn = document.querySelector('.next-slide-button');
    const prevBtn = document.querySelector('.prev-slide-button');
    // swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2
        }
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'swiper-pagination-bullet',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-bullet-active'
      },
      on: {
        init() {
          // custom next button
          nextBtn.addEventListener('click', () => {
            this.slideNext();
          });
          prevBtn.addEventListener('click', () => {
            this.slidePrev();
          });
          const bullets = document.querySelectorAll('.swiper-pagination-bullet');
          bullets.forEach((bullet, index) => {
              bullet.style.background = '#DBC3DB';
            }
          );
        }
      }
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();

  }, []);

  return (
    <section className='reviews container'>
      <div className='reviews__title title-primary'>
        Відгуки
      </div>
      <div className='reviews__slider swiper-container' style={{
        position: 'relative'
      }}>
        <swiper-container pagination={true} loop={true} init={false}>
          <swiper-slide key={'slide1'}>
            <div className='reviews__slide'>
              <Image src={slide1} quality={80} alt='Відгук 1' />
            </div>
          </swiper-slide>
          <swiper-slide key={'slide2'}>
            <div className='reviews__slide'>
              <Image src={slide2} quality={80} alt='Відгук 2' />
            </div>
          </swiper-slide>
          <swiper-slide key={'slide3'}>
            <div className='reviews__slide'>
              <Image src={slide3} quality={80} alt='Відгук 3' />
            </div>
          </swiper-slide>
          <swiper-slide key={'slide4'}>
            <div className='reviews__slide'>
              <Image src={slide4} quality={80} alt='Відгук 4' />
            </div>
          </swiper-slide>
          <swiper-slide key={'slide5'}>
            <div className='reviews__slide'>
              <Image src={slide5} quality={80} alt='Відгук 5' />
            </div>
          </swiper-slide>
          <swiper-slide key={'slide6'}>
            <div className='reviews__slide'>
              <Image src={slide6} quality={80} alt='Відгук 6' />
            </div>
          </swiper-slide>
          <swiper-slide key={'slide7'}>
            <div className='reviews__slide'>
              <Image src={slide7} quality={80} alt='Відгук 7' />
            </div>
          </swiper-slide>
        </swiper-container>
        <div className='swiper-pagination'>
          <div className='swiper-pagination-bullet'></div>
        </div>
        <div className='reviews nav-buttons prev-slide-button'>
          <SliderPrevBtn />
        </div>
        <div className='reviews nav-buttons next-slide-button'>
          <SliderNextBtn />
        </div>
      </div>
    </section>
  );
}
