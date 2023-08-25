'use client'
import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Header = () => {

    //making a toggle switch
    const [isOpen, setisOpen] = useState(false)
    const handleHamburger = () => {
        setisOpen(!isOpen)
    }

    //login-signin switch
    const [activeButton, setActiveButton] = useState(null)
    const handleClick = (buttonName:string) => {
        setActiveButton(buttonName)
    }
   
    return (
        <>
            <nav className='py-6 px-32 border flex items-center justify-between shadow-sm sm:px-4'>
                <div className=''>
                    <button className='flex flex-col' onClick={handleHamburger}>
                        <span className={`${isOpen ? 'h-1 w-8 bg-black/50 mb-1 rotate-45 translate-y-2' : 'h-1 w-8 bg-black/50 mb-1'}`}></span>
                        <span className={`${isOpen ? '' : 'h-1 w-8 bg-black/50'}`}></span>
                        <span className={`${isOpen ? 'h-1 w-8 bg-black/50 mt-1 -translate-y-1 -rotate-45' : 'h-1 w-8 bg-black/50 mt-1'}`}></span>
                    </button>
                </div>
                <h1 className='sm:hidden'>Logo</h1>
                <div>
                    <button onClick={()=> handleClick('login')} className='mr-4 hover:underline hover:underline-offset-2'>Login</button>
                    <button onClick={()=>handleClick('signup')} className='ml-4 hover:underline hover:underline-offset-2'>Signin</button>

                </div>
            </nav>

            <div>
                {activeButton === 'login' && <Login/>}
                {activeButton === 'signup' && <Signup/>}
            </div>

        </>
    )

}

export default Header