import React from 'react'
import { motion } from 'framer-motion';

const Stepper = ({ steps, currentStep, className }) => {

    return (
        <div className={`w-[80%] flex items-center justify-center space-x-3 ${className}`}>
            {steps.map((question, index) => (
            <div key={index}
                className={`${
                (steps.indexOf(currentStep) < index && "bg-gray-100 h-2 ") ||
                (steps.indexOf(currentStep) > index && "bg-primary h-2") ||
                "p-0 bg-primary"
                }  w-full rounded flex items-center justify-center transition-bg duration-300 ease-in-out`}
            >
                {steps.indexOf(currentStep) === index && (
                    <motion.div
                        className="w-full h-2 rounded flex items-center justify-center bg-primary"
                        layoutId="bg"
                    />
                )}
            </div>
            ))}
        </div>
    )
}

export default Stepper
