import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonLoading from "../../Components/ButtonLoading/ButtonLoading";
import { authToken } from "../../Auth/authToken";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import toast from "react-hot-toast";


const SignIn = () => {
    useTitle('SIGN IN')
    const { logInUser, googleProviderLogin, loading, setLoading } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


    const handleFormSubmit = event => {
        setLoading(true)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                authToken(user)
                toast.success('Successfully Signed In')
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoading(false)
                console.error(err)
            })
    }

    const handleGoogleLogIn = () => {
        setLoading(true)
        googleProviderLogin()
            .then(result => {
                if (result.user) {
                    const user = {
                        name: result?.user.displayName,
                        email: result?.user.email,
                        role: 'buyer'
                    }
                    fetch('https://a-12-server-side.vercel.app/users', {
                        method: "PUT",
                        headers: {
                            'content-type':'application/json',
                            authorization: `Bearer ${localStorage.getItem('moto-token')}`
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            authToken(result.user)
                            console.log(data);
                            toast.success('Google Log In Successful')
                            setLoading(false)
                            navigate(from, { replace: true })
                        })
                }


            })
            .catch(err => {
                setLoading(false)
                console.error(err)
            });
    }

    if (loading) {
        return <div className="flex min-h-[71vh] justify-center items-center"><Loading /></div>
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
                        <Button className="flex justify-center" type="submit" variant="gradient" color="amber" fullWidth>
                            {
                                loading ? <ButtonLoading /> : 'Sign in'
                            }
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Don't have an account? <Link className="ml-1 underline hover:text-amber-500 duration-200" to='/signup'>Sign up</Link>
                        </Typography>
                    </CardFooter>
                    <div onClick={handleGoogleLogIn} className="pb-5 flex items-center justify-center py-3 hover:bg-gray-200 cursor-pointer rounded-xl">
                        <Link>
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