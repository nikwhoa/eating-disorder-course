import Question from './Question/Question';

export default function Page() {
  return (
    <>
      <div className='w-full pb-12'>
        <div className='test-container question-container'>
          <Question />
        </div>
      </div>
    </>
  );
}
