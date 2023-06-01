import React from 'react';

export default function Result({ userAnswers }) {
  const testResult = userAnswers.map((answer) => answer.answer.answerWeight).reduce((a, b) => a + b, 0);
  document.body.style.backgroundColor = 'rgba(219, 195, 219, 1)';
  // scroll to top
  window.scrollTo(0, 0);
  return (
    <div className='result-container'>
      <div className='top-container'>
        <div className='left-column'></div>
        <div className='right-column'>РЕЗУЛЬТАТ</div>
      </div>
      <div className='result flex-col h-screen'>

        <div className='info-text pl-8 pr-8'>
          Ви закінчили тест!
        </div>
        <div className='flex flex-col pl-9 pr-9 justify-center items-center mt-6 text-result'>
          {/*<p className='text-xl'>*/}
          {/*  Ваш результат: <span className='font-bold text-3xl'>{testResult}</span>*/}
          {/*</p>*/}
          <p className='leading-7 mt-6'>
            {testResult < 20 && (
              <>
                <b>Ваш результат <span className='font-bold text-xl'>{testResult}.</span></b>. <br /><br /> Причини для хвилювання немає. За
                результатами тесту у вас низька ймовірність розладу харчової поведінки.
                <br /><br />
                Але якщо в процесі тестування ви серйозно задумались над деякими питаннями, то рекомендуємо перейти до нашого телеграм каналу, де ви
                зможете знайти більше інформації про неочевидні ознаки рхп.
              </>
            )}
            {testResult >= 20 && (
              <>
                <b><span className='font-bold text-xl'>Ваш результат {testResult}, що свідчить про необхідність допомоги кваліфікованого
                спеціаліста.</span></b> <br/><br/>
                Розлад харчової поведінки є захворюванням, ознаки якого на перший погляд є не очевидними, проте які суттєво псують якість життя.

                <br /><br />
                В наш час підтримка здорових стосунків із тілом та іжею має одне з першочергових значень. <br/><br/>
                Більше про перебіг захворювання та методи лікування ви зможете отримати в нашому закритому телеграм каналі.
                {/*Приєднатись*/}
              </>
            )}
            <div className='flex justify-center mt-6'>
              <a href='https://click.pulse.is/public/s/MjkwMTY=/p/MzQ4Nzg=/l/aHR0cHM6Ly90Lm1lLytSRk5RQWlieDdObERDVjZJ'
                 className='block m-auto text-center'>

                <button type={'button'} className='rounded-lg p-4 pt-2 pb-2 mt-4 m-auto shadow-md font-bold'
                        style={{ backgroundColor: '#F9F7ED' }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    className='inline-block mr-4'
                    preserveAspectRatio='xMidYMid'
                    viewBox='0 0 256 256'
                  >
                    <path
                      fill='#40B3E0'
                      d='M128 0C57.307 0 0 57.307 0 128s57.307 128 128 128 128-57.307 128-128S198.693 0 128 0z'
                    ></path>
                    <path
                      fill='#FFF'
                      d='M190.283 73.63L167.42 188.899s-3.197 7.994-11.99 4.157l-52.758-40.448-19.184-9.272-32.294-10.872s-4.956-1.758-5.436-5.595c-.48-3.837 5.596-5.915 5.596-5.915l128.376-50.36s10.552-4.636 10.552 3.038'
                    ></path>
                    <path
                      fill='#D2E5F1'
                      d='M98.618 187.603s-1.54-.144-3.46-6.22c-1.917-6.075-11.67-38.049-11.67-38.049l77.538-49.24s4.477-2.718 4.317 0c0 0 .799.48-1.6 2.718-2.397 2.239-60.91 54.836-60.91 54.836'
                    ></path>
                    <path
                      fill='#B5CFE4'
                      d='M122.901 168.115l-20.867 19.026s-1.632 1.238-3.416.462l3.996-35.34'
                    ></path>
                  </svg>
                  Приєднатись
                </button>
              </a>
            </div>

          </p>
          <p className='mt-6' style={{ fontSize: '.7rem' }}>
            <span className='font-bold text-xl'>*</span>{' '}
            Тест ставлення до прийому їжі (Eating Attitudes Test (EAT-26)) був розроблений David M.Garner в Інституті психіатрії Кларка університету Торонто в
            1979 р.,
            <br /><br />
            В 1982 р. тест був модифікований до 26 питань і був названий EAT-26.
            <br /><br />
            EAT-26 публікується з дозволу автора David M.Garner. The EAT-26
            <br /><br />
            Тест є скринінговим, тобто. на підставі його результатів неможливо самостійно визначити діагноз. Тест EAT-26 дозволяє оцінити ймовірність
            наявності розладів харчової поведінки (РХП), особливо нервової анорексії та булімії. Чим вище підсумкові бали, тип вища ймовірність
            наявності РХП
          </p>
          {/* <p className="text-xl"></p> */}
        </div>
      </div>
    </div>
  );
}
