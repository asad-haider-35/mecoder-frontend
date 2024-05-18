import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { ErrorScreen } from '../assets'
import { Button } from '../components'

const Error = () => {

    const navigate = useNavigate();

    function navigateToHome(){
        navigate('/');
    }

  return (
    <div className='flex justify-center items-center pt-10 flex-col gap-5 px-10'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          className='flex-1 text-center font-bold font-redHatDisplay text-[24px] md:text-[45px]'
        >
            Seems like we are experiencing an outage
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className='flex-1 flex justify-center md:mt-6 w-full h-full'
        >
            <img src={ErrorScreen} alt='Start' />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className='flex-1 flex justify-center mt-6 md:mt-12 py-4'
        >
            <Button text={'Back to home page'} onClick={navigateToHome} />
        </motion.div>
    </div>
  )
}

export default Error
