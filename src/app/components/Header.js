'use client'
import React, { useState } from 'react';
// import Login from './Login';
// import Signup from './Signup';
// import DropMenu from './DropMenu';
// import { motion } from 'framer-motion';
import Link from 'next/link'

const Header = () => {

    //making a toggle switch
    const [isOpen, setisOpen] = useState(false)
    const handleHamburger = () => {
        setisOpen(!isOpen)
    }

    //login-signin switch
    const [activeButton, setActiveButton] = useState(null)
    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    }

    return (
        <>
            <nav className='py-6 px-32 border flex items-center justify-between shadow-sm sm:px-4'>
                <div className=''>
                    <button className='flex flex-col' onClick={handleHamburger}>
                        <span className={`${isOpen ? 'h-1 w-7 bg-light/70 mb-1 rotate-45 translate-y-2 transition-all duration-300' : 'h-1 w-7 bg-light mb-1 transition-all duration-300'}`}></span>
                        <span className={`${isOpen ? 'transition-all duration-300' : 'h-1 w-7 bg-light transition-all duration-300'}`}></span>
                        <span className={`${isOpen ? 'h-1 w-7 bg-light/70 mt-1 -translate-y-1 -rotate-45 transition-all duration-300' : 'h-1 w-7 bg-light mt-1 transition-all duration-300'}`}></span>
                    </button>
                </div>
                <h1 className='sm:hidden'>Logo</h1>
                <div className='flex items-center justify-between text-xl'>
                    <Link href={'/pricing'} className='mr-4'>Pricing</Link>
                    <Link href={'/about'} className='mx-4'>About</Link>
                    <Link href={'/login'} className='mx-4'>Login</Link>
                    <Link href={'/signup'} className='ml-4'>Signup</Link>
                </div>
            </nav>
    
            {/* <div>
                {
                    isOpen? <DropMenu/>: null
                }
            </div> */}

            {/* <div>
                {activeButton === 'login' &&
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <Login />
                    </motion.div>
                }
                {activeButton === 'signup' &&
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <Signup />
                    </motion.div>
                }
            </div> */}
        </>
    )
}

export default Header