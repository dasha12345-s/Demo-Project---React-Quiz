import {useState} from 'react';
import TimeForAnswer from "./TimeForAnswer.jsx"
import Answers from "./Answers.jsx"
import QUESTIONS from '../questions.js'

export default function Question({
  keyCustom,
  onSelectAnswer, 
  onSkip
}){
  const [answer, selectAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  function handleSelectAnswer(answer){
    selectAnswer(
      {
        selectedAnswer: answer,
        isCorrect: null
      }
    )

    setTimeout(() => {
      selectAnswer({
          selectedAnswer: answer,
          isCorrect: QUESTIONS[keyCustom].answers[0]  === answer
        })

        setTimeout(() => {
          onSelectAnswer(answer);
        }, 2000)
    }, 1000)
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null){
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer){
    answerState = 'answered'
  }

  return(
    <div id='question'>
      <TimeForAnswer
        timeout={10000} 
        onTimeout={onSkip}/>
      <h2>
        {QUESTIONS[keyCustom].text}
        </h2>
      <Answers 
      answers={QUESTIONS[keyCustom].answers}  
      selectedAnswer={answer.selectedAnswer}
      answerState={answerState}
      onSelect={handleSelectAnswer}
      />
    </div>
  )
}