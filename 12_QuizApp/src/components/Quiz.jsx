import React, { useState,useCallback } from 'react'
import quizCompleteImg from '../assets/quiz-complete.png'
import QUESTIONS from '.././question'
import Question from './Question';

//useRef - to store and manage value independently of which component belong
const Quiz = () => {
   
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
        return<div>
            <img src={quizCompleteImg} alt="complete Quiz Icon"/>
            <h2>Quiz Completed!</h2>
        </div>
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