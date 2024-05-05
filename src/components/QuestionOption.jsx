import React from 'react'
import { motion } from 'framer-motion'

const QuestionOption = ({ option, onSelect }) => {
    return (
        <motion.span 
            whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px 0px rgb(75 94 193 / var(--tw-border-opacity))"
            }}
            whileTap={{
                scale: 0.9
            }}
            className='flex-1 text-left font-semibold font-redHatDisplay text-[20px] md:text-[30px] text-primary
                        rounded-lg border-4 border-primary py-6 px-8 ' 
            onClick={() => onSelect(option)}
        >
                {option.Text}
        </motion.span>
    )
}

export default QuestionOption
