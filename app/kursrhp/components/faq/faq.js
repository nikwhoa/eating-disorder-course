'use client';
import { useState } from 'react';
import './faq.scss';
import { CloseIcon, OpenIcon } from '@/app/tools/icons/icons';

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const openHandler = (index) => {
    setQuestionIndex(index);
    console.log(index);
    if (questionIndex === index) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <section className='faq container' id='faq'>
      <div className='faq__title title-primary'>
        Часті питання
        {/*  icon */}
      </div>
      <div className='faq__content'>
        <div className='faq__item' data-index={0}>
          <div className='question' onClick={() => openHandler(0)}>
            <span>
              Не можу оплатити/як сплатити карткою іноземного банку
            </span>
            {isOpen && questionIndex === 0 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 0 ? 'show' : ''}`}>
            Якщо ви хочете оплатити карткою іноземного банку, або ваша оплата була неуспішною, напишіть нам, будь ласка, в службу турботи тут( додати
            лінк на телеграм чат) або на <a href='mailto:info.harchenko@gmail.com'>info.harchenko@gmail.com</a>, ми з радістю допоможемо.
          </div>
        </div>
        <div className='faq__item' data-index={1}>
          <div className='question' onClick={() => openHandler(1)}>
            Після оплати не отримала листа на пошту
            {isOpen && questionIndex === 1 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 1 ? 'show' : ''}`}>
            Перевірте, будь ласка, папку спам, якщо не знайшли листа, напишіть нам, в службу турботи тут(додати лінк на телеграм чат) або на{' '}<a href='mailto:info.harchenko@gmail.com'>info.harchenko@gmail.com</a>, ми завжди на зв'язку.
          </div>
        </div>
        <div className='faq__item' data-index={2}>
          <div className='question' onClick={() => openHandler(2)}>
            <span>
              Як оформити розстрочку
            </span>
            {isOpen && questionIndex === 2 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 2 ? 'show' : ''}`}>
            Оберіть бажаний вами тариф та натисніть «Оплатити частинами», зазначте кількість платежів та підтвердіть оплату.
            Кошти автоматично списуватимуться з вашої картки щомісяця.
          </div>
        </div>
        <div className='faq__item' data-index={3}>
          <div className='question' onClick={() => openHandler(3)}>
            Скільки триватиме курс
            {isOpen && questionIndex === 3 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 3 ? 'show' : ''}`}>
            Курс триватиме протягом 3-х місяців. Записи ефірів будуть доступні ще 3 місяці після завершення.
          </div>
        </div>
        <div className='faq__item' data-index={4}>
          <div className='question' onClick={() => openHandler(4)}>
            <span>
              Скільки зберігатиметься доступ до курсу
            </span>
            {isOpen && questionIndex === 4 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 4 ? 'show' : ''}`}>
            Доступ до вебінарів зберігатиметься протягом 3-х місяців після закінчення курсу. Доступ до чатів залишається назавжди, але без зворотного
            зв'язку.
          </div>
        </div>
        <div className='faq__item' data-index={5}>
          <div className='question' onClick={() => openHandler(5)}>
            Чи можу я зробити апгрейд тарифу
            {isOpen && questionIndex === 5 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 5 ? 'show' : ''}`}>
            Так, ви можете змінити ваш тариф, написавши нам в службу турботи тут (додати лінк на телеграм чат) або на{' '}<a href='mailto:info.harchenko@gmail.com'>info.harchenko@gmail.com</a>, ми з радістю допоможемо.
          </div>
        </div>
        <div className='faq__item' data-index={8}>
          <div className='question' onClick={() => openHandler(8)}>
            Інші запитання
            {isOpen && questionIndex === 8 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 8 ? 'show' : ''}`}>
            Якщо у вас виникли будь- які інші запитання, напишіть нам, будь ласка, в службу турботи тут або на <a
            href='mailto:info.harchenko@gmail.com'>info.harchenko@gmail.com</a>, ми з радістю допоможемо.
          </div>
        </div>
      </div>
    </section>
  );
}