import { Fragment, useContext, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import { AuthContext } from "../../../Context/AuthProvider";

export default function BooingModal({ handleOpen, open, setOpen, product }) {

    const { user } = useContext(AuthContext);
    const { email, displayName } = user
    const { name, re_sell_price } = product;

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
                    <form className="flex flex-col gap-4 w-96 mx-auto">
                        <Input className="" disabled defaultValue={email} color="teal" label="Your Email" />
                        <Input className="" disabled defaultValue={displayName} color="teal" label="Your Name" />
                        <Input className="" disabled defaultValue={name} color="teal" label="Product Name" />
                        <Input className="" disabled defaultValue={'$' + re_sell_price} color="teal" label="Price" />
                        <Input className="" color="teal" label="Your Phone Number" />
                        <Input className="" color="teal" label="Meeting Location" />
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