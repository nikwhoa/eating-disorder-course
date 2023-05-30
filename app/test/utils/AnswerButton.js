import React, { useState } from 'react';

export default function AnswerButton({ answer, onClick, userAnswer, currentQuestionIndex }) {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    onClick(answer);
    setHover(false);
  };

  let answeredText = '';

  if (!userAnswer) {
    answeredText = '';
  } else {
    if (!userAnswer[currentQuestionIndex]) {
      answeredText = '';
    } else {
      answeredText = userAnswer[currentQuestionIndex].answer.answerText;
    }
  }

  const isAnswered = () => {
    if (answeredText === answer.text) {
      return 'answer-answered';
    } else {
      return '';
    }
  };

  return (
    <div className='button-test-wrapper pl-5 pr-5'>
      <button type="button" key={answer.text} className={`answer ${hover ? 'answer-hover' : ''} ${isAnswered()}`} onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onTouchStart={() => setHover(true)} onTouchEnd={() => setHover(false)}>
        {answer.text}
        {/* create circle like radio button */}
        <div className={`circle${isAnswered() ? '-checked' : ''}`}></div>
      </button>
    </div>
  );
}
