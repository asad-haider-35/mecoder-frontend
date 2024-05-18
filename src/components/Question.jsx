import React from 'react'
import { motion } from 'framer-motion';

import QuestionOption from './QuestionOption';

const Question = ({ question, onOptionSelect }) => {

    if(!question)
        return (<div></div>);

    return (
        <div className='flex flex-col justify-center items-center md:gap-10 w-[75%] md:w-[50%] h-full'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className='flex-1 text-center font-bold font-redHatDisplay text-[24px] md:text-[45px] md:mb-6'
            >
                {question.Text}
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
                className='flex-1 flex flex-col justify-center gap-4 md:gap-8 mt-10'>
                {question.QuestionOptions.map((option, index) => {
                    return (
                        <QuestionOption key={option.Id} option={option} onSelect={onOptionSelect} />
                    )
                })}
            </motion.div>
        </div>
    )
}

export default Question
