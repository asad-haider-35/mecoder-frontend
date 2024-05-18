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
            className='flex-1 text-center font-semibold font-redHatDisplay text-[16px] md:text-[24px]
                        rounded-lg border border-primary py-6 md:py-8 px-4 md:px-12 ' 
            onClick={() => onSelect(option)}
        >
                {option.Text}
        </motion.button>
    )
}

export default QuestionOption
