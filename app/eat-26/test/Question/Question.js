'use client';

import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import questions from './questions';
import '../styles/question.scss';
import AnswerButton from '../utils/AnswerButton';
import IconLoader from '@/app/eat-26/utils/loader';
import Result from '../Result/Result';

export default function Question() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hideButtons, setHideButtons] = useState(false);

  // const userId = uuidv4();

  const ISSERVER = typeof window === 'undefined';

  useEffect(() => {
    if (!ISSERVER) {

      // check how long key userAnswers is in localStorage
      const userAnswersFromLocalStorage = JSON.parse(localStorage.getItem('userAnswers'));
      if (userAnswersFromLocalStorage) {
        const timeNow = new Date().getTime();
        const timeInLocalStorage = userAnswersFromLocalStorage[0].time;
        const timeDifference = timeNow - timeInLocalStorage;
        const timeDifferenceInHours = Math.floor(timeDifference / 1000 / 60 / 60);
        if (timeDifferenceInHours > 1) {
          localStorage.removeItem('userAnswers');
        }
      }

      const storedAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
      setUserAnswers(storedAnswers);
      setCurrentQuestionIndex(storedAnswers.length);
      // setUserAnswers(JSON.parse(localStorage.getItem('userAnswers')) || []);
      // setCurrentQuestionIndex(JSON.parse(localStorage.getItem('userAnswers')).length);
      // setLoading(false);
      setLoading(false);
      setInterval(() => {
        document.body.classList.remove('no-transition');
      }, 300);
    }
  }, [ISSERVER, loading]);

  const handleAnswer = (answer) => {
    // Disable buttons
    setHideButtons(true);
    // Generate a new answer object
    const newAnswer = {
      questionId: questions[currentQuestionIndex].id,
      question: questions[currentQuestionIndex].question,
      answer: {
        answerWeight: answer.value,
        answerText: answer.text
      },
      time: new Date().getTime()
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
    // smooth scroll to the bottom of the screen
    window.scrollTo(0, document.body.scrollHeight, 'smooth');

    // Переход к следующему вопросу
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 800);
  };

  if (currentQuestionIndex >= questions.length) {
    localStorage.clear('userAnswers');
    return <Result userAnswers={userAnswers} />;
  }

  const handleButtonClick = (button) => {
    // setHideButtons(true)
    if (button === 'back') {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (button === 'next') {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };


  return (
    <>

      <div className='top-container scrol'>
        <div className='left-column current-question'>
          <span className='number'>{currentQuestionIndex + 1}</span>/<span className='number'>{questions.length}</span>
        </div>
        <div className='right-column'>Питання</div>
      </div>

      <div className='mt-2 pl-5 pr-5 p-3 pt-6 info-text'>
        Прочитайте та оберіть, будь ласка, відповідь нижче, що найбільше відповідає вашому стану.
        Проходячи тест ви даєте згоду на обробку персональних даних.
      </div>
      <div className='ellipse-element-second' />
      <div className='question-wrapper'>
        {loading ? (
          <IconLoader />
        ) : (
          <TransitionGroup>
            <CSSTransition key={currentQuestionIndex} timeout={200} classNames='fade' onEnter={() => {
              setHideButtons(true);
              // document.body.style.overflowX = 'visible';
              document.body.querySelector('.question-container').style.overflowX = 'visible';
              document.body.querySelector('.question-wrapper').style.position = 'absolute';
              document.body.querySelector('.question-wrapper').style.height = '100vh';


            }}
                           onExited={() => {
                             setHideButtons(false);
                             document.body.querySelector('.question-container').style.overflowX = 'hidden';
                             document.body.querySelector('.question-wrapper').style.position = 'relative';
                             document.body.querySelector('.question-wrapper').style.height = 'initial';

                           }}>
              <div className=''>
                <div className={`font-bold question pl-5 pr-5`}
                     style={{ fontSize: `${currentQuestionIndex === 6 || currentQuestionIndex === 3 ? '1.2rem' : ''}` }}>{questions[currentQuestionIndex].question}</div>
                <div className=''>
                  {questions[currentQuestionIndex].answers.map((answer, i) => (
                    <AnswerButton id={answer.text + (i + 1)} key={`${questions[currentQuestionIndex].id}_${answer.text}`} userAnswer={userAnswers}
                                  currentQuestionIndex={currentQuestionIndex} answer={answer} onClick={handleAnswer} />
                  ))}
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>
      {!hideButtons && (
        <div className='buttons'>
          <div className='mt-1 flex justify-between'>
            <button type='button' className='back-button text-sm' onClick={() => handleButtonClick('back')} hidden={currentQuestionIndex === 0}
                    disabled={currentQuestionIndex === 0}>
              <svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 -6.5 36 36'>
                <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                  <g fill='#252528' fillRule='nonzero' transform='translate(-342 -159)'>
                    <g transform='translate(50 120)'>
                      <path
                        d='M317.108 39.29l10.542 10.452.059.054c.18.179.277.408.291.642v.124a.984.984 0 01-.291.642l-.052.044-10.549 10.462a1.005 1.005 0 01-1.413 0 .985.985 0 010-1.402l9.008-8.934h-31.704c-.552 0-.999-.443-.999-.99a.995.995 0 011-.992h31.468l-8.773-8.7a.985.985 0 010-1.402 1.005 1.005 0 011.413 0zm10.007 11.093l-10.714 10.626L327.002 50.5v-.004l-.059-.053-.06-.06h.232z'
                        transform='matrix(-1 0 0 1 620 0)'
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <button type='button' className='next-button text-sm' onClick={() => handleButtonClick('next')}
                    hidden={currentQuestionIndex >= userAnswers.length} disabled={currentQuestionIndex === questions.length - 1}>
              <svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 -6.5 36 36'>
                <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                  <g fill='#252528' fillRule='nonzero' transform='translate(-212 -159)'>
                    <g transform='translate(50 120)'>
                      <path
                        d='M187.108 39.29l10.542 10.452.059.054c.18.179.277.408.291.642v.124a.984.984 0 01-.291.642l-.052.044-10.549 10.462a1.005 1.005 0 01-1.413 0 .985.985 0 010-1.402l9.008-8.934h-31.704c-.552 0-.999-.443-.999-.99a.995.995 0 011-.992h31.468l-8.773-8.7a.985.985 0 010-1.402 1.005 1.005 0 011.413 0zm10.007 11.093l-10.714 10.626L197.002 50.5v-.004l-.059-.053-.06-.06h.232z'></path>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
