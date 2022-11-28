import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { MoonLoader } from 'react-spinners';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import WishlistCard from './WishlistCard';

const WIshlist = () => {
    useTitle("WISH LIST")

    const { user } = useContext(AuthContext);

    const { data: wishlist = [], isLoading } = useQuery({
        queryKey: ['wishlisted'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/wishlisted/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('moto-token')}`
                }
            })
            return res.data;
        }
    })

    console.log(wishlist);

    if (isLoading) {
        return <div className='min-h-[70vh] flex justify-center items-center'><MoonLoader color="#008080" /></div>
    }

    return (
        <div>
            <div style={{textShadow:"0 0 2px teal"}} className='text-center mt-5 text-xl font-bold'>
                {
                    wishlist.length === 0 ? <p>{user?.displayName}! Your wishlist is Empty!</p> : <p>{user?.displayName}! Your wishlist is here!</p>
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    wishlist.map(list => <WishlistCard list={list} key={list._id} />)
                }
            </div>
        </div>
    );
};

export default WIshlist;