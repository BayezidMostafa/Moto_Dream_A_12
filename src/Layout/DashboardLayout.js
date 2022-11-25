import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { AuthContext } from '../Context/AuthProvider'

const DashboardLayout = () => {
    const { user, userLogout } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')

    const { displayName, photoURL } = user;

    const handleMenuToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            <div className='bg-teal-600 text-white flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>MOTO DREAM</Link>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Bars3Icon onClick={handleMenuToggle} className='h-14 w-14 p-2 rounded  ' />
                </div>
            </div>
            <div>
                <div>
                    <p style={{ textShadow: "0 2px 5px gray" }} className='text-center text-xl font-bold mt-4 sm:text-3xl md:text-4xl text-teal-800'>Welcome To Dashboard {displayName}</p>
                </div>
                <Outlet />
            </div>
            <div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-teal-600 backdrop-blur-lg shadow-md shadow-teal-500 bg-opacity-10 w-60 sm:w-64 md:w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'} md:translate-x-0  transition duration-200 ease-in-out`}>
                <div className='flex justify-center'>
                    <Link><img src={photoURL} className="rounded mt-3 hover:shadow-xl shadow-black" alt="" /></Link>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
