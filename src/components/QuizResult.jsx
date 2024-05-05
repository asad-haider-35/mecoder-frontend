import React, { useEffect, useState } from 'react'
import { calculateResult } from '../api/services/QuizService';

const QuizResult = ({ quizResponse }) => {

    const [personType, setPersonType] = useState('');

    useEffect(() => {
        calculateResult(quizResponse)
            .then(response => {
                setPersonType(response.data.Data);
            });
    }, [])

    return (
        <div className='flex flex-col justify-center items-center gap-10 w-[50%] h-full'>
            <div className='flex-1 text-center font-bold font-redHatDisplay text-[30px] md:text-[45px]'>
                Your Personality Type is: <br /> {personType}
            </div>

            <div className='flex-1 flex flex-col justify-center'>
                
            </div>
        </div>
    )
}

export default QuizResult
