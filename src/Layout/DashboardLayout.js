import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ArrowLeftOnRectangleIcon, Bars3Icon, DocumentPlusIcon, HomeIcon, RectangleStackIcon, ShieldExclamationIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../Context/AuthProvider'
import { Button } from '@material-tailwind/react'
import { } from '@heroicons/react/24/solid'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import useTitle from '../Hooks/useTitle'



const DashboardLayout = () => {
    useTitle("DASHBOARD")
    const { user, userLogOut } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')
    const { displayName, photoURL, email } = user;

    const { data: userData = [], isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axios.get(`https://a-12-server-side.vercel.app/users/${email}`, {
                headers: {
                    'content-type':'application/json',
                    authorization: `bearer ${localStorage.getItem('moto-token')}`
                }
            });
            return res.data
        }
    })

    const handleSignOut = () => {
        userLogOut()
            .then(() => {
            })
            .catch(err => {
            })
    }


    const handleMenuToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            <div className='bg-teal-600 text-white flex justify-between lg:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>MOTO DREAM</Link>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Bars3Icon onClick={handleMenuToggle} className='h-14 w-14 p-2 rounded  ' />
                </div>
            </div>
            <div className=''>
                <div className='text-center'>
                    <p style={{ textShadow: "0 2px 5px gray" }} className='text-xl font-bold mt-4 sm:text-3xl md:text-4xl lg-text-6xl text-teal-800 dark:text-gray-200'>Welcome {displayName}!</p>
                    <p style={{ textShadow: "0 2px 4px gray" }} className='text-xl font-bold mt-4 sm:text-3xl md:text-4xl lg-text-6xl text-teal-800 dark:text-gray-200'>Here is your Dashboard</p>
                </div>
                <Outlet />
            </div>
            <div className={`z-10 md:fixed overflow-x-hidden bg-teal-600 backdrop-blur-lg shadow-md shadow-teal-500 bg-opacity-10 w-60 sm:w-64 md:w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'} lg:translate-x-0  transition duration-200 ease-in-out`}>
                <div className='flex flex-col justify-center items-center'>
                    <Link><img src={photoURL} className="rounded w-36 h-auto mt-3 hover:shadow-xl shadow-black" alt="" /></Link>
                    <Link className='mt-3 text-3xl dark:text-gray-200 font-semibold'>{userData?.name}</Link>
                    <p className='text-[1rem] font-bold dark:text-gray-200 uppercase'>{userData.role}</p>
                </div>
                <div className=''>
                    <div className='text-center flex flex-col gap-3'>
                        {
                            userData?.role === 'admin' &&
                            <>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90 justify-center text-lg py-2 flex items-center' to='/'><HomeIcon className='w-5 h-5 mr-1' />Home</Link>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90  text-lg py-2 flex justify-center items-center' to='/dashboard/allseller'><UserGroupIcon className='w-5 h-5 mr-1' /> All Seller</Link>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90  text-lg py-2 flex justify-center items-center' to='/dashboard/allbuyers'> <UserGroupIcon className='w-5  h-5 mr-1' />  All Buyer</Link>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90  text-lg py-2 flex justify-center items-center' to=''><ShieldExclamationIcon className='w-14 h-14 mr-1' /> Reported Items</Link>
                            </>
                        }
                    </div>
                    <div className='text-center flex flex-col gap-3'>
                        {
                            userData?.role === 'seller' &&
                            <>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90 justify-center text-lg py-2 flex items-center' to='/'><HomeIcon className='w-5 h-5 mr-1' />Home</Link>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90  text-lg py-2 flex justify-center items-center' to='/dashboard/addproduct'><DocumentPlusIcon className='w-14 h-14 mr-1' /> Add A Products</Link>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90  text-lg py-2 flex justify-center items-center' to='/dashboard/myallproducts'><RectangleStackIcon className='w-14 h-14 mr-1' /> My All Products</Link>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90  text-lg py-2 flex justify-center items-center' to='/'><UserGroupIcon className='w-5 h-5 mr-1 ' /> My Buyers</Link>
                            </>
                        }
                    </div>
                    <div className='text-center flex flex-col gap-3'>
                        {
                            userData?.role === 'buyer' &&
                            <>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90 justify-center text-lg py-2 flex items-center' to='/'><HomeIcon className='w-5 h-5 mr-1' />Home</Link>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90  text-lg py-2 flex justify-center items-center' to='/dashboard/myorders'><ShoppingCartIcon className='w-5 h-5 mr-1' /> My Orders</Link>
                                <Link className='bg-teal-500 text-white px-20 rounded shadow-sm duration-150 hover:shadow-gray-700 hover:bg-opacity-90  text-lg py-2 flex justify-center items-center' to='/dashboard/wishlist'><ShoppingCartIcon className='w-5 h-5 mr-1' />My Wishlist</Link>
                            </>
                        }
                    </div>
                </div>
                <Button className='flex items-center justify-center' color='teal' size='lg' variant='gradient' fullWidth onClick={handleSignOut}><ArrowLeftOnRectangleIcon className='w-6 h-6 mr-1' /> Sign Out</Button>
            </div>
        </>
    )
}

export default DashboardLayout
