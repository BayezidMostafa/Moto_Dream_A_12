import { Fragment, useContext, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import { AuthContext } from "../../../Context/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BooingModal({ handleOpen, open, setOpen, product }) {
    const { user } = useContext(AuthContext);
    const { email, displayName } = user
    const { name, re_sell_price, picture, _id } = product;
    const navigate = useNavigate()

    const handleModalSubmit = event => {
        event.preventDefault();
        const form = event.target;;
        const email = form.email.value;
        const name = form.name.value;
        const product_name = form.product.value;
        const price = form.price.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;
        const bookingData = {
            picture,
            email,
            name,
            product_name,
            price,
            phoneNumber,
            location,
            bookingId: _id
        }
        axios.post('http://localhost:5000/bookedProducts', bookingData)
        .then(res => {
            const data = res.data;
            navigate('/dashboard/myorders')
        })
    }

    return (
        <Fragment>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 1, y: -300 },
                }}
            >
                <DialogHeader>BOOK YOUR MOTORCYCLE!</DialogHeader>
                <DialogBody divider>
                    <form onSubmit={handleModalSubmit} className="flex flex-col gap-4 w-96 mx-auto">
                        <Input name="email" className="" disabled defaultValue={email} color="teal" label="Your Email" />
                        <Input name="name" className="" disabled defaultValue={displayName} color="teal" label="Your Name" />
                        <Input name="product" className="" disabled defaultValue={name} color="teal" label="Product Name" />
                        <Input name="price" className="" disabled defaultValue={re_sell_price} color="teal" label="Price" />
                        <Input name="phoneNumber" className="" color="teal" label="Your Phone Number" />
                        <Input name="location" className="" color="teal" label="Meeting Location" />
                        <div className="flex justify-end">
                            <Button
                                variant="gradient"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button type="submit" variant="gradient" color="amber" onClick={handleOpen}>
                                <span>Confirm</span>
                            </Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}