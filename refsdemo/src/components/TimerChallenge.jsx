import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
// Ref is not used just to connect html elements but also to connect any kind of values.  
// like here: for starting and stopping timer using variable outside is shared so we cant operate 2 different timer clicks together bcoz first one will be overridden by second one.
// when we have value that doesn't affects ui but we need to manage it than useRef is best
//useImpartiveHandle hook (used in ResultModal.jsx): expose callable function from your component.
// -----------------------------------------------------
//  let timer;
export default function TimerChallenge({title,targetTime}){
    const timer=useRef();
    const dialog=useRef();
    // const [timerStarted,setTimerstarted]=useState(false);
    // const [timerExpired,setTimerexpired]=useState(false);
    const [timeRemaining,setTimeremaining]=useState(targetTime *1000);
    const timerIsActive=timeRemaining>0 && timeRemaining<targetTime*1000;

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }
   
    function handleReset(){
        setTimeremaining(targetTime*1000);
    }
    function handlestart(){
         timer.current=setInterval(()=>{
            setTimeremaining(prevTimeRemaining=>prevTimeRemaining-10);
            
        },10);

        // setTimerstarted(true);
    }
    function handlestop(){
        dialog.current.open();
        clearInterval(timer.current);
        
    }
    return (
        <>
      
        <ResultModal targetTime={targetTime} result="lost" ref={dialog} remainingTime={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
        <h2>{title}</h2>
       
        <p className="challenge-time">
            {targetTime} second{targetTime>1?'s':''}
        </p>
        <p>
            <button onClick={timerIsActive?handlestop:handlestart}>{timerIsActive?'Stop':'Start'} Challenge</button>
        </p>
        <p className={timerIsActive?'active':undefined}>
            {timerIsActive?'Time is running...':'Timer inactive'}
        </p>
    </section>
        </>
    )
}
// forwardRef and adjusted omponent for older version than react19