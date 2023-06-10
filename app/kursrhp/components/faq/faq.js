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
              Що робити якщо не прийшов лист на пошту
            </span>
            {isOpen && questionIndex === 0 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 0 ? 'show' : ''}`}>
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
          </div>
        </div>
        <div className='faq__item' data-index={1}>
          <div className='question' onClick={() => openHandler(1)}>
            Не можу оплатити
            {isOpen && questionIndex === 1 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 1 ? 'show' : ''}`}>
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
          </div>
        </div>
        <div className='faq__item' data-index={2}>
          <div className='question' onClick={() => openHandler(2)}>
            <span>
              Чи можу оплатити картою іноземного банку
            </span>
            {isOpen && questionIndex === 2 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 2 ? 'show' : ''}`}>
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
          </div>
        </div>
        <div className='faq__item' data-index={3}>
          <div className='question' onClick={() => openHandler(3)}>
            Як оформити часткову оплату
            {isOpen && questionIndex === 3 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 3 ? 'show' : ''}`}>
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
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
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
          </div>
        </div>
        <div className='faq__item' data-index={5}>
          <div className='question' onClick={() => openHandler(5)}>
            Скільки триватиме курс
            {isOpen && questionIndex === 5 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 5 ? 'show' : ''}`}>
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
          </div>
        </div>
        <div className='faq__item' data-index={6}>
          <div className='question' onClick={() => openHandler(6)}>
            Чи будуть записи ефірів
            {isOpen && questionIndex === 6 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 6 ? 'show' : ''}`}>
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
          </div>
        </div>
        <div className='faq__item' data-index={7}>
          <div className='question' onClick={() => openHandler(7)}>
            Чи можу я змінити тариф
            {isOpen && questionIndex === 7 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 7 ? 'show' : ''}`}>
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
          </div>
        </div>
        <div className='faq__item' data-index={8}>
          <div className='question' onClick={() => openHandler(8)}>
            Інші питання
            {isOpen && questionIndex === 8 ? <CloseIcon /> : <OpenIcon />}
          </div>
          <div className={`answer ${isOpen && questionIndex === 8 ? 'show' : ''}`}>
            Курс буде проходити 2 рази на тиждень у вигляді відео семінарів, а також будуть надаватись практичні заннятя і тд.
          </div>
        </div>
      </div>
    </section>
  );
}