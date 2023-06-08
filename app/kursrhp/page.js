import "@/app/kursrhp/styles.scss";
import Main from '@/app/kursrhp/components/main/main';
import CourseFor from '@/app/kursrhp/components/course-for/course-for';
import CourseFormat from '@/app/kursrhp/components/course-format/course-format';
import Benefits from '@/app/kursrhp/components/benefits/benefits';
import Reviews from '@/app/kursrhp/components/reviews/reviews';

export default function KursRHPPage() {
  return (
    <>
      <Main />
      <CourseFor />
      <CourseFormat />
      <Benefits />
      <Reviews />
    </>
  );
}