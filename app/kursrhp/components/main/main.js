'use client';
import { useState } from 'react';
import Header from '@/app/kursrhp/components/main/header/header';
import '@/app/kursrhp/components/main/main-section.scss';
import Link from 'next/link';
import Image from 'next/image';
import dashaHarchenko from '@/app/kursrhp/components/main/images/dasha-harchenko.jpg';
import { BranchIcon, CloseIcon, OpenIcon } from '@/app/tools/icons/icons';

export default function Main() {
  const [isDegreeOpen, setIsDegreeOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="container desktop-container">
        <section className='main-section'>
          <h1 className='course-title'>
            Relife
          {/*</span>*/}
          </h1>
          <h2 className='subtitle'>
            Вилікуватись від компульсивних переїдань, булімії, орторексії раз і назавжди
          </h2>
          <div className='course-info'>
            <div className='course-info__item'>
              <span>СТАРТ КУРСУ:</span> 29.06.2023
            </div>
            <div className='course-info__item'>
              <span>ТРИВАЛІСТЬ:</span> 3 місяці
            </div>
            <div className='course-info__item'>
              <span>МОВА КУРСУ:</span> українська
            </div>
          </div>
          <div className='course-button'>
            <Link href='/kursrhp#prices' className='btn'>
              Хочу на курс
            </Link>
          </div>
        </section>
        <section className='about-me'>
          <div className='about-me__text'>
            <h2 className='about-me__text__name'>Даша Харченко</h2>
            <p className='about-me__text__description'>
              Досвід відновлення після 8 років рхп практикуючий психолог, психосоматолог, експерт з розладів харчової поведінки
            </p>
            <div className='about-me__text__degree'>
              <div className='degree-header'>
                Освіта
                <div className={`open-degree-info-btn ${isDegreeOpen ? 'open' : 'close'}`} title='Показати інформацію про освіту'
                     onClick={() => setIsDegreeOpen(!isDegreeOpen)}>
                  {isDegreeOpen ? <CloseIcon /> : <OpenIcon />}
                </div>
              </div>
              <div className={`degree-body ${isDegreeOpen ? 'animate' : ''}`}>
                <ul>
                  <li>Бердянський медичний коледж “Лікувальна справа”</li>
                  <li>Бердянський педагогічний університет “Практична психологія”</li>
                  <li>Міжнародний Інститут Психології “Основи когнітивно-поведінкової терапії”</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='about-me__photo'>
            <Image
              sizes='(min-width: 767px) 2000px'
              quality={100}
              placeholder='blur'
              src={dashaHarchenko} alt='Даша Харченко'  />
            <div className='about-me__photo__circle'>
              <BranchIcon />
            </div>
          </div>
          <div className='about-me-ellipse'></div>
        </section>
      </div>
    </>
  );
}
