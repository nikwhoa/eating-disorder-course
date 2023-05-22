'use client';
import questions from './questions';

export default function Page() {
  return (
    <>
      <div className="lg:max-w-lg">
        <ul className="mt-6">
          {questions.map((question, i) => (
            <li className="mt-4 text-xl" key={question.id}>
              {i + 1}. {question.question}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
