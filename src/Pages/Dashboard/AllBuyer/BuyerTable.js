import React from 'react';

const BuyerTable = ({ buyer, refetch }) => {
    const { name, email } = buyer;

    const handleBuyerDelete = () => {
        fetch(`http://localhost:5000/deletebuyer/${email}`, {
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
                <button className='px-2 py-1 rounded bg-red-700 text-white hover:bg-red-600 duration-200' onClick={handleBuyerDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default BuyerTable;