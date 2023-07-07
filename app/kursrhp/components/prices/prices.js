import './prices.scss';
import { Dollar, RightArrow } from '@/app/tools/icons/icons';
import Link from 'next/link';
// TODO: check "early-bird" prices
export default function Prices() {

  return (
    <section className='prices container' id='prices'>
      <div className='prices__title title-primary'>
        Тарифи
      </div>
      <div className='prices__container'>
        <div className='tariff bg-primary-block'>
          <div className='tariff-container'>
            <div className='tariff__title'>Соло</div>
            <div className='tariff__description'>
              <ul>
                <li>8 вебінарів + запис 3 місяці</li>
                <li>
                  8 Q&A сесії <br />
                  <span>
                  *(можливість задати питання) додаткові матеріали назавжди
                </span>
                </li>
                <li>
                  доступ до групового чату
                </li>
                <li>
                  <s>
                    7 годин групової терапії
                  </s>
                </li>
                <li>
                  <s>
                    6 годин індивідуальних консультацій з Дашею
                  </s>
                </li>
              </ul>
            </div>
          </div>
          <div className='payment__buttons'>
            {/*<Link href={{*/}
            {/*  pathname: '/kursrhp/payment',*/}
            {/*  query: { tariff: 'solo', price: 350 }*/}
            {/*}}>*/}
            {/*  ХОЧУ НА КУРС*/}
            {/*  <RightArrow />*/}
            {/*</Link>*/}
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfPQkQjCeSue2TEZlz9Z4sTQhLXzE7HMDH0NlCkITyPA__cIQ/viewform'>
              Дізнатись більше
              <RightArrow />
            </a>
          </div>
        </div>

        <div className='tariff bg-secondary-green'>
          <div className='tariff-container'>
            <div className='tariff__title'>Я в групі</div>
            <div className='tariff__description'>
              <ul>
                <li>8 вебінарів + запис 3 місяці</li>
                <li>
                  8 Q&A сесії <br />
                  <span>
                  *(можливість задати питання) додаткові матеріали назавжди
                </span>
                </li>
                <li>
                  доступ до групового чату
                </li>
                <li>
                  7 годин групової терапії
                </li>
                <li>
                  <s>
                    6 годин індивідуальних консультацій з Дашею
                  </s>
                </li>
              </ul>
            </div>
          </div>
          <div className='payment__buttons'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfPQkQjCeSue2TEZlz9Z4sTQhLXzE7HMDH0NlCkITyPA__cIQ/viewform'>
              Дізнатись більше
              <RightArrow />
            </a>
          </div>
        </div>

        <div className='tariff bg-secondary-red'>
          <div className='tariff-container'>
            <div className='tariff__title'>Я з психологом</div>
            <div className='tariff__description'>
              <ul>
                <li>
                  8 вебінарів + запис 3 місяці
                </li>
                <li>
                  8 Q&A сесії
                  *( можливість задати питання) додаткові матеріали назавжди
                </li>
                <li>
                  доступ до групового чату
                </li>
                <li>
                  7 годин групової терапії
                </li>
                <li>
                  6 годин індивідуальних консультацій з психологом
                </li>
              </ul>
            </div>
          </div>
          <div className='payment__buttons'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfPQkQjCeSue2TEZlz9Z4sTQhLXzE7HMDH0NlCkITyPA__cIQ/viewform'>
              Дізнатись більше
              <RightArrow />
            </a>
          </div>
        </div>

        <div className='tariff bg-primary-element' style={{ position: 'relative', zIndex: 1 }}>
          <div className='tariff-container'>
            <div className='tariff__title'>Я з Дашею</div>
            <div className='tariff__description'>
              <ul>
                <li>
                  8 вебінарів + запис 3 місяці
                </li>
                <li>
                  8 Q&A сесії
                  *( можливість задати питання) додаткові матеріали назавжди
                </li>
                <li>
                  доступ до групового чату
                </li>
                <li>
                  7 годин групової терапії
                </li>
                <li>
                  6 годин індивідуальних консультацій з Дашею
                </li>
              </ul>
            </div>
          </div>
          <div className='payment__buttons'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfPQkQjCeSue2TEZlz9Z4sTQhLXzE7HMDH0NlCkITyPA__cIQ/viewform'>
              Дізнатись більше
              <RightArrow />
            </a>
          </div>
        </div>
        <div className='prices__container-text'>
          Коли ти йдеш в свій найбільший страх - ти здобуваєш свою найбільшу силу
        </div>
      </div>
    </section>
  );
}
