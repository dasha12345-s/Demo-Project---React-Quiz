import {useState} from 'react';

export default function Quiz({id, text, answers}){

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return(
    <>
    <p>Currently active Question</p>
    <li>
      <h3>{id}</h3>
      <h2>{text}</h2>
      <p>{answers}</p>
    </li>
    </>
  )
}