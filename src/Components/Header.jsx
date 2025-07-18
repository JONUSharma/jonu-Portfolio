import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { anticipate, motion } from 'framer-motion';
const Header = () => {
    const navitems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/certificate", label: "Certificate" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ]
    const [isopen, setIsOpen] = useState(false);
    return (

        <nav className=' bg-[#000000f7] z-50 flex justify-between  sticky top-0  p-4'>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotateX: 2, rotateY: 2 }}
                className='hover:text-slate-600 flex text-white '>
                <NavLink to="/" className='font-bold text-2xl'>Web developer!</NavLink>
            </motion.div>
            <div className='hidden md:flex  space-x-8  '>
                {
                    navitems.map((item, id) => {
                        return (
                            <NavLink key={id} className={({ isActive }) => `hover:text-slate-300  relative pb-1  hover:underline hover:scale-105 ${isActive ? ' wave-text ' : "text-white font-semibold "}`} to={item.path}>
                                {item.label}
                            </NavLink>
                        )
                    })
                }
            </div>

            Mobile device

            <div className='md:hidden text-4xl cursor-pointer z-20 text-white' onClick={(e) => setIsOpen(!isopen)}>
                {isopen ? < HiX /> : <HiOutlineMenu />}
            </div>
            {
                isopen && (
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className='flex  flex-col z-10  justify-center items-center fixed top-0 left-0  p-5 rounded-lg space-y-4 bg-[#070a0bf7]  text-2xl font-semibold w-screen h-screen'>
                        {
                            navitems.map((item, id) => (
                                <NavLink to={item.path} key={id} className={({ isActive }) => `  p-5 text-white ${isActive ? 'wave-text underline' : "text-white "}`}>
                                    {item.label}
                                </NavLink>
                            ))
                        }
                    </motion.div>
                )
            }
        </nav>




    )
}

export default Header