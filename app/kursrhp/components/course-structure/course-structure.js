'use client';
import './course-structure.scss';
import { ArrowUp, BranchIcon, MobileMenuIcon } from '@/app/tools/icons/icons';
import { useState } from 'react';

export default function CourseStructure() {
  const [expand, setExpand] = useState(true);
  return (
    <section className='course-structure container' id='course-structure'>
      <div className='course-structure__title title-primary' style={{
        borderBottom: expand ? 'none' : ''
      }}>
        Структура курсу
        <div className='course-structure__title-icon' onClick={() => setExpand(!expand)}>
          {!expand ? <ArrowUp /> : <MobileMenuIcon />}
        </div>
      </div>
      <div className={`course-structure__content ${expand ? '' : 'animate'}`} style={{
        // display: expand ? 'none' : ''
        // height: expand ? 0 : ''
      }}>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>01/</div>
          <div className='course-structure__content-item-title'>Мені страшно (проробка страхів перед початком відновлення)</div>
        </div>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>02/</div>
          <div className='course-structure__content-item-title'>Йду в Recovery (схема відновлення РХП)</div>
        </div>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>03/</div>
          <div className='course-structure__content-item-title'>Вчусь медитувати</div>
        </div>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>04/</div>
          <div className='course-structure__content-item-title'>
            Чому зі мною це трапилось?
            <div>
              - психосоматичні і езотеричні причини рхп
              - вплив дитячих травм на рхп
            </div>
          </div>
        </div>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>05/</div>
          <div className='course-structure__content-item-title'>В мене відкрились очі (як рхп впливає на стосунки, інтимне життя та реалізацію)</div>
        </div>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>06/</div>
          <div className='course-structure__content-item-title'>Нарешті вивчаю психосоматику (Основи психосоматики — як допомогти собі самостійно)
          </div>
        </div>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>07/</div>
          <div className='course-structure__content-item-title'>Секрет одужання від рхп</div>
        </div>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>08/</div>
          <div className='course-structure__content-item-title'>
            Вчусь проживати емоції
            <div>
              - як екологічно проживати злість та агресію
              - що робити якщо не можу плакати
              - як перестати бути хорошою
            </div>
          </div>
        </div>
        <div className='course-structure__content-item'>
          <div className='course-structure__content-item-number'>09/</div>
          <div className='course-structure__content-item-title'>«Випускний в нове життя»
            <div>
            </div>
          </div>
        </div>
        <div className='course-structure-text'>
          Відновлення від рхп - довготривалий сеанс глубинної терапії.
          <br /><br />
          Замість взаємодії з психологом загальної практики - ти зможеш попрацювати з експертом з розладів харчової поведінки
          Отримати підтримуюче ком’юніті однодумців, і спробувати на собі різні терапевтичні техніки.
          <br /><br />
          Саме такий комплексний підхід допомагає прийти до глобальних змін в найкоротший терміни.
          <div className='course-structure-text-icon'>
            <BranchIcon />
          </div>
        </div>
      </div>
    </section>
  );
}