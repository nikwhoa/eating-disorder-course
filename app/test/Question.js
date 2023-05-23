'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import questions from './questions/questions';
import './question.scss';

export default function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (answer) => {
    // Здесь вы можете сохранить ответ в состоянии или отправить его на сервер

    // Переход к следующему вопросу
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    return <div>Ви відповіли на усі питання!</div>;
  }

  return (
    <>
      <div className="mt-6 text-sm">На питання може бути лише одна відповідь. Проходячи тест ви даєте згоду на обробку персональних даних.</div>
      <div className="question">
        <TransitionGroup>
          <CSSTransition key={currentQuestionIndex} timeout={500} classNames="fade">
            <div className="mt-6">
              <div className="question-number">
                Питання <span className="number">{currentQuestionIndex + 1}</span> <span>з</span> <span className="number">{questions.length}</span>
              </div>
              <div className="font-bold question">{questions[currentQuestionIndex].question}</div>
              <div className="mt-6">
                {questions[currentQuestionIndex].answers.map((answer) => (
                  <button type="button" key={`${questions[currentQuestionIndex].id}_${answer.text}`} className="answer" onClick={() => handleAnswer(answer)}>
                    <div className="control-group">
                      <label className="control control-radio">
                        {answer.text}
                        <input type="radio" name="radio" />
                        <div className="control_indicator"></div>
                      </label>
                    </div>
                    {/* <label className="checkmark" htmlFor={`${questions[currentQuestionIndex].id}_${answer.text}`} />
              <input id={`${questions[currentQuestionIndex].id}_${answer.text}`} type="checkbox" className="enabled:hover:border-gray-400 disabled:opacity-75 checked:bg-blue-500 checkbox" />
              <span className="checkmark"></span> */}
                  </button>
                ))}
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}
