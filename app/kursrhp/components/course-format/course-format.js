import './course-format.scss';

export default function CourseFormat() {
  return (
    <section className='course-format' id='course-format'>
      <div className='course-format__title'>
        В якому форматі проходитиме курс
      </div>
      <div className='course-format__grid'>
        <div className='grid__item'>
          <div className='grid__item__ellipse'></div>
          <div className='grid__item__title'>
            Вебінари
          </div>
        </div>
        <div className='grid__item'>
          <div className='grid__item__ellipse'></div>
          <div className='grid__item__title'>
            Індивідуальні сесії
          </div>
        </div>
        <div className='grid__item'>
          <div className='grid__item__ellipse'></div>
          <div className='grid__item__title'>
            Групова терапія
          </div>
        </div>
        <div className='grid__item'>
          <div className='grid__item__ellipse'></div>
          <div className='grid__item__title'>
            Групові чати
          </div>
        </div>
      </div>
      <div className='course-format__column'>
        <div className='course-format__column__item'>
          <div className='course-format__column__title'>
            Чек листи:
          </div>
          <div className='course-format__column__text'>
            - компульсивних дії <br/>
            - підготовка до медитації
          </div>
        </div>
        <div className='course-format__column__item'>
          <div className='course-format__column__title'>
            Додаткові матеріали:
          </div>
          <div className='course-format__column__text'>
            - шпаргалка по психосоматиці <br/>
            - піца балансу <br/>
            - класифікатор емоцій <br/>
            - щоденник
          </div>
        </div>
        <div className='course-format__column__item'>
          <div className='course-format__column__title'>
            Медитації від Даші
          </div>
        </div>
      </div>
    </section>
  );
}