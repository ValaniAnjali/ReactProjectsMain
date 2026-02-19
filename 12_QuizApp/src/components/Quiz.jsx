import React, { useState,useCallback } from 'react'

import QUESTIONS from '.././question'
import Question from './Question';
import Summary from './Summary';

//useRef - to store and manage value independently of which component belong
const Quiz = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [userAnswers,setUserAnswers]=useState([]);


    const activeQuestionIndex=userAnswers.length;
    const quizComplete=activeQuestionIndex===QUESTIONS.length;
    const handleSelectAnswer=useCallback(
        function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUseranswers)=>{
            return [...prevUseranswers,selectedAnswer]
        });
    
    },[]
    );
    const handleSkipAnswer=useCallback(()=>{
        handleSelectAnswer(null);
    },[]);
    if(quizComplete){
        return(
            <Summary userAnswers={userAnswers}/>
        )
             
     
          
       
    }
        if (!quizStarted) {
  return (
    <div id="quiz-start">
      <h2>Welcome to the Quiz!</h2>
      <button onClick={() => setQuizStarted(true)}>
        Start Quiz
      </button>
    </div>
  );
}
        

    
    
  return (
    <div id="quiz">
        <Question
                    key={activeQuestionIndex}
                    questionIndex={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                    
                    
        />
    </div>
  )
}

export default Quiz