import React, { useEffect, useState } from 'react'
import { getQuiz } from '../api/services/QuizService';
import { Constants } from '../constants/constants';

const Quiz = () => {

  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    getQuiz(Constants.QUIZ_ID).then((response) => {
      if(response){
        setQuiz(response.data.Data);
      }
    });
  }, []);

  return (
    <div>
      Quiz { quiz !== null ? quiz.Id : '' }
    </div>
  )
}

export default Quiz
