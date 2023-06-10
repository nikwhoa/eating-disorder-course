import '@/app/kursrhp/styles.scss';
import Main from '@/app/kursrhp/components/main/main';
import CourseFor from '@/app/kursrhp/components/course-for/course-for';
import CourseFormat from '@/app/kursrhp/components/course-format/course-format';
import Benefits from '@/app/kursrhp/components/benefits/benefits';
import Reviews from '@/app/kursrhp/components/reviews/reviews';
import CourseStructure from '@/app/kursrhp/components/course-structure/course-structure';
import Prices from '@/app/kursrhp/components/prices/prices';
import Faq from '@/app/kursrhp/components/faq/faq';
import Support from './components/support/support';
import Footer from './components/footer/footer';

export default function KursRHPPage() {
  return (
    <>
      <Main />
      <CourseFor />
      <CourseFormat />
      <Benefits />
      <Reviews />
      <CourseStructure />
      <Prices />
      <Faq />
      <Support />
      <Footer />


    </>
  );
}