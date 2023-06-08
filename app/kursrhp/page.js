import "@/app/kursrhp/styles.scss";
import Main from '@/app/kursrhp/components/main/main';
import CourseFor from '@/app/kursrhp/components/course-for/course-for';
import CourseFormat from '@/app/kursrhp/components/course-format/course-format';

export default function KursRHPPage() {
  return (
    <>
      <Main />
      <CourseFor />
      <CourseFormat />
    </>
  );
}