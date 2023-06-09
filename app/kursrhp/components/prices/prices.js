import './prices.scss';
import { RightArrow } from '@/app/tools/icons/icons';
import Link from 'next/link';
// TODO: check "early-bird" prices
export default function Prices() {

  return (
    <section className='prices' id='prices'>
      <div className='prices__title title-primary'>
        Тарифи
      </div>
      <div className='prices__container'>
        <div className='tariff bg-primary-block'>
          <div className='tariff-container'>
            <div className='tariff__title'>Соло</div>
            <div className='tariff__description'>
              <ul>
                <li>8 вебінарів + запис 1 місяць</li>
                <li>
                  8 Q&A сесії <br />
                  <span>
                  *(можливість задати питання) додаткові матеріали назавжди
                </span>
                </li>
                <li>
                  <s>
                    доступ до групового чату
                  </s>
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
          <div className='tariff__price'>
            350 / 500$
          </div>
          <div className='payment__buttons'>
            <Link href={{
              pathname: '/kursrhp/payment',
              query: { tariff: 'solo', price: 350 }
            }}>
              ХОЧУ НА КУРС
              <RightArrow />
            </Link>
            <Link href={{
              pathname: '/kursrhp/payment',
              query: { tariff: 'solo', price: 500 }
            }} style={{ borderTop: '1px solid white' }}>
              оплата частинами
            </Link>
          </div>
        </div>

        <div className='tariff bg-secondary-green'>
          <div className='tariff-container'>
            <div className='tariff__title'>Я в групі</div>
            <div className='tariff__description'>
              <ul>
                <li>8 вебінарів + запис 1 місяць</li>
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
          <div className='tariff__price'>
            590 / 700$
          </div>
          <div className='tariff__buttons'>
            <a href='#'>
              ХОЧУ НА КУРС
              <RightArrow />
            </a>
            <a href='#' style={{ borderTop: '1px solid white' }}>
              оплата частинами
            </a>
          </div>
        </div>

        <div className='tariff bg-secondary-red'>
          <div className='tariff-container'>
            <div className='tariff__title'>Я з психологом</div>
            <div className='tariff__description'>
              <ul>
                <li>
                  8 вебінарів + запис 1 місяць
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
          <div className='tariff__counter'>
            Залишилось <b>40</b> місць
          </div>
          <div className='tariff__price'>
            950 / 1150$
          </div>
          <div className='tariff__buttons'>
            <a href='#'>
              ХОЧУ НА КУРС
              <RightArrow />
            </a>
            <a href='#' style={{ borderTop: '1px solid white' }}>
              оплата частинами
            </a>
          </div>
        </div>

        <div className='tariff bg-primary-element'>
          <div className='tariff-container'>
            <div className='tariff__title'>Я з Дашею</div>
            <div className='tariff__description'>
              <ul>
                <li>
                  8 вебінарів + запис 1 місяць
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
          <div className='tariff__counter'>
            Залишилось <b>10</b> місць
          </div>
          <div className='tariff__price'>
            2500 / 3150$
          </div>
          <div className='tariff__buttons'>
            <a href='#'>
              ХОЧУ НА КУРС
              <RightArrow />
            </a>
            <a href='#' style={{ borderTop: '1px solid white' }}>
              оплата частинами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}