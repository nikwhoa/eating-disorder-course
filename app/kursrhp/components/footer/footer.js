import './footer.scss';
import visaMastercard from './images/visa_mastercard.png'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        Фізична особа-підприємець Харченко Дарина Вiкторiвна <br /> РНОКПП: 3277014105
        <br /><br/>
        <a href='#'>
          Політика конфіденційності
        </a>
        <br/>
        <a href='#'>
          Публічна оферта
        </a>
        <br/><br/><br/>
        <Image src={visaMastercard} alt='Visa & Mastercard' width={100} />
      </div>
    </footer>
  );
}
