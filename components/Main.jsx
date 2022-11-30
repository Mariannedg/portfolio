import React from 'react'
import Image from 'next/image'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div className='w-full h-screen text-left'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className='w-[75%]'>
                    <h1 className='py-4'>Hey, Ik Ben Marianne de Gooijer -</h1>
                    <h1 className='pb-2 text-[#db2777]'>Front-End Web Developer</h1>
                    <p className='py-4 max-w-[550px]'>Ik ben student Software Developer op het Technova College in Ede. Ik vind zelf Front-End development het leukst dus daar focus ik mij vooral op.</p>
                    <div className='flex items-center justify-between max-w-[330px] py-4'>
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
                <div className='w-[50%]'>
                    {/* <Image src="/assets/logo.png" alt="Logo Marianne" width='65' height='50' /> */}
                </div>
            </div>
        </div>
    )
}

export default Main