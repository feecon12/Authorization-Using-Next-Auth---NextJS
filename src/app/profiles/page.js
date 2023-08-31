'use client'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Profiles = () => {

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/'); 
    } catch (error) {
      console.log('error');
    }
  };
  
  return (
    <>
      <div>
        <div className='flex flex-col items-center justify-center'>
          <button className='mt-10 mb-10 bg-black text-white font-bold shadow-sm px-6 py-2 rounded-lg hover:bg-white hover:border hover:border-black hover:text-black'
            onClick={handleLogout}
          >Logout button
          </button>
        </div>
      </div>
    </>
  );

}

export default Profiles;