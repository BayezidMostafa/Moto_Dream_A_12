import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authToken } from "../../Auth/authToken";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const SignUp = () => {
    useTitle("SIGN UP")
    const { createUser, updateUserInfo, googleProviderLogin, loading, setLoading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleFormSubmit = event => {
        setLoading(true)
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0]
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;
        const usersData = {
            name,
            email,
            role
        }

        const formData = new FormData()
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                const image = imgData.data.display_url;
                createUser(email, password)
                    .then(result => {
                        const profile = {
                            displayName: name,
                            photoURL: image
                        }
                        updateUserInfo(profile)
                            .then(() => {
                                setLoading(false)
                            })
                            .catch(err => {
                                console.error(err)
                                setLoading(false);
                            });
                        axios.put('https://a-12-server-side.vercel.app/users', usersData, {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('moto-token')}`
                            }
                        })
                            .then(res => {
                                toast.success('Account Created Successfully')
                                authToken(usersData);
                                setLoading(false)
                                navigate(from, { replace: true })
                            })
                            .cache(err => {
                                console.error(err)
                            })

                    })
                    .catch(error => {
                        setLoading(false)
                        console.error(error)
                    })

            })
    }
    const googleLogin = () => {
        setLoading(true)
        googleProviderLogin()
            .then(result => {
                console.log(result.user);
                const user = {
                    name: result.user.displayName,
                    email: result.user.email,
                    role: 'buyer'
                }
                axios.put('https://a-12-server-side.vercel.app/users', user)
                    .then(data => {
                        toast.success('Google Log In Successfully')
                        setLoading(false)
                        authToken(result.user)
                        navigate(from, { replace: true })
                    })
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
    }

    if (loading) {
        return <div className="flex justify-center items-center min-h-[71.2vh]"><Loading /></div>
    }

    return (
        <div className="min-h-[71.2vh] flex justify-center items-center">
            <form onSubmit={handleFormSubmit}>
                <Card className="sm:w-96 shadow-sm shadow-gray-500">
                    <p className="text-center text-3xl sm:text-5xl font-bold text-teal-500 my-5">Sign Up</p>
                    <CardBody className="flex flex-col gap-4">
                        <Input type='name' name="name" color="teal" label="Name" size="lg" />
                        <input name="image" type="file" className="border rounded w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400" required />
                        <select name="role" className="w-full p-2.5 bg-white border border-teal-100 rounded-md shadow-sm outline-none appearance-none focus:border-teal-600">
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                        </select>
                        <Input type='email' name="email" color="teal" label="Email" size="lg" />
                        <Input type='password' name="password" color="teal" label="Password" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type="submit" variant="gradient" color="amber" fullWidth>
                            Sign up
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            Already have an account?<Link className="underline hover:text-amber-500 duration-200 ml-1" to='/signin'>Sign in</Link>
                        </Typography>
                    </CardFooter>
                    <div onClick={googleLogin} className="pb-5 flex items-center justify-center py-3 hover:bg-gray-200 cursor-pointer rounded-xl">
                        <Link>
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

