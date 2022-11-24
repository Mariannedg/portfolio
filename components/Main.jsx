import React from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-4'>Hey, Ik Ben <span className='text-[#db2777]'>Marianne</span></h1>
                    <h1 className='py-2'>Een Front-End Web Developer</h1>
                    <p className='py-4 max-w-[70%] m-auto'>Ik ben student Software Developer op het Technova College in Ede. Ik vind zelf Front-End development het leukst dus daar focus ik mij vooral op.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='mr-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main