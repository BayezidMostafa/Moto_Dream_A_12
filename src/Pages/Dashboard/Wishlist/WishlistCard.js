import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function WishlistCard({ list }) {
    const {
        picture,
        email,
        category_name,
        name,
        condition,
        description,
        original_price,
        re_sell_price,
        product_id
    } = list;
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
                    {name}
                </Typography>
                <Typography>
                   {description.slice(0, 150)}
                </Typography>
                <Typography>
                   Price: <span className="font-bold">${re_sell_price}</span>
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Link className="w-full" to={`/dashboard/payment/${product_id}`}><Button className="" fullWidth>Buy This Product</Button></Link>
            </CardFooter>
        </Card>
    );
}