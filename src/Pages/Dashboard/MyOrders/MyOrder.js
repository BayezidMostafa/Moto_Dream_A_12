import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function MyOrder({ order, refetch }) {
    const { picture, product_name, price, paid, _id, bookingId } = order;
    console.log(bookingId);
    return (
        <Card className="mt-10">
            <CardHeader color="teal" className="relative">
                <img
                    src={picture}
                    alt="img-teal-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    {product_name}
                </Typography>
                <Typography>
                    Product Price: <span className="text-teal-600">{price}</span>
                </Typography>
            </CardBody>
            <div className="mx-4 mb-3">
                {
                    !paid ? <Link to={`/dashboard/payment/${_id}`}><Button color="teal" variant="gradient" fullWidth>PAY FOR THIS PRODUCT</Button></Link> : <Button color="teal" variant="gradient" fullWidth disabled>PAID</Button>
                }
            </div>
        </Card>
    );
}