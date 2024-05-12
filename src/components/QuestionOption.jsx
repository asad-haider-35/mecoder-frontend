import React from 'react'
import { motion } from 'framer-motion'

const QuestionOption = ({ option, onSelect }) => {
    return (
        <motion.button 
            whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 8px 0px rgb(75 94 193 / var(--tw-border-opacity))"
            }}
            whileTap={{
                scale: 0.9
            }}
            className='flex-1 text-center font-semibold font-redHatDisplay text-[14px] md:text-[20px] text-darkGrey
                        rounded-lg border border-primary py-8 px-10 ' 
            onClick={() => onSelect(option)}
        >
                {option.Text}
        </motion.button>
    )
}

export default QuestionOption
