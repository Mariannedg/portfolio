import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            {/* Desktop menu */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src="/../public/assets/logo.png" alt="Logo Marianne" width='65' height='50' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Over mij</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Portfolio</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-lg hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar