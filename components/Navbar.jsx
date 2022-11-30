import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            {/* Desktop menu */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src="/assets/logo.png" alt="Logo Marianne" width='65' height='50' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Over mij</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Vaardigheden</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Projecten</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[100%] sm:w-[75%] md:w-[45%] h-screen bg-[#fdf2f8] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between border-b border-gray-300 pb-10'>
                            <Image src='/assets/logo.png' alt='Logo Marianne' width='75' height='45' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={19} />
                            </div>
                        </div>
                    </div>
                    <div className='py-6 flex flex-col'>
                        <ul>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Over mij</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Vaardigheden</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Projecten</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-lg'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-32'>
                            <p className='uppercase font-bold tracking-widest text-[#db2777]'>Maak contact</p>
                            <div className='flex items-center my-4 w-full sm:w-[80%]'>
                                <div className='mr-5 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='mr-5 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='mr-5 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineInstagram />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar