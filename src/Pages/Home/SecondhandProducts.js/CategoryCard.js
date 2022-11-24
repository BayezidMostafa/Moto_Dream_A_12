import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const { picture, title } = category;
    return (
        <Card className="">
            <CardHeader floated={false} className="">
                <img src={picture} alt="" />
            </CardHeader>
            <CardBody className="text-center">
                <p className="text-3xl font-bold uppercase">{title}</p>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Link><Button variant="gradient" color="amber" size="">Show All</Button></Link>
            </CardFooter>
        </Card>
    );
}
export default CategoryCard;