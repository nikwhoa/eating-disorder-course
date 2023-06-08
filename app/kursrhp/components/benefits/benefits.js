import './benefits.scss';

export default function Benefits() {
  return (
    <section className='benefits' id='benefits'>
      <div className='benefits_photo'>
        {/*  todo: photo */}
      </div>
      <div className='benefits__title'>
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
          <li> звільнення від румінацій - <b>&ldquo;навязливих думок&rdquo;</b></li>
          <li> позбавлення синдрому <b>&ldquo;відкладеного життя&rdquo;</b></li>
        </ul>
      </div>
    </section>
  );
}