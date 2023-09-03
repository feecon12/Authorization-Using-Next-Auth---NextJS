'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import GoogleIcon from '../components/Icons'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const Signup = () => {
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await signIn('google');
            router.push('/profiles');
        } catch (error) {
            toast.error('error');
        }
    }

    return (
        <>
            <main className='grid grid-cols-2 gap-4'>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}

                    className='flex flex-col items-center justify-center min-h-screen border'>
                    <h1 className='text-2xl font-bold mt-4'>Join FME</h1>
                    <form className='mt-8 w-[300px]  flex-col items-left mb-8 border p-8 shadow-lg rounded-xl'>
                        <label className='text-2xl'>Name</label>
                        <input type='text' className=' text-dark px-2 py-1 border border-solid focus:outline-none mb-2 rounded-lg' />

                        <label className=''>Email Address</label>
                        <input type='email' className='text-dark px-2 py-1 border border-solid focus:outline-none my-2 rounded-lg' />

                        <label className=''>Password</label>
                        <input type='password' className='text-dark px-2 py-1 border border-solid focus:outline-none mt-2 rounded-lg' />

                        <p className='mt-2 mx-auto text-[8px] items-center justify-between'>Password must be at least 8 characters long and contain at least 1 upper case letter, 1 number, and one of these special characters: @$!%*?&</p>

                        <div className='mt-3'>
                            <input type='checkbox' />
                            <label className='ml-2 text-xs'>Terms & conditions applied</label>
                        </div>

                        <button className='my-4 bg-primary font-bold px-4 py-2 rounded-lg text-light hover:text-dark hover:bg-light hover:border-dark hover:border-solid '>SIGN UP</button>
                    </form>
                </motion.div>

                <div className='border'>

                </div>

            </main>

        </>
    );
}

export default Signup;


