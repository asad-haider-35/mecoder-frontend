import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { StartScreen } from '../assets';
import { Button } from '../components';

const Home = () => {

  const navigate = useNavigate();

  const navigateToTest = () => {
    navigate('test');
  }

  return (
    <div className='flex justify-center items-center pt-20 flex-col gap-5 px-10'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          className='flex-1 text-center font-bold font-redHatDisplay text-[24px] md:text-[45px]'
        >
          Discover Your Inner Coder <span className='text-primary font-extrabold'> Introvert or Extrovert </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          className='flex-1 text-center text-darkGrey font-bold font-redHatDisplay text-[16px] md:text-[23px]'
        >
          1-minute Quiz
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className='flex-1 flex justify-center md:mt-12'
        >
            <img src={StartScreen} alt='Start' />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className='flex-1 flex justify-center mt-6 md:mt-12 py-4'
        >
          <Button text={'Start your test'} onClick={navigateToTest} />
        </motion.div>
    </div>
  )
}

export default Home
