export default function HomePage() {
  return (
    <div className='completed-page' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem' }}>
      <h1 style={{
        // fontSize: '3rem',
        // fontStyle: 'Raleway, sans-serif'
      }}>Вітаємо вас!</h1>
      <p style={{
        // fontSize: '1.2rem',
        // fontStyle: 'Raleway, sans-serif'
      }}>
        Ви успішно зараховані на наш курс з лікування розладів харчової поведінки. Ваша оплата отримана, і ви готові розпочати свій шлях до кращого
        розуміння, управління та одужання.
        Квитанція про оплату та детальні інструкції щодо доступу до курсу були надіслані на вашу зареєстровану електронну адресу. Будь ласка,
        перевірте свою поштову скриньку. Якщо ви не можете знайти наш лист, перевірте папку "Спам" або "Небажана кореспонденція".
      </p>
    </div>
  );
}

