import Quiz from "./Quiz.jsx";
import {QUESTIONS} from "../questions.js";

export default function Questions(){
  return (
    <section id='question-overview'>
    <h2>QA</h2>
  <ul>
    {QUESTIONS.map((qItem) => (
    <Quiz key={qItem.title} {...qItem} />))}
  </ul>
  </section>
  )
}