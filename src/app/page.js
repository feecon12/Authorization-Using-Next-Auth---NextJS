/* eslint-disable @next/next/no-img-element */
import React from 'react'
import wall from '../../public/images/wallpapers/wall3.png'


const page = () => {
  return (
    <>
      <div>
        <img src={wall} alt='wallpaper' className='w-full min-h-screen'/>
      </div>    
    </>
  )
}

export default page