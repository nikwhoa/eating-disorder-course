import Question from './Question/Question';

export default function Page() {
  return (
    <>
      <div className='lg:max-w-lg pb-12'>
        <div className='lg:max-w-lg test-container question-container'>
          <Question />
        </div>
      </div>
    </>
  );
}
