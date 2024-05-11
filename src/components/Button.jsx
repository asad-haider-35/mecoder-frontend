import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ text, onClick }) => {
    return (
        <div>
            <motion.button 
                whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px 0px rgb(75 94 193 / var(--tw-border-opacity))"
                }}
                whileTap={{
                scale: 0.9
                }}
                onClick={onClick} 
                className='py-4 px-6 sm:px-10 bg-primary rounded-full text-white text-[12px] sm:text-[16px]' 
            >
                {text}
            </motion.button>
        </div>
    )
}

export default Button
