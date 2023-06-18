import './benefits.scss';
import benefitsPhoto from './images/benefits-dasha.jpg';
import Image from 'next/image';

export default function Benefits() {
  return (
    <section className='benefits container' id='benefits'>
      <div className='benefits__container'>
        <div className='benefits-photo'>
          <Image src={benefitsPhoto} alt='Що я отримаю' quality={100} />
        </div>
        <div className='padding-left'>
          <div className='benefits__title title-primary'>
            Що я отримаю
          </div>
          <div className='benefits__text'>
            <ul>
              <li>стабілізацію ваги</li>
              <li> перехід на інтуїтивне харчування</li>
              <li> життя без нав&apos;язливих думок про їжу та схуднення</li>
              <li> внутрішню свободу</li>
              <li> розкриття творчого потенціалу</li>
              <li> звільнення від хронічної тривожності</li>
              <li> розвиток інтуїції та довіра до себе</li>
              <li> вихід з парадигми <b>&ldquo;світ небезпечний&rdquo;</b></li>
              <li> звільнення від румінацій - <b>&ldquo;нав'язливих думок&rdquo;</b></li>
              <li> позбавлення синдрому <b>&ldquo;відкладеного життя&rdquo;</b></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
