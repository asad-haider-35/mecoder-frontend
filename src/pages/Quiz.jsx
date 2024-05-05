import React, { useEffect, useState } from 'react'
import { getQuiz } from '../api/services/QuizService';
import { Constants } from '../constants/constants';
import Question from '../components/Question';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {

  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [displayQuestion, setDisplayQuestion] = useState(null);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    getQuiz(Constants.QUIZ_ID).then((response) => {
      if(response){
        setQuiz(response.data.Data);
      }
    });
  }, []);

  useEffect(() => {
    if(quiz !== undefined && quiz !== null && quiz.Questions.length > 0)
      setDisplayQuestion(quiz.Questions[0]); //Initialize to first Quesiton of the Quiz
    
  }, [quiz])

  function onAnswerSelect(answer){
    let answerScore = quizScore + answer.Score;
    setQuizScore(answerScore);
    
    let index = quiz.Questions.indexOf(displayQuestion);

    if(index === -1)
      return;

    if(index === (quiz.Questions.length - 1)){
      navigate('/testresult')
    }
    else{
      setDisplayQuestion(quiz.Questions[index + 1]);
    }

    console.log(answerScore);
    console.log(quizScore);
  }

  return (
    <div className='flex justify-center items-center h-full py-6'>
      <Question question={displayQuestion} onOptionSelect={onAnswerSelect} />
    </div>
  )
}

export default Quiz
