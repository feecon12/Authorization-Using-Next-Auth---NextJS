import React from 'react'
import {motion} from 'framer-motion'

const Tabs = ({title}) => {
    return <>
        <li>
        <h2>{title}</h2>
        </li>
    </>
}

const DropMenu = () => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0,}}
            animate={{ scale: 1, opacity: 1 }}
            transition={{duration:0.5}}
            className='mx-32 px-4 py-4 flex items-center justify-center text-left w-[12.5%] border shadow-lg absolute z-1'>
            <ul>
                <li><Tabs title={'Overview'}/></li>
                <li><Tabs title={'New Release'}/></li>
                <li><Tabs title={'View Release'}/></li>
                <li><Tabs title={'Analytics'}/></li>
                <li><Tabs title={'Funds'}/></li>
                <li><Tabs title={'Settings'}/></li>
                
            </ul>
        </motion.div>
    )
}

export default DropMenu