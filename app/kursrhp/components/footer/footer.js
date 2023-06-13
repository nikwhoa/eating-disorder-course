'use client';
import './footer.scss';
import visaMastercard from './images/visa_mastercard.png';
import Image from 'next/image';
import CookieConsent from '@/app/kursrhp/CookieConsent';

export default function Footer() {


  return (
    <footer className='footer'>
      <div className='footer__container'>
        Фізична особа-підприємець Харченко Дарина Вiкторiвна <br /> РНОКПП: 3388707604
        <br /><br />
        <a href='/kursrhp/privacy-policy' target='_blank'>
          Політика конфіденційності
        </a>
        <br />
        <a href='#'>
          Публічна оферта
        </a>
        <br /><br /><br />
        <Image src={visaMastercard} alt='Visa & Mastercard' width={100} />
      </div>
      <CookieConsent />
    </footer>
  );
}
