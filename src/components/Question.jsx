import React from 'react'
import QuestionOption from './QuestionOption';

const Question = ({ question, onOptionSelect }) => {

    if(!question)
        return (<div></div>);

    return (
        <div className='flex flex-col justify-center items-center gap-10 w-[50%] h-full'>
            <div className='flex-1 text-center font-bold font-redHatDisplay text-[30px] md:text-[45px]'>
                {question.Text}
            </div>

            <div className='flex-1 flex flex-col justify-center gap-8'>
                {question.QuestionOptions.map((option, index) => {
                    return (
                        <QuestionOption key={option.Id} option={option} onSelect={onOptionSelect} />
                    )
                })}
            </div>
        </div>
    )
}

export default Question