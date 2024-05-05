import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const Home = () => {

  const navigate = useNavigate();

  const navigateToTest = () => {
    navigate('test');
  }

  return (
    <div className='flex justify-center items-center pt-20 flex-col gap-5'>
        <h1 className="flex-1 text-center font-bold font-redHatDisplay text-[30px] md:text-[45px]">
            Find out your personality <br />
            type in short quiz
        </h1>
        <h3 className="flex-1 text-center text-secondary font-bold font-redHatDisplay text-[20px] md:text-[30px]">
            1 MINUTE QUIZ
        </h3>
        <div className='flex-1 w-[400px] py-6'>
          <motion.button 
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px 0px rgb(75 94 193 / var(--tw-border-opacity))"
            }}
            whileTap={{
              scale: 0.9
            }}
            onClick={navigateToTest} 
            className='py-4 px-2 border-primary border-4 rounded-lg text-primary w-full text-[20px] font-bold' >
              Start Test
          </motion.button>
        </div>
    </div>
  )
}

export default Home
