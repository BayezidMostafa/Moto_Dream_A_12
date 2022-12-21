import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import React from 'react';
import toast from "react-hot-toast";

export default function MyProduct({ myProduct, refetch }) {
    const { product_status, name, picture, re_sell_price, advertisement, _id } = myProduct

    const makeAdvertisement = () => {
        fetch(`https://a-12-server-side.vercel.app/advertisement/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('moto-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make advertisement successful.')
                    refetch()
                }
            })
            .catch(err => {
            })
    }

    const handleProductDelete = () => {
        fetch(`https://a-12-server-side.vercel.app/deleteproduct/${_id}`, {
            method:"DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('moto-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            console.log(data);
        })
    }

    return (
        <Card className="">
            <CardHeader floated={false} className="">
                <img src={picture} alt="" />
            </CardHeader>
            <CardBody className="">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    <span>{name}</span>

                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    <span className="uppercase">{product_status}</span>
                </Typography>
                <div className="flex justify-between">
                    <div color="blue" className="font-medium">
                        Price: ${re_sell_price}
                    </div>
                    <div color="blue" className="font-medium">

                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-between mt-5">
                    <Button onClick={handleProductDelete} color="red">Delete This Product</Button>
                    {
                        advertisement ? <Button disabled >Advertised</Button> : <Button onClick={makeAdvertisement} >Advertise</Button>
                    }
                </div>
            </CardBody>
        </Card>
    );
}