/* eslint-disable @next/next/no-img-element */
import React from 'react'
import wall from '../../public/images/wallpapers/wall3.png'


const page = () => {
  return (
    <>
      <main>
        <img src={wall} alt='wallpaper' className='w-full min-h-screen'/>
      </main>    
    </>
  )
}

export default page