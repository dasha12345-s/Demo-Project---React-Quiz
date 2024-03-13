import { useState, useEffect } from "react";

export default function TimeForAnswer({timeout, onTimeout, mode}){

  const [remainingTime, setRemaningTime] = useState(timeout)

  useEffect(() => {
    console.log('seting TINEOUT')
    const timer = setTimeout(onTimeout, timeout);

    return () => {
        clearTimeout(timer);
      };
  }, [timeout, onTimeout]);
  

  useEffect(() => {
    console.log('seting INTERVAL')
    const interval = setInterval(() => {
      setRemaningTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return() => {
        clearInterval(interval);
      }; 
}, []);

  return <progress 
  id='question-time' 
  max={timeout} 
  value={remainingTime}
  className={mode}/>
}