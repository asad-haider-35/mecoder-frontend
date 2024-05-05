import React, { useEffect, useState } from 'react'
import { getQuiz } from '../api/services/QuizService';
import { Constants } from '../constants/constants';
import Question from '../components/Question';
import { useNavigate } from 'react-router-dom';
import Stepper from '../components/Stepper';
import QuizResult from '../components/QuizResult';

const Quiz = () => {

  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [displayQuestion, setDisplayQuestion] = useState(null);
  const [quizResponse, setQuizResponse] = useState({});

  useEffect(() => {
    getQuiz(Constants.QUIZ_ID).then((response) => {
      if(response){
        setQuiz(response.data.Data);
      }
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

    setQuizResponse((prevQuizResponse) => {
      const newResponse = { ...prevQuizResponse }; // Create a copy of the previous state

      newResponse.QuizQuestionResponses.push({
        QuestionId: answer.QuestionId,
        AcquiredScore: answer.Score,
      });
      return newResponse;
    });

    let index = quiz.Questions.indexOf(displayQuestion);

    if(index === -1)
      return;

    if(index !== (quiz.Questions.length - 1)){
      setDisplayQuestion(quiz.Questions[index + 1]);
    }

    console.log(quizResponse);
  }

  function useUpdatedResponse(){
    
  }

  if(quiz == null)
    return (<div></div>);

  return (
    <div className='flex flex-col justify-center items-center h-full py-6'>
      <Stepper className={'px-10 py-6 mb-10'} steps={quiz.Questions} currentStep={displayQuestion} />

      <div className='flex justify-center items-center w-full mt-10'>
        {quiz.Questions.indexOf(displayQuestion) === (quiz.Questions.length - 1) ? 
          <QuizResult quizResponse={quizResponse} /> : 
          <Question question={displayQuestion} onOptionSelect={onAnswerSelect} />
        }
        
      </div>
      
    </div>
  )
}

export default Quiz
