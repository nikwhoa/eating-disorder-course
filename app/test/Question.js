'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import questions from './questions/questions';
import './question.scss';
import AnswerButton from './AnswerButton';

export default function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const userId = uuidv4();

  const ISSERVER = typeof window === 'undefined';

  // useEffect(() => {
  //   // Perform localStorage action
  //   const item = localStorage.getItem('key');
  // }, []);

  const handleAnswer = (answer) => {
    // Generate a new answer object
    const newAnswer = {
      questionId: questions[currentQuestionIndex].id,
      question: questions[currentQuestionIndex].question,
      answer: {
        answerWeight: answer.value,
        answerText: answer.text,
      },
    };

    // Get the stored data
    let storedAnswers = [];
    if (!ISSERVER) {
      storedAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
      // Find the index of the existing answer with the same questionId
      let existingAnswerIndex = storedAnswers.findIndex((answer) => answer.questionId === newAnswer.questionId);

      // Replace the existing answer with the new one, or add the new answer if it doesn't exist
      if (existingAnswerIndex !== -1) {
        storedAnswers[existingAnswerIndex] = newAnswer;
      } else {
        storedAnswers.push(newAnswer);
      }
    }

    // Update state
    setUserAnswers(storedAnswers);

    // Save the updated data back to localStorage
    if (!ISSERVER) localStorage.setItem('userAnswers', JSON.stringify(storedAnswers));

    // Переход к следующему вопросу
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    if (!ISSERVER) {
      setUserAnswers(JSON.parse(localStorage.getItem('userAnswers')) || []);
    }
  }, [ISSERVER]);

  if (currentQuestionIndex >= questions.length) {
    return <div>Ви відповіли на усі питання!</div>;
  }

  // console.log('userAnswers', userAnswers);
  // console.log(localStorage.getItem('userAnswers'));
  // console.log(currentQuestionIndex >= userAnswers.length);
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
                {questions[currentQuestionIndex].answers.map((answer, i) => (
                  <AnswerButton id={answer.text + (i + 1)} key={`${questions[currentQuestionIndex].id}_${answer.text}`} userAnswer={userAnswers} currentQuestionIndex={currentQuestionIndex} answer={answer} onClick={handleAnswer} />
                ))}
              </div>
              <div className="mt-2 flex justify-between">
                {/* buttons back and forward */}
                <button type="button" className="back-button text-sm" onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} hidden={currentQuestionIndex === 0} disabled={currentQuestionIndex === 0}>
                  Назад
                </button>
                <button type="button" className="next-button text-sm" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} hidden={currentQuestionIndex >= userAnswers.length} disabled={currentQuestionIndex === questions.length - 1}>
                  Далі
                </button>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}
