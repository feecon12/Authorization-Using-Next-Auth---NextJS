'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import GoogleIcon from './Icons'
import toast from 'react-hot-toast'

const Signup = () => {
    const router = useRouter();

    const handleLogin = async() => {
        try {
            await signIn('google');
            router.push('/profiles');
        } catch (error) {
            toast.error('error');
        }
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-2xl font-bold mt-4'>Signin</h1>
                <form className='mt-8 flex flex-col items-center mb-8 border p-8 shadow-lg'>
                    <label>Username : </label>
                    <input type='text' placeholder='Username' className='px-2 py-1 border border-solid focus:outline-none' />

                    <label>Email : </label>
                    <input type='email' placeholder='Email' className='px-2 py-1 border border-solid focus:outline-none' />

                    <label>Password : </label>
                    <input type='password' placeholder='Password' className='px-2 py-1 border border-solid focus:outline-none' />

                    <button className='my-4 bg-slate-600 px-4 py-2 rounded-lg text-white hover:text-black hover:bg-white hover:border hover:border-solid'>Signin</button>
                </form>
                <h2 className='mt-4'>-OR-</h2>
                <button
                    className='mt-8 bg-black text-white font-bold shadow-sm px-8 py-2 rounded-lg hover:bg-white hover:border hover:border-black hover:text-black'
                    onClick={handleLogin}
                    >
                    Signin using <GoogleIcon />

                </button>
            </div>
        </>
    );



}

export default Signup;


