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
        <div className='flex-1 text-center font-bold font-redHatDisplay text-[24px] md:text-[45px]'>
          Discover Your Inner Coder <span className='text-primary font-extrabold'> Introvert or Extrovert </span>
        </div>

        <div className='flex-1 text-center text-darkGrey font-bold font-redHatDisplay text-[16px] md:text-[23px]'>
          1-minute Quiz
        </div>

        <div className='flex-1 flex justify-center md:mt-12'>
            <img src={StartScreen} alt='Start' />
        </div>

        <div className='flex-1 flex justify-center mt-6 md:mt-12 py-4'>
          <Button text={'Start your test'} onClick={navigateToTest} />
        </div>
    </div>
  )
}

export default Home
