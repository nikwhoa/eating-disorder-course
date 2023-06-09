export default function HomePage() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Вітаю з покупкую курсу!</h1>
      <p>Для отримання посилання вкажіть вашу електрону пошту у полі нижче</p>
      <input type='email' placeholder='email@gmail.com' />
      <button>Отримати посилання</button>
    </div>
  );
}

