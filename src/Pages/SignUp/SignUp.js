import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
    const { createUser, user, updateUserInfo, googleProviderLogin, loading, setLoading } = useContext(AuthContext)
    console.log(user);

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0]
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, image, email, password);

        const formData = new FormData()
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                const image = result.data.display_url;
                createUser(email, password)
                    .then(result => {
                        const profile = {
                            displayName: name,
                            photoURL: image
                        }
                        updateUserInfo(profile)
                            .then(() => { })
                            .catch(err => console.error(err));
                    })
                    .catch(error => console.error(error))

            })
    }

    return (
        <div className="min-h-[71.2vh] flex justify-center items-center">
            <form onSubmit={handleFormSubmit}>
                <Card className="sm:w-96 shadow-sm shadow-gray-500">
                    <p className="text-center text-3xl sm:text-5xl font-bold text-teal-500 my-5">Sign Up</p>
                    <CardBody className="flex flex-col gap-4">
                        <Input type='name' name="name" color="teal" label="Name" size="lg" />
                        <input name="image" type="file" className="border rounded w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400" required />
                        <Input type='email' name="email" color="teal" label="Email" size="lg" />
                        <Input type='password' name="password" color="teal" label="Password" size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox color="amber" label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type="submit" variant="gradient" color="amber" fullWidth>
                            Sign up
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Already have an account?<Link className="underline hover:text-amber-500 duration-200 ml-1" to='/signin'>Sign in</Link>
                        </Typography>
                    </CardFooter>
                    <div className="pb-5 flex items-center justify-center py-3 hover:bg-gray-200 cursor-pointer rounded-xl">
                        <Link to='/google'>
                            <span className="text-center text-2xl font-semibold">
                                <span className="text-blue-500">G</span>
                                <span className="text-red-500">o</span>
                                <span className="text-yellow-500">o</span>
                                <span className="text-blue-500">g</span>
                                <span className="text-green-500">l</span>
                                <span className="text-red-500">e</span> sign in</span>
                        </Link>
                    </div>
                </Card>
            </form>
        </div>
    );
}

export default SignUp;