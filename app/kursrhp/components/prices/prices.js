import './prices.scss';
import { RightArrow } from '@/app/tools/icons/icons';

export default function Prices() {
  const liqpay = {
    data: 'eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOjAuMSwiY3VycmVuY3kiOiJVU0QiLCJkZXNjcmlwdGlvbiI6ItCi0LDRgNC40YQg0KHQvtC70L4iLCJwdWJsaWNfa2V5IjoiaTMyOTI1NjgzMzU2IiwibGFuZ3VhZ2UiOiJ1ayIsIm9yZGVyX2lkIjoiNTY1MTE2NTQ0IiwicGF5dHlwZXMiOiJwYXlwYXJ0LCBhcGF5LCBncGF5LCBjYXJkLCBwcml2YXQyNCJ9',
    signature: 'jmDWQqNVkNRcwI3hpNsRialKzzw='
  };
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
          <div className='tariff__buttons'>
            <div>
              <form method='POST' action='https://www.liqpay.ua/api/3/checkout' accept-charset='utf-8'>
                <input type='hidden' name='data'
                       value={liqpay.data} />
                <input type='hidden' name='signature' value={liqpay.signature} />
                <input type='image' hidden={true} src='//static.liqpay.ua/buttons/p1ru.radius.png' />
                <button type='submit' className='pay-button' name='btn_submit'>
                  ХОЧУ НА КУРС
                  <RightArrow />
                </button>
              </form>
            </div>
            <a href='#' style={{ borderTop: '1px solid white' }}>
              оплата частинами
            </a>
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