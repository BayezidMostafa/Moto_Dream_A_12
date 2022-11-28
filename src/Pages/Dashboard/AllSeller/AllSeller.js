import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Table from './Table';

const AllSeller = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allseller', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('moto-token')}`
                }
            })
            return res.data
        }
    })


    console.log(sellers);


    

    return (
        <div>
            <div>
                {
                    <p className='text-xl text-center mt-5 font-bold'>All Seller Data</p>
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
                                        Role
                                    </th>
                                    <th className="text-left p-4 font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sellers.map(seller => <Table isLoading={isLoading} refetch={refetch} key={seller._id} seller={seller} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;