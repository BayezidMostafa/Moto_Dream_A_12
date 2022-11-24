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

const SignIn = () => {
    const { logInUser, googleProviderLogin, loading, setLoading } = useContext(AuthContext);

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    const handleGoogleLogIn = () => {
        googleProviderLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="min-h-[71.2vh] flex justify-center items-center">
            <form onSubmit={handleFormSubmit}>
                <Card className="sm:w-96 shadow-sm shadow-gray-500">
                    <p className="text-center text-3xl sm:text-5xl font-bold text-teal-500 my-5">Sign in</p>
                    <CardBody className="flex flex-col gap-4">
                        <Input name="email" type='email' label="Email" size="lg" />
                        <Input name="password" type='password' label="Password" size="lg" />
                        <div className="-ml-2.5">
                            <Checkbox color="amber" label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type="submit" variant="gradient" color="amber" fullWidth>
                            Sign in
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don't have an account? <Link className="ml-1 underline hover:text-amber-500 duration-200" to='/signup'>Sign up</Link>
                        </Typography>
                    </CardFooter>
                    <div className="pb-5 flex items-center justify-center py-3 hover:bg-gray-200 cursor-pointer rounded-xl">
                        <Link onClick={handleGoogleLogIn}>
                            <p className="text-center text-2xl font-semibold">
                                <span className="text-blue-500">G</span>
                                <span className="text-red-500">o</span>
                                <span className="text-yellow-500">o</span>
                                <span className="text-blue-500">g</span>
                                <span className="text-green-500">l</span>
                                <span className="text-red-500">e</span> sign in</p>
                        </Link>
                    </div>
                </Card>
            </form>
        </div>
    );
}

export default SignIn;