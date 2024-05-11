import React, { useEffect, useState } from 'react'
import { calculateResult } from '../api/services/QuizService';
import { UmbrellaMan } from '../assets'
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const QuizResult = ({ quizResponse }) => {

    const navigate = useNavigate();

    const [personType, setPersonType] = useState('');

    useEffect(() => {
        if(quizResponse.QuizId > 0)
            calculateResult(quizResponse)
                .then(response => {
                    setPersonType(response.data.Data);
                });
    }, []);

    function navigateToHome(){
        navigate('/');
    }

    return (
        <div className='flex flex-col justify-center items-center gap-16 w-[75%] md:w-[50%] h-full'>
            <div className='flex-1 text-center font-bold font-redHatDisplay text-[20px] md:text-[45px]'>
                Your Personality Type is: <br /> <span className='text-primary'>{personType}</span>
            </div>

            <div className='flex-1 flex flex-col justify-center'>
                <img src={UmbrellaMan} />
            </div>

            <div className='flex-1 flex justify-center mt-6 md:mt-12 py-4'>
                <Button text={'Back to home page'} onClick={navigateToHome} />
            </div>
        </div>
    )
}

export default QuizResult
