import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const AdvertisedItems = () => {

    const { data: advertisedData = [], isLoading } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/advertised`)
            return res.data
        }

    })
    console.log(advertisedData);

    return (
        <div>
            {
                advertisedData.length !== 0 &&
                <div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            }
        </div>
    );
};

export default AdvertisedItems;