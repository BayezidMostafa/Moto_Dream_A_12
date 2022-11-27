import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from 'react';
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";

export default function MyProduct({ myProduct, refetch }) {
    const { user } = useContext(AuthContext)
    const { product_status, name, picture, re_sell_price, advertisement, _id } = myProduct

    const makeAdvertisement = () => {
        fetch(`http://localhost:5000/advertisement/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('moto-token')}`
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
                    <Button color="red">Delete This Product</Button>
                    {
                        advertisement ? <Button disabled >Advertised</Button> : <Button onClick={makeAdvertisement} >Advertise</Button>
                    }
                </div>
            </CardBody>
        </Card>
    );
}