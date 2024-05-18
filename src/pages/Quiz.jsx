import React, { useEffect, useRef, useState } from 'react'
import { getQuiz } from '../api/services/QuizService';
import { Constants } from '../constants/constants';
import { useNavigate } from 'react-router-dom';
import { Question, Stepper, QuizResult } from '../components';

const Quiz = () => {

  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [displayQuestion, setDisplayQuestion] = useState(null);
  const [quizResponse, setQuizResponse] = useState({});

  useEffect(() => {
    getQuiz(Constants.QUIZ_ID)
      .then((response) => {
        if(response){
          setQuiz(response.data.Data);
        }
      })
      .catch(error => {
          navigate('/er');
      });
  }, []);

  useEffect(() => {
    if(quiz !== undefined && quiz !== null && quiz.Questions.length > 0){
      setDisplayQuestion(quiz.Questions[0]); //Initialize to first Quesiton of the Quiz

      let response = {
        QuizId: quiz.Id,
        QuizQuestionResponses: []
      }

      setQuizResponse(response);
    }
    
  }, [quiz])

  function onAnswerSelect(answer){

    let response = quizResponse;
    response.QuizQuestionResponses.push({
      QuestionId: answer.QuestionId,
      AcquiredScore: answer.Score,
    });

    setQuizResponse(response);

    let index = quiz.Questions.indexOf(displayQuestion);

    if(index === -1)
      return;

    if(index !== (quiz.Questions.length - 1)){
      setDisplayQuestion(quiz.Questions[index + 1]);
    }
    else{
      setDisplayQuestion(null);
    }
  }

  if(quiz == null)
    return (<div></div>);

  return (
    <div className='flex flex-col justify-center items-center py-2 md:py-6'>
      {displayQuestion === null ?
        <Stepper className={'px-10 py-6 mb-0'} steps={quiz.Questions.map((q, i) => (i))} currentStep={quiz.Questions.length - 1} /> :
        <Stepper className={'px-10 py-6 mb-0'} steps={quiz.Questions} currentStep={displayQuestion} />
      }
      

      <div className='flex justify-center items-center w-full md:mt-10'>
        {displayQuestion === null ? 
          <QuizResult quizResponse={quizResponse} /> : 
          <Question question={displayQuestion} onOptionSelect={onAnswerSelect} />
        }
        
      </div>
      
    </div>
  )
}

export default Quiz
