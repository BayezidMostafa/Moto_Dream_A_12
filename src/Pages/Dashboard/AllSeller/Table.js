import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const Table = ({ seller, refetch }) => {
    const { name, email, _id } = seller;


    const handleSellerVerify = () => {
        console.log(email);
        fetch(`https://a-12-server-side.vercel.app/makeverified/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('moto-token')}`
            }
        })
            .then(res => res.json())
            .then(() => {
                axios.put(`https://a-12-server-side.vercel.app/verifytheseller/${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('moto-token')}`
                    }
                })
                    .then(res => {
                        toast.success('Verified Done')
                        refetch()
                        console.log(res.data);
                    })
            })
    }
    const handleSellerDelete = () => {
        fetch(`https://a-12-server-side.vercel.app/deleteseller/${email}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('moto-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }

    return (
        <tr className="border-b">
            <td className="p-4">
                {name}
            </td>
            <td className="p-4">
                {email}
            </td>
            <td className="p-4">
                {
                    seller?.verified ?
                        <button className='px-2 py-1 rounded bg-blue-700 hover:bg-blue-600 duration-200 text-white' onClick={handleSellerVerify}>Verified</button>
                        :
                        <button className='px-2 py-1 rounded bg-blue-700 hover:bg-blue-600 duration-200 text-white' onClick={handleSellerVerify}>Verify</button>
                }
            </td>
            <td className="p-4">
                <button className='px-2 py-1 rounded bg-red-700 text-white hover:bg-red-600 duration-200' onClick={handleSellerDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default Table;