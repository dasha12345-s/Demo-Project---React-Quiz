import {useState, useCallback} from 'react';
import QUESTIONS from "../questions.js";
import quizComplited from '../assets/quiz-complete.png'
import Question from './Question.jsx';

export default function Quiz(){
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){

    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
   []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),
  [handleSelectAnswer]);

  if (quizOver){
    return (
      <div id='summary'>
        <img src={quizComplited} alt='Trophy icon'/>
        <h2>Quiz commplite</h2>
      </div>
    );
  }

  return(
    <div id='quiz'>
      <Question 
      key={activeQuestionIndex}
      keyCustom={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkip={handleSkipAnswer}/>
    </div>
  )
}
