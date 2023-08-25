import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='px-32 py-8 shadow-sm border flex items-center justify-between sm:flex-col'>
                <div>
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                </div>
                <div>
                    Build with <span>&#9825;</span> by Feecon
                </div>
                <div>
                    Say hello
                </div>
            </div>
        </>
    )
}

export default Footer