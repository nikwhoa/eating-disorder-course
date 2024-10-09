import '@/app/kursrhp/styles.scss'
import '@/app/kursrhp/components/support/support.scss'
import './completed-page.scss'
import { BranchIcon, TelegramButton } from '@/app/tools/icons/icons';
import photo from './images/photo-2.jpeg'
import Image from 'next/image';
export default function HomePage() {
  return (
    <div className='completed-page'>
      <div className='completed-page-header'>
        <div className='completed-page-header__left-column'>
          <BranchIcon />
        </div>
        <div className='completed-page-header__right-column'>
          <span style={{
            fontSize: '2rem',
            fontWeight: '400',
            fontFamily: "Raleway, sans-serif"
          }}>
            Курс:
          </span>
          <span style={{
            fontSize: '2rem',
            fontWeight: '700',
            fontFamily: "Raleway, sans-serif"
          }}>
             Relife
          </span>
        </div>
      </div>
      <div className='completed-page__content'>
        <div className='content__left-column'>
          <div className='text'>
            <h1>Дуже рада тобі!</h1>
            <p>
              Дякую за купівлю курсу «Relife» 🙏
              <br /><br />
              Я щаслива, що ти вирішила(в) довіритися мені та моєму досвіду!
              <br /><br />
              На нас чекають 3 місяць роботи. Незабаром ти почнеш змінюватися на краще і дізнаєшся, як це жити без обмежень та постійного контролю ❤️
              <br /><br />
              <b>Старт 6 липня</b> <br /><br />
              Всю необхідну інформацію я надішлю тобі на e-mail. <br/><br/>
              {/*Якщо лист не прийшов, натискай на кнопку нижче і ми тобі допоможем. <br/><br/>*/}
              До зустрічі!
            </p>
          </div>
        </div>
        <div className='content__right-column'>
          <div className='photo'>
            <Image src={photo} alt='Даша Харченко' />
          </div>
        </div>
      </div>
      <div className='complete-page-footer'>
        <section className="support">
          <div className="support__container">
            <div className="support-title">Служба піклування</div>
            <div className="support-subtitle">Якщо у вас залишились ще запитання</div>
            <div className="support-button"><a className="btn" href="#">Зв’язатись
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                <path fill="#202020" fill-rule="evenodd"
                      d="M23.55 22.25c.6-3.15 1.8-10.05 2.1-12.9V8.6c0-.15-.15-.3-.3-.45-.3-.15-.6-.15-.75-.15-.75 0-1.8.3-6.75 2.4-1.112.463-2.855 1.213-5.263 2.25-1.489.64-3.232 1.39-5.237 2.25-.9.45-1.35.75-1.35 1.05 0 .6.75.9 1.95 1.2.9.3 2.25.6 2.85.6.6 0 1.2-.3 1.95-.75 4.95-3.3 7.5-4.95 7.65-4.95 0 0 .15-.15.3 0s.15.3.15.3c-.113.227-2.71 2.68-4.102 3.994-.45.426-.775.733-.848.806-.157.157-.317.303-.47.444-.871.798-1.511 1.385.02 2.406 1.5 1.05 2.4 1.65 4.05 2.7.303.173.582.372.85.563.659.47 1.253.894 2 .787.45 0 .9-.45 1.2-1.8z"
                      clip-rule="evenodd"></path>
              </svg>
            </a></div>
            <div className="support-social"><a href="https://www.instagram.com/hard_chenko/">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                <g clip-path="url(#clip0_412_67)">
                  <path fill="#202020"
                        d="M30 24c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6zm10.5-7.5v15c0 4.95-4.05 9-9 9h-15c-4.95 0-9-4.05-9-9v-15c0-4.95 4.05-9 9-9h15c4.95 0 9 4.05 9 9zM33 24c0-4.95-4.05-9-9-9s-9 4.05-9 9 4.05 9 9 9 9-4.05 9-9zm3-9.75c0-1.2-1.05-2.25-2.25-2.25s-2.25 1.05-2.25 2.25 1.05 2.25 2.25 2.25S36 15.45 36 14.25z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_412_67">
                    <path fill="#fff" d="M0 0H48V48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a><a href="https://t.me/+RFNQAibx7NlDCV6I">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                <g clip-path="url(#clip0_412_61)">
                  <path fill="#202020"
                        d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18 18-8.1 18-18S33.9 6 24 6zm8.4 12.3c-.3 2.85-1.5 9.75-2.1 12.9-.3 1.35-.75 1.8-1.2 1.8-1.05.15-1.8-.75-2.85-1.35a94.897 94.897 0 01-4.05-2.7c-1.8-1.2-.6-1.8.45-2.85.3-.3 4.8-4.5 4.95-4.8 0 0 0-.15-.15-.3s-.3 0-.3 0c-.15 0-2.7 1.65-7.65 4.95-.75.45-1.35.75-1.95.75-.6 0-1.95-.3-2.85-.6-1.2-.3-1.95-.6-1.95-1.2 0-.3.45-.6 1.35-1.05 5.25-2.25 8.7-3.75 10.5-4.5 4.95-2.1 6-2.4 6.75-2.4.15 0 .45 0 .75.15.15.15.3.3.3.45v.75z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_412_61">
                    <path fill="#fff" d="M0 0H48V48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a></div>
          </div>
        </section>
      </div>

    </div>
  );
}

