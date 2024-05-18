import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

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
                })
                .catch(error => {
                    navigate('/er');
                });
    }, []);

    function navigateToHome(){
        navigate('/');
    }

    return (
        <div className='flex flex-col justify-center items-center gap-10 w-[75%] md:w-[50%] h-full'>
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
                className='flex-1 text-center font-bold font-redHatDisplay text-[20px] md:text-[45px]'
            >
                Your Personality Type is: <br /> <span className='text-primary text-[32px] md:text-[54px]'>{personType}</span>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className='flex-1 flex flex-col justify-center md:h-[75%]'
            >
                <img src={UmbrellaMan} />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className='flex-1 flex justify-center py-2'
            >
                <Button text={'Back to home page'} onClick={navigateToHome} />
            </motion.div>
        </div>
    )
}

export default QuizResult
