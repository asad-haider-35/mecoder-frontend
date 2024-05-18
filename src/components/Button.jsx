import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ text, onClick }) => {
    return (
        <div>
            <motion.button 
                whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 8px 0px rgb(75 94 193 / var(--tw-border-opacity))"
                }}
                whileTap={{
                scale: 0.9
                }}
                onClick={onClick} 
                className='py-3 sm:py-4 px-10 sm:px-14 bg-primary rounded-full text-white text-[16px] sm:text-[20px]' 
            >
                {text}
            </motion.button>
        </div>
    )
}

export default Button
