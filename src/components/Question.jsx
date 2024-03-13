import TimeForAnswer from "./TimeForAnswer.jsx"
import Answers from "./Answers.jsx"

export default function Question({questionText, answers, onSelectAnswer, selectedAnswer,answerState, onSkip}){
  return(
    <div id='question'>
      <TimeForAnswer
        timeout={10000} 
        onTimeout={onSkip}/>
      <h2>
        {questionText}
        </h2>
      <Answers 
      answers={answers}  
      selectedAnswer={selectedAnswer}
      answerState={answerState}
      onSelect={onSelectAnswer}
      />
    </div>
  )
}