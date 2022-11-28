import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

export default function WishlistCard({ list }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const {
        picture, email, product_name, price, location, booking_id
    } = list;
    const data = {
        picture,
        email,
        product_name,
        price,
        location,
        booking_id
    }

    const handleOrder = () => {
        axios.post('http://localhost:5000/bookedProducts', data)
            .then(res => {
                const data = res.data;
                navigate('/dashboard/myorders')
            })
    }


    return (
        <Card className="mt-10">
            <CardHeader color="teal" className="relative">
                <img
                    src={picture}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {product_name}
                </Typography>
                <Typography>
                    Price: <span className="font-bold">${price}</span>
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Link className="w-full" onClick={handleOrder}><Button className="" color="teal" fullWidth>Order This Product</Button></Link>
            </CardFooter>
        </Card>
    );
}