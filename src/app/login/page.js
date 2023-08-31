'use client'
import { signIn } from 'next-auth/react';
import GoogleIcon from '../components/Icons';
import { useRouter } from 'next/navigation';
import {motion} from 'framer-motion'

const Login = () => {
    const router = useRouter();

    async function handleLogin() {
        const response = await signIn('google');
        if (response?.error) {  
            console.log('error');
        } else {
            router.push('/profiles');
        }
    }

    return (
        <>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-2xl font-bold mt-4'>FME India</h1>
                <form
                    className='mt-8 flex flex-col items-left mb-8 border p-8 shadow-xl rounded-xl '>
                    
                    <label>Email Address</label>
                    <input type='email' className='px-2 py-1 my-2 border border-solid focus:outline-none rounded-lg' />

                    <label>Password</label>
                    <input type='password' className='px-2 py-1 my-2 border border-solid focus:outline-none rounded-lg' />

                    <button className='my-4 bg-primary px-4 py-2 rounded-lg text-light font-bold hover:text-dark hover:bg-light hover:border-dark hover:border-solid'>Login</button>
                </form>
            </motion.div>
        </>
    )
}

export default Login


