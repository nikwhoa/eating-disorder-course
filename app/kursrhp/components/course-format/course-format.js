import './course-format.scss';
import { BlackSquareIcon, BranchIcon, PlantIcon } from '@/app/tools/icons/icons';

export default function CourseFormat() {
  return (
    <section className='course-format container' id='course-format'>
      <div className='course-format__title title-primary'>
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
          <div className='left-column'>
            <div className='course-format__column__icon'>
              <BranchIcon />
            </div>
          </div>
          <div className='right-column'>
            <div className='course-format__column__title'>
              Чек листи:
            </div>
            <div className='course-format__column__text'>
              - компульсивних дій <br />
              - підготовка до медитації
            </div>
          </div>
        </div>
        <div className='course-format__column__item'>
          <div className='left-column'>
            <div className='course-format__column__icon'>
              <PlantIcon />
            </div>
          </div>
          <div className='right-column'>
            <div className='course-format__column__title'>
              Додаткові матеріали:
            </div>
            <div className='course-format__column__text'>
              - шпаргалка по психосоматиці <br />
              - піца балансу <br />
              - класифікатор емоцій <br />
              - щоденник
            </div>
          </div>
        </div>
        <div className='course-format__column__item'>
          <div className='left-column'>
            <div className='course-format__column__icon'>
              <BlackSquareIcon />
            </div>
          </div>
          <div className='right-column'>
            <div className='course-format__column__title'>
              Медитації від Даші
            </div>
          </div>
        </div>
      </div>
    </section>
  )
    ;
}