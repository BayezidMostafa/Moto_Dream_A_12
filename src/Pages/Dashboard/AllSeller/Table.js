import axios from 'axios';
import React from 'react';

const Table = ({ seller, refetch }) => {
    const { name, email, _id } = seller;


    const handleSellerVerify = () => {
        console.log(email);
        fetch(`http://localhost:5000/makeverified/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('moto-token')}`
            }
        })
            .then(res => res.json())
            .then(() => {
                axios.put(`http://localhost:5000/verifytheseller/${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('moto-token')}`
                    }
                })
                    .then(res => {
                        refetch()
                        console.log(res.data);
                    })
            })
    }
    const handleSellerDelete = () => {
        fetch(`http://localhost:5000/deleteseller/${email}`, {
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