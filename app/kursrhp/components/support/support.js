import { InstagramButton, TelegramButton, TelegramSecondButton } from '@/app/tools/icons/icons';
import './support.scss';

export default function Support() {
  return (
    <section className='support'>
      <div className='support__container'>
        <div className='support-title'>Служба піклування</div>
        <div className='support-subtitle'>Якщо у вас залишились ще запитання</div>
        <div className='support-button'>
          <a className='btn' href='#'>
            Зв’язатись
            <TelegramButton />
          </a>
        </div>
        <div className='support-social'>
          <a href='https://www.instagram.com/hard_chenko/'>
            <InstagramButton />
          </a>
          <a href='https://t.me/+RFNQAibx7NlDCV6I'>
            <TelegramSecondButton />
          </a>
        </div>
      </div>
    </section>
  );
}
