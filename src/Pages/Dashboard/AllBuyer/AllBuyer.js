import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import BuyerTable from './BuyerTable';

const AllBuyer = () => {

    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allbuyers', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('moto-token')}`
                }
            })
            return res.data
        }
    })

    return (
        <div>
            <div>
                {
                    <p className='text-xl text-center mt-5 font-bold'>All Buyers Data</p>
                }
            </div>
            <div className='mt-5'>
                <div className="bg-white">
                    <div className="overflow-x-auto border-x border-t">
                        <table className="table-auto w-full">
                            <thead className="border-b">
                                <tr className="bg-gray-100">
                                    <th className="text-left p-4 font-medium">
                                        Name
                                    </th>
                                    <th className="text-left p-4 font-medium">
                                        Email
                                    </th>
                                    <th className="text-left p-4 font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyers.map(buyer => <BuyerTable isLoading={isLoading} refetch={refetch} key={buyer._id} buyer={buyer} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;